import { z } from "zod";
import { Attributes, Rarity, CardType, DeckCard, Deck} from '@prisma/client'
import { router, publicProcedure } from "../trpc";
// import cards from '../../../assets/cards.json';

const DeckCardObject = z.object({
  id: z.string(),
  quantity: z.number().min(1).max(4).default(1),
  deckId: z.string(),
  cardId: z.string(),
})

export const cardRouter = router({
  seedCards: publicProcedure
    .mutation(async ({ ctx }) => {
      return {
        message: 'Card Created'
      };
    }),
  getSets: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.sets.findMany();
  }),
  getCards: publicProcedure.query(async ({ ctx, input }) => {
    const cards = await ctx.prisma.card.findMany({
        orderBy: {
            gameId:'desc'
        },
        take: 100})
    return {
      cards,
    }
  }),
  createDeck: publicProcedure.input(z.object({
    cards: z.array(z.object({
      id:z.string()
    })),
  })).mutation(async ({ctx, input}) => {
    return;
  })
});


// getCards: publicProcedure.input(z.object({
//   cursor: z.string().nullish(),
//   limit: z.number().min(1).max(100).default(10),
// })).query(async ({ ctx, input }) => {
//   const { cursor, limit } = input;
//   const cards = await ctx.prisma.card.findMany({ take: limit + 1})
//   let nextCursor: typeof cursor | undefined = undefined;

//   if (cards.length > limit) {
//     const nextItem = cards.pop() as typeof cards[number];
//     nextCursor = nextItem.id.toString();
//   }

//   return {
//     cards,
//     nextCursor
//   }
// }),
