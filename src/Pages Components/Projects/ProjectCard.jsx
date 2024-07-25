import React from "react";
import ScrollWrapper from "../../utils/ScrollWrapper";

export default function ProjectCard({ title, logo, description, techStack, websiteLink, githubLink }) {
  return (
    <ScrollWrapper>
      <div className="flex h-full max-w-[20rem] flex-col gap-2 rounded-lg bg-zinc-900 p-4 transition-transform md:hover:scale-105 ">
        <div className="relative rounded-lg">
          <img
            alt={title}
            width={1000}
            height={1000}
            className="aspect-video max-h-full max-w-full rounded-lg border-2 border-zinc-500 object-cover object-top  "
            src={logo}
          />
        </div>

        <div className="my-2 flex flex-col gap-3">
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
          <p className="text-sm text-gray-200">
            Tech Stack: <span className="text-gray-400">{techStack.join(", ")}</span>
          </p>
          <div className="mt-2 flex items-center gap-4">
            <a
              href={websiteLink}
              target="_blank"
              className="w-fit cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 md:text-base">
              Visit
            </a>

            <a
              href={githubLink}
              target="_blank"
              className="w-fit cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 md:text-base">
              Github
            </a>
          </div>
        </div>
      </div>
    </ScrollWrapper>
  );
}
