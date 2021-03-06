const moment = require("moment");
const canvas = require("canvas");
const os = require("os");

module.exports = {
    name: 'info',
    description: 'отображает информацию о боте',
    aliases: ['stats', 'about', 'i'],
    async execute(client, message, args, prefix) {
        const dev = client.users.get(process.env.dev)
        const devTag = `${dev.username}#${dev.discriminator}`
        const invite = `https://discord.com/oauth2/authorize?client_id=702412548347134022&scope=bot&permissions=8`;
        const GitHub = `https://github.com/MitenkovIvan/Heikin`;
        const embed = {
            author: {
                name: client.user.username
            },
            color: 9502975,
            fields: [
                {
                    name: `Разработчик:`,
                    value: `${devTag}`,
                    inline: true
                },
                {
                    name: `Версия:`,
                    value: `${client.version}`,
                    inline: true
                },
                {
                    name: `Время работы:`,
                    value: `${moment(client.uptime).format('LTS')}`,
                    inline: true
                },
                {
                    name: `Операционная система:`,
                    value: `${os.type()} ${os.release()} (${os.arch()})`
                },
                {
                    name: `Дата создания:`,
                    value: `${moment(client.user.createdAt).format('ll')}, ${moment(client.user.createdAt).format('LTS')}`
                },
                {
                    name: `Серверов:`,
                    value: client.guilds.size,
                    inline: true
                },
                {
                    name: `Пользователей:`,
                    value: client.users.size,
                    inline: true
                },
                {
                    name: `Используемые пакеты:`,
                    value: `Node.js ${process.version}\nEris ${require("eris").VERSION}\nMoment ${moment.version}\nCanvas ${canvas.version}`
                },
                {
                    name: `Ссылки:`,
                    value: `[Добавить бота](${invite})\n[Репозиторий в GitHub](${GitHub})`
                }
            ],
            footer: {
                text: `© 2020-${client.currentYear} m1t3nk0v`
            },
            thumbnail: {
                url: client.user.avatarURL
            }
        }
        await message.channel.createMessage({embed});
    }
}