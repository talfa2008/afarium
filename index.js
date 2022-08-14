const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = "t/";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

const embed = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setTitle("Vérification")
    .setDescription("Pour passé la vérification merci de cliqué sur le bouton si dessous.")

    const embed1 = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setTitle("Règlement")
    .setDescription("Pour accepter les règles merci de cliqué sur le bouton si dessous.")    

Client.on("messageCreate", message => {
    if(message.content === prefix + "verif"){
        var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setCustomId("vérification")
                    .setLabel("・vérifié")
                    .setStyle("SUCCESS")
                    .setEmoji("🔐")
                    
                );
                message.channel.send({embeds: [embed], components: [row]});
    }
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "vérification"){
            interaction.reply({content: "Vous avez bien passé la vérification.", ephemeral: true})
            interaction.member.roles.add("1007670955327361024")
            interaction.member.roles.remove("1007671119299477615")
        }
    }
});

Client.on("messageCreate", message => {
    if(message.content === prefix + "regle"){
        var row = new Discord.MessageActionRow()
                .addComponents(new Discord.MessageButton()
                    .setCustomId("règlement")
                    .setLabel("・accepter les règles")
                    .setStyle("SUCCESS")
                    .setEmoji("🌍")
                    
                );
                message.channel.send({embeds: [embed1], components: [row]});
    }
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "règlement"){
            interaction.reply({content: "Vous avez bien accepter les règles.", ephemeral: true})
            interaction.member.roles.add("1007671236534472806")
        }
    }
});

Client.login("MTAwNTg4NDQyNjg4Mzk2NDkyOQ.GNWTkd.idCz2Yqk4EYLF5B_97Sl8i9EnD1VKYUmDc2vkY");