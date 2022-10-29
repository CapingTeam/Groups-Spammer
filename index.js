const discord = require('discord.js-selfbot-v13')
const client = new discord.Client({checkUpdate: false})

const fs = require('fs')
if (!fs.existsSync("./config.js")) fs.writeFileSync("./config.js", 'module.exports = {\n    token: "" // place your token here\n}')

const consolecolor = require('gradient-string')
const { mainModule } = require('process')

const q = require('readline-sync')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


const config = require('./config')
const token = config.token || process.env.token
client.login(token).catch(() => console.log(consolecolor("#ebe834", "#42f581")(`[!] Invalid token ! Change it in the config file.`)))

async function main() {
    console.clear()
    console.log(consolecolor("#ebe834", "#42f581")(`




           ######   ########   #######  ##     ## ########   ######      ######  ########     ###    ##     ## 
          ##    ##  ##     ## ##     ## ##     ## ##     ## ##    ##    ##    ## ##     ##   ## ##   ###   ### 
          ##        ##     ## ##     ## ##     ## ##     ## ##          ##       ##     ##  ##   ##  #### #### 
          ##   #### ########  ##     ## ##     ## ########   ######      ######  ########  ##     ## ## ### ## 
          ##    ##  ##   ##   ##     ## ##     ## ##              ##          ## ##        ######### ##     ## 
          ##    ##  ##    ##  ##     ## ##     ## ##        ##    ##    ##    ## ##        ##     ## ##     ## 
           ######   ##     ##  #######   #######  ##         ######      ######  ##        ##     ## ##     ## `))
           console.log(consolecolor("#ebe834", "#42f581","#ebe834", "#42f581","#ebe834", "#42f581",)("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
           console.log(consolecolor("#ebe834", "#42f581")(`                                                  Connected As ${client.user.username}`))
           console.log(consolecolor("#ebe834", "#42f581","#ebe834", "#42f581","#ebe834", "#42f581",)("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"))
           console.log(consolecolor("#ebe834", "#42f581")(`
                                                [1] Groups Creator (spam)
                                                [2] Groups Leaver
                                                [3] Groups Name Changer
                                                [4] Groups Pfp Changer
                                                [5] All Groups Sender
                                                [6] Add User (All Groups)
                                                [7] Remove User (All Groups)
                                                [8] Add & Remove User (All Groups Spam)
                                                [9] Exit
           `))

           const e = q.question(consolecolor("#ebe834", "#42f581")("[?] : "))

           if (e === "1"){
            const memberid = q.question(consolecolor("#ebe834", "#42f581")("What's the user ID ? : "))
            let user = client.users.cache.get(memberid)
            if (!user){
                console.log(consolecolor("#ebe834", "#42f581")("No member found..."))
                await sleep(2000)
                main()
            }
            const memberid2 = q.question(consolecolor("#ebe834", "#42f581")("What's the second user ID ? : "))
            let user2 = client.users.cache.get(memberid2)
            if (!user2){
                console.log(consolecolor("#ebe834", "#42f581")("No member found..."))
                await sleep(2000)
                main()
            }
            let cccv = [user, user2]
            let number = q.question(consolecolor("#ebe834", "#42f581")("How many groups should I create? : "))
            let namegroupe = q.question(consolecolor("#ebe834", "#42f581")("What will the groups be called? : "))
            let pfp = q.question(consolecolor("#ebe834", "#42f581")("What will be the group pfp? (link) : "))
            if (!number) number = "9"
            if (!namegroupe) namegroupe = "sltcv ?"
            if (!pfp) pfp = "https://i.imgur.com/gst0n16.jpg"
            for (let i = 0; i < number; i++){
                const groupDM = await client.channels.createGroupDM(cccv);
                await groupDM.setName(namegroupe);
                await groupDM.setIcon(pfp);
            }
            
            await sleep(1000)
            main()
           }
           else if (e === "2"){
            client.channels.cache.forEach((channel) => {
                if (channel.type === "DM" || channel.guild) return;
                channel.delete().then(() => console.log(consolecolor("#ebe834", "#42f581")(`[+] Group leaved: ${channel.name}`)))
                .catch(() => console.log(consolecolor("#42f581", "#ebe834")(`[-] Group not leaved: ${channel.name}`)))
            })
            await sleep(5000)
            main()
           }
           else if (e === "3"){
            let namee = q.question(consolecolor("#ebe834", "#42f581")("What will be the name of groups? : "))
            if (!namee) namee = "github.com/002-sans"
            client.channels.cache.forEach((channel) => {
                if (channel.type === "DM" || channel.guild) return;
                channel.setName(namee).catch(() => false)
            })
            await sleep(3000)
            main()
           }
           else if (e === "4"){
            let namee = q.question(consolecolor("#ebe834", "#42f581")("What will be the pfp of groups? : "))
            if (!namee) namee = "https://i.imgur.com/gst0n16.jpg"
            client.channels.cache.forEach((channel) => {
                if (channel.type === "DM" || channel.guild) return;
                channel.setIcon(namee).then(() => console.log(consolecolor("#ebe834", "#42f581")(`[+] pfp changed on: ${channel.name}`)))
                .catch(() => console.log(consolecolor("#42f581", "#ebe834")(`[-] pfp not changed on: ${channel.name}`)))
            })
            await sleep(5000)
            main()           }
           else if (e === "5"){
            let namee = q.question(consolecolor("#ebe834", "#42f581")("What did I send on all groups? : "))
            if (!namee) namee = "https://github.com/002-sans/Nuker"
            client.channels.cache.forEach((channel) => {
                if (channel.type === "DM" || channel.guild) return;
                channel.send(namee)
                .then(() => console.log(consolecolor("#ebe834", "#42f581")(`[+] Message sent on: ${channel.name}`)))
                .catch(() => console.log(consolecolor("#42f581", "#ebe834")(`[-]Message not sent on: ${channel.name}`)))
            })
            await sleep(5000)
            main()           }
           else if (e === "6"){
            const memberid = q.question(consolecolor("#ebe834", "#42f581")("What's the user ID ? : "))
            let user = client.users.cache.get(memberid)
            if (!user){
                console.log(consolecolor("#ebe834", "#42f581")("No member found..."))
                await sleep(2000)
                main()
            }
            client.channels.cache.forEach((channel) => {
                if (channel.type === "DM" || channel.guild) return;
                channel.addMember(user)
                .then(() => console.log(consolecolor("#ebe834", "#42f581")(`[+] ${user.username} has been add on ${channel.name}`)))
                .catch(() => console.log(consolecolor("#42f581", "#ebe834")(`[-] ${user.username} didn't has been add on ${channel.name}`)))
            })
            await sleep(5000)
            main()           }
           else if (e === "7"){
            const memberid = q.question(consolecolor("#ebe834", "#42f581")("What's the user ID ? : "))
            let user = client.users.cache.get(memberid)
            if (!user){
                console.log(consolecolor("#ebe834", "#42f581")("No member found..."))
                main()
            }
            client.channels.cache.forEach((channel) => {
                if (channel.type === "DM" || channel.guild) return;
                channel.removeMember(user)
                .then(() => console.log(consolecolor("#ebe834", "#42f581")(`[+] ${user.username} has been removed from ${channel.name}`)))
                .catch(() => console.log(consolecolor("#42f581", "#ebe834")(`[-] ${user.username} didn't has removed from ${channel.name}`)))
            })
            await sleep(3000)
            main()           }

            else if (e === "8"){
                process.exit(1)
            }
            else{
                console.log(consolecolor("#42f581", "#ebe834")(`[?] Missclick ??`))
                await sleep(1000)
                main()

            }
}

client.on('ready', () => main())