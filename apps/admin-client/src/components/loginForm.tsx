import { Input, Button } from '@ph24/ui';

export const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log('username:', username);
    console.log('password:', password);
  };

  return (
    <form
      className="flex flex-col text-white bg-slate-800 p-8 gap-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="username">Username</label>
      <Input type="text" id="username" name="username" />
      <label htmlFor="password">Password</label>
      <Input type="password" id="password" name="password" />
      <Button variant="PRIMARY" type="submit">
        Submit
      </Button>
    </form>
  );
};
