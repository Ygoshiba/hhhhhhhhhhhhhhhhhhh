module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "✨..✨",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Tiện ích",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://imgur.com/gallery/BKsGPGJ", 
];
  var callback = () => api.sendMessage({body:`\n🧧Thông Tin Admin🧧\n😍ADMIN NAME😍:𝑵𝒈𝒖𝒚𝒆𝒏 𝑽𝒊𝒆𝒕 𝑪𝒖𝒐𝒏𝒈\n🥺Biệt Danh🥺:tao rất đẹp trai🎊:2k?\n🔯Cung Hoàng Đạo🔯:chịu\n🤷Tính Cách🤷:toxic vcd...\n🤗Chiều cao🤗:1m7\n🔰Cân Nặng🔰:57kg\n🧐Sinh ngày🧐:25/12/200?\nꕥInstagram ꕥ:....\n♆TikTok♆: ....\n🍀LINK FACEBOOK🍀:https://www.facebook.com/dead.cellss\n🍃ID FACE🍃:...\nChào đây là bot của tao có một số lưu ý sau\n🎉Sử dụng bot không chửi bot vì nó cute lắm nhá\n🎉Ngựa ngựa bớt spam nha hư bot đấy\n🎉Không report bot nha mụi ngừi\n▬▬ι═══════ﺤ Cảm ơn bạn đã sử dụng dịch vụ bot của mình mong hay làm đúng với lưu ý nhá <3 chúc bạn năm mới vui vẻ nha 🧨🧨🧨🧨🧨🧨🧨🧨\n🌸tao🌸`,attachment: fs.createReadStream(__dirname + "/cache/ad.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ad.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ad.mp4")).on("close",() => callback());
   };
   //tự edit body nhá ...=thay thông tin 
   //Sen code lại th nên bớt soi 
   //cách lấy ảnh gắn ở trên 
   //B1 Truy cập https://imgur.com chọn newpost
   //B2 Gắn ảnh từ máy tính lên đó hay điện thoại cx đc tùyq   //B3 Copy link như trên rồi thêm .jpg vào là done 
   //Chúc thành công
