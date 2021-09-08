var a=8;
var i=0;
var flag=0;

for( i=1; i<=a; i++)
{
    if(a%i==0)
    {
        flag= flag+1;
    }
}
if (flag==2)
{
    console.log('True');
}
else
    console.log('False');
