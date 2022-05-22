function thai(tall, weight)
{
    this.tall = tall,
    this.weight = weight,
    this.ham = function()
    {
        console.log(tall + ' ' + 'toi ten la thai');
    }
}
var em = new thai(180, 60)
var anh = new thai(181, 61)
em.ham();
anh.ham();
