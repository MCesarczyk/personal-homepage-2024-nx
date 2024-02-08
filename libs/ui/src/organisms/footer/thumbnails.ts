import GithubThumbnail from "./githubThumbnail.svg";
import LinkedinThumbnail from "./linkedinThumbnail.svg";
import CodepenThumbnail from "./codepenThumbnail.svg";
import FacebookThumbnail from "./facebookThumbnail.svg";
import InstagramThumbnail from "./instagramThumbnail.svg";

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
        thumbnail: GithubThumbnail,
        url: GITHUB_ADDRESS,
    },
    {
        id: 2,
        thumbnail: LinkedinThumbnail,
        url: LINKEDIN_ADDRESS,
    },
    {
        id: 3,
        thumbnail: CodepenThumbnail,
        url: CODEPEN_ADDRESS,
    },
    {
        id: 4,
        thumbnail: FacebookThumbnail,
        url: FACEBOOK_ADDRESS,
    },
    {
        id: 5,
        thumbnail: InstagramThumbnail,
        url: INSTAGRAM_ADDRESS,
    },
];