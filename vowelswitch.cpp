#include<iostream>
#include<conio.h>
using namespace std;
int main()
{

 char ch;
 ch = tolower(ch);

 cout<<"Enter the any charecter : ";
 cin>>ch;

 switch (ch)
 {
 case 'a':
 cout<<"Vowel";
    break;

     case 'e':
 cout<<"Vowel";
    break;

     case 'i':
 cout<<"Vowel";
    break;

     case 'o':
 cout<<"Vowel";
    break;

     case 'u':
 cout<<"Vowel";
    break;

 default:
    cout<<"constant ";
 }

 getch();

}