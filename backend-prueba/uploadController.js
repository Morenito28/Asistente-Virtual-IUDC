const axios = require('axios');

async function solveEquation(equation) {
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: `Solve the equation: ${equation}`,
      max_tokens: 100,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    throw new Error('Error solving equation');
  }
}

module.exports = { solveEquation };
