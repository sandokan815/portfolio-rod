import { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  isTag?: boolean;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon: Icon, isTag } = props;
  return (
    <>
      {!isTag ? (
        <div className="flex w-max items-center gap-1 overflow-hidden rounded-lg border border-accent/20 bg-white px-3 py-2 text-sm shadow-sm dark:bg-zinc-800 sm:text-base md:px-4 md:py-2 md:text-lg">
          <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
          <span className="font-small">{name}</span>
        </div>
      ) : (
        <div className="flex w-max items-center overflow-hidden rounded-lg border border-accent/20 bg-white shadow-sm dark:bg-zinc-800 sm:text-base md:px-2 md:py-1 md:text-lg">
          <Icon className="mx-1 h-4 w-4 sm:h-8 sm:w-8" />
          <span className="font-small">{name}</span>
        </div>
      )}
    </>
  );
}
