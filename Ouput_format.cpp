#include <iostream>
using namespace std;
#include<iomanip>
int main()
{
  
    float num1, num2;
    cout<<setw(40)<<"Enter the number ";
    cin>>num1;
    cin>>num2;

    cout<<showpoint;
    cout<<fixed;
    cout<<setprecision(25);

    float sum = num1 + num2;
    cout<<setw(40)<<"Sum of this number "<<sum;
    cout<<endl;
    //cout<<noshowpoint;


    float mul = num1 * num2;
    cout<<setw(40)<<"Multiplication of this number "<<mul;
    cout<<endl;

cout<<showpoint;
    float div = num1 / num2;
    cout<<setw(40)<<"Division of this number "<<div;
    cout<<endl;

    cout<<endl;

    //int rem = num1 / num2;
    //cout<<"Remainder of this number "<<rem;
    //cout<<endl;

    cout<<endl;

    
return 0;



}