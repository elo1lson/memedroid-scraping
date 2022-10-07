import cheerio, { load } from 'cheerio';
import axios from 'axios';
import pettry from 'pretty'
let url = 'https://pt.memedroid.com/memes/tag/brasil'

let a = axios.get(url).then(({ data }) => {
  let html = { data }
  let $ = load(html)
  console.log(pettry(data));
  let picture = $('.galery-item')
 // console.log(picture.length);
})
