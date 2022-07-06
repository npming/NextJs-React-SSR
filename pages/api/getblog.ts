import type { NextApiRequest, NextApiResponse } from 'next'
import { learnTech } from './data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  let item = req.query.author
  let datas = learnTech.filter(blog => blog.author === item)

  if(datas.length) {
    res.status(200).json(datas[0])
  } else {
    res.status(500).send('internal server error')
  }
  
}

