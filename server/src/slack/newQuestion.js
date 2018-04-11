const fetch = require('isomorphic-fetch')

const emojify = text => {
  let emoticons = {
    ':)': ':slightly_smiling_face:',
    ':(': ':slightly_frowning_face:',
    ':/': ':confused:',
    ':p': ':stuck_out_tongue:',
    ':P': ':stuck_out_tongue:',
    ':D': ':smiley:',
    ';)': ':wink:'
  }

  // Ascii emoticons to :emoji:
  return Object.keys(emoticons).reduce((text, emoticon) => {
    return text.split(emoticon + ' ').join(emoticons[emoticon] + ' ')
  }, text)
}

export default async event => {
  const channel_hook = process.env['SLACK_CHANNEL_HOOK']

  if (!channel_hook) {
    console.log('Please provide a valid slack channel hook!')
    return { error: 'Module not configured correctly.' }
  }

  const question = event.data.Question.node

  const url = `https://faq.zenika.com/q/${question.slug}-${question.id}`

  const message = {
    text: `<${url}|${emojify(question.title)}>`
  }

  const response = await fetch(channel_hook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })

  return { data: { response: response.text() } }
}
