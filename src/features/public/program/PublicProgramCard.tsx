import { ArrowRight, BookOpenCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ActionLink } from "../../../components";
import type { PublicProgram } from "../catalog";

import "./PublicProgramCard.css";

interface PublicProgramCardProps {
  program: PublicProgram;
}

export function PublicProgramCard({
  program,
}: PublicProgramCardProps) {
  const navigate = useNavigate();

  return (
    <article className="public-catalog-program-card">
      <span
        className="public-catalog-program-card__icon"
        aria-hidden="true"
      >
        <BookOpenCheck />
      </span>

      <div className="public-catalog-program-card__content">
        <p>{program.shortName}</p>
        <h2>{program.name}</h2>
        <span>{program.summary}</span>
      </div>

      <ActionLink
        href={`/program/${program.slug}`}
        variant="standalone"
        trailingIcon={<ArrowRight />}
        onClick={(event) => {
          event.preventDefault();
          navigate(`/program/${program.slug}`);
        }}
      >
        Pelajari program
      </ActionLink>
    </article>
  );
}