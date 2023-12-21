module.exports = {
name:"anal",
code:`
$color[Random]
$image[
    $jsonRequest[https://nekobot.xyz/api/image?type=anal;message;]
        ]
        $footer[$username kullandı!]
        $reply
        $onlyNsfw[Hata! bu komutu yalnızca **NSFW** kanallarında kullanabilirsin!]
        $addTimesTamp
        `}