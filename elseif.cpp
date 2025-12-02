#include<iostream>
#include<conio.h>
using namespace std;
int main()
{
int num;
cout<<"Enter the any of number : ";
cin>>num;

if(num>0)
{
    cout<<"This is biggest number " ;
}
else if(num<0)
{
    cout<<"This is lowest number ";

}

else if(num==0)
{
    cout<<"This is number of Zero ";
}

else{
    cout<<"This number is ivalid";
}



    getch();
}