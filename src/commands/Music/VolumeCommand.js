exports.run = async (client, message, args) => {

    const player = message.client.manager.players.get(message.guild.id);

    const { channel } = message.member.voice

    if(!player) return message.quote(`<:hm_error:812689130043211787>  ›  Não estou tocando nada nesse servidor, mas posso tocar se você quiser, basta digitar \`h!play <link | nome da música>\``)

    if(channel.id !== player.voiceChannel) return message.quote(`<:hm_error:812689130043211787>  ›  Você precisa estar no mesmo canal de voz para executar esse comando`)

    const volume = Number(args[0]);
    if (!volume || volume < 1 || volume > 100) return message.reply(`<:hm_error:812689130043211787>  ›  O Volume inserido é invalido, tente novamente com um número entre \`1\` e \`100\``);
    player.setVolume(volume);
    return message.quote(`🔊  ›  Volume alterado para \`${player.volume}%\``);
}
exports.help = {
    name: "volume",
    aliases: ["vol"],
    category: "music"
}