import { createTRPCRouter } from "@src/server/api/trpc";
import { exampleRouter } from "@src/server/api/routers/example";
import { subscriptionRouter } from "@src/server/api/routers/subscription";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  subscription: subscriptionRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
