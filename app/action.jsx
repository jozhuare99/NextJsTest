'use server';

import {cookies} from 'next/headers';

export async function create() {
  
  cookies().set('cartId', '8')
}