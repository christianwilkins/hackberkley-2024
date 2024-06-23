import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const youApiKey = '90a7919a-440a-4c2a-bdeb-ca967c50dd23<__>1PTsFeETU8N2v5f4qmtDZVGS';

  if (!youApiKey) {
    return NextResponse.json({ error: 'YOU_API_KEY is not set' }, { status: 500 });
  }

  try {
    const { query } = await request.json();

    const response = await fetch(`https://chat-api.you.com/smart`, {
      method: 'POST',
      headers: {
        'X-API-Key': youApiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Process the response here if needed
    const formattedResponse = processResponse(data);

    return NextResponse.json({ formattedResponse });
  } catch (error) {
    console.error('Error calling You.com API:', error);
    return NextResponse.json({ error: 'Failed to fetch data from You.com API' }, { status: 500 });
  }
}


function processResponse(data: any) {
  // Process the response from You.com API here
  // This is where you'd implement the formatting logic we discussed earlier
  // For now, just returning the raw response
  return JSON.stringify(data);
}