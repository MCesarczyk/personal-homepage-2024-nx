import { cookies } from 'next/headers';
import * as jwt from 'jsonwebtoken';
import { sortArrayOfObjects } from 'utils-agnostic';

import { type SkillDto } from './types';
import {
  handleCreateNewSkill,
  handleDeleteSkill,
  handleEditSkill,
} from './actions';
import { SkillCreateForm } from './SkillCreateForm';
import { Card } from '../../../components';
import { notFound } from 'next/navigation';

export default async function SkillsPage() {
  const accessToken = cookies().get('accessToken')?.value;

  const currentUserId = (jwt.decode(accessToken as string) as jwt.JwtPayload)
    ?.id;

  const response = await fetch(
    `${process.env.API_URL}${process.env.API_PREFIX}/skill`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: 'include',
    }
  );

  const skills: SkillDto[] = await response.json();

  if (!skills) {
    notFound();
  }

  const skillsSortedByState = sortArrayOfObjects(skills, 'state');

  return (
    <div className="py-8">
      <ul className="flex flex-col gap-4">
        {skillsSortedByState
          .filter(({ userId }) => userId === currentUserId)
          .map(({ id, content, state }) => (
            <li key={id}>
              <Card
                id={id}
                changeState={handleEditSkill}
                editSkill={handleEditSkill}
                deleteSkill={handleDeleteSkill}
                content={content}
                state={state}
              />
            </li>
          ))}
      </ul>
      <SkillCreateForm handleCreateNewSkill={handleCreateNewSkill} />
    </div>
  );
}
