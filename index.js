
const readXlsxFile = require('read-excel-file/node');
process.setMaxListeners(15);
var i = 0 ;
var arrayLink ;
// đường dẫn tới file excel
readXlsxFile('E:/1111.xlsx').then((rows) => {
rows.forEach(row => {
   
    const Scraper = require("@jonstuebe/scraper");

    // run inside of an async function
    (async () => {
      const data = await Scraper.scrapeAndDetect(row[1]
      );
    
      
      const download = require('image-downloader')
     
      // lọc bỏ các kí tự đặc biệt 
      var res = data[itemprop="title"].replace(/(\|)|(\')/i, " ");
      const options = {
        url: data[itemprop="image"],
        //đường dẫn đến vị trí lưu file                     //tên file//đuôi file
        dest: 'C:/Users/Thanh Tai/Desktop/webPublic/Get-Amazon-Image-From-Excel-url/'+res+".jpg"                
      }
       
      download.image(options)
        .then(({ filename , name = data[itemprop="title"] }) => {
          console.log('Saved to', filename)  
        })
        .catch((err) => console.error(err))
     
    })();
});
})
