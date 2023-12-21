module.exports = {
name:"blowjow",
code:`
$color[Random]
$image[
            $jsonRequest[https://nekobot.xyz/api/image?type=blowjob;message;]
        ]
        $footer[$username kullandı!]
        $reply
        $onlyNsfw[Hata! bu komutu yalnızca **NSFW** kanallarında kullanabilirsin!]
        $addTimesTamp
        `}