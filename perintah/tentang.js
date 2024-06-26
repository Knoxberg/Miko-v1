const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'tentang',
	aliases: ['info', 'botinfo'],
    description: 'Perintah untuk menampilkan (about page)',

    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFC0CB')
	    .setTitle('Tentang Mikoo :fox:')
	    .setDescription('Miko adalah bot discord yang dikembangkan secara pribadi untuk penggunaan non-komersial.')
	    .addFields(
			{ name: 'Dibuat dengan  :heart_decoration:', value: '\u200B' },
			{ name: 'Tim Development', value: 'Knoxbergs \n Zqixz', inline: true },
			{ name: 'Instagram', value: '[@ihsann_nxt](https://instagram.com/ihsann_nxt?utm_medium=copy_link) \n [@zqixz](https://instagram.com/zqixz?utm_medium=copy_link) ', inline: true },
		
		)
		.addFields(
			{name: 'Versi Bot:', value: '1.0.0'},
			{name: 'Build:', value: 'beta', inline: true},
			{name: 'Status Release:', value: 'Open Beta Testing', inline: true},
		)
	    .addField('All Hail to Yae Miko!', 'All Hail to Lady Yae.')

        message.channel.send(newEmbed);
    }

}