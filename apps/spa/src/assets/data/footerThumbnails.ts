import GithubThumbnail from "../icons/githubThumbnail.svg";
import LinkedinThumbnail from "../icons/linkedinThumbnail.svg";
import CodepenThumbnail from "../icons/codepenThumbnail.svg";
import FacebookThumbnail from "../icons/facebookThumbnail.svg";
import InstagramThumbnail from "../icons/instagramThumbnail.svg";

import {
    GITHUB_ADDRESS,
    LINKEDIN_ADDRESS,
    CODEPEN_ADDRESS,
    FACEBOOK_ADDRESS,
    INSTAGRAM_ADDRESS,
} from "./adresses";

export const thumbnails = [
    {
        id: 1,
        icon: GithubThumbnail,
        url: GITHUB_ADDRESS,
    },
    {
        id: 2,
        icon: LinkedinThumbnail,
        url: LINKEDIN_ADDRESS,
    },
    {
        id: 3,
        icon: CodepenThumbnail,
        url: CODEPEN_ADDRESS,
    },
    {
        id: 4,
        icon: FacebookThumbnail,
        url: FACEBOOK_ADDRESS,
    },
    {
        id: 5,
        icon: InstagramThumbnail,
        url: INSTAGRAM_ADDRESS,
    },
];