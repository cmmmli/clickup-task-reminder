import { useRouteError } from "react-router-dom";

type Error = {
  statusText: string;
  message: string;
};

const isError = (val: unknown): val is Error => {
  if (typeof val !== "object" || val === null) {
    return false;
  }

  const error = val as Record<keyof Error, unknown>;
  if (
    typeof error.statusText === "string" &&
    typeof error.message === "string"
  ) {
    return true;
  }

  return false;
};

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {isError(error) ? (
          <i>{error.statusText || error.message}</i>
        ) : (
          <i>Unknown error</i>
        )}
      </p>
    </div>
  );
}
