import { paintingsRepo } from '@vhg/vhg-libs';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const feed = await paintingsRepo.getAll();

  return NextResponse.json(feed);
}
