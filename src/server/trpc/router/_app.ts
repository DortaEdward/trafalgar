import { router } from "../trpc";
import { authRouter } from "./auth";
import { cardRouter } from "./card";

export const appRouter = router({
  card: cardRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
