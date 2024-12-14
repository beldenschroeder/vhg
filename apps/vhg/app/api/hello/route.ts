// export async function GET(request: Request) {
//   return new Response('Hello, from API!');
// }

// import prisma from '@vhg/vhg-libs';
import { paintingsRepo } from '@vhg/vhg-libs';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // console.log(prisma);
  // const feed = { 'name': 'test'};

  // TODO: Remove later
  // const feed = await prisma.post.findMany({
  //   where: { published: true },
  //   include: {
  //     author: {
  //       select: { name: true },
  //     },
  //   },
  // });
  const feed = await paintingsRepo.getAll();

  // return {
  //   props: { feed },
  //   revalidate: 10,
  // };
  return NextResponse.json(feed);
}
