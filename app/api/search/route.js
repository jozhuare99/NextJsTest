export function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  console.log('somwont')
  // query is "hello" for /api/search?query=hello
  return NextResponse.json({
    message: query
  }) 
}