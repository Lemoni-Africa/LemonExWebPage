import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent implements OnInit {
  category = [
    {
      id: 1,
      name: "LemonEx Mobile App"
    },
    {
      id: 2,
      name: "Sign up and Login"
    },
    {
      id: 3,
      name: "KYC and account Verification"
    },
    {
      id: 4,
      name: "Wallet Deposits and Withdrawals"
    },
    {
      id: 5,
      name: "Buying and selling Cryptocurrency"
    },
    {
      id: 6,
      name: "Send and receive cryptocurrency"
    },
    {
      id: 7,
      name: "Security"
    },
    {
      id: 8,
      name: "Lost device"
    },
    {
      id: 9,
      name: "2FA authentication"
    },
    {
      id: 10,
      name: "Query"
    },
  ];
  category1header1 = "I can’t sign into my LemonEx account on the Mobile App?"
  category1header2 = "Is the LemonEx app for free?"
  category1header3 = "How do I download the app?"
  category1header4 = "What features does the LemonEx Mobile App have?"
  category1header5 =  "Can I also access my account via the Web login?"
  category1header6 =  " Is my phone supported?"
  category1header7 = "Is the Lemon Ex mobile app secure?"
  category2header1 = " How do I sign up on the app?"
  category2header2 = "I did not get email verification link, what do I do?"
  category2header3 = "Will I be able to continue the app without enabling my 2FA authenticator?"
  category2header4 = "I didn’t get the login verification code via email after enabling the email 2FA option."
  category2header5 = "Google Authenticator Binding Failure?"
  category2header6 = "  I just completed my signup, and I can’t login to the app?"
  category2header7 = " Can I login with my Face ID or fingerprint?	"
  category3header1 = "What are the Account Verification Levels/Tiers?"
  category3header2 = "  Reasons why my KYC can be disapproved?  "
  category3header3 = "What are the steps to verify my identity?"
  category3header4 = "How long does it take verify my KYC documents and information?"
  category3header5 = "How do I set up my profile?"
  category3header6 = "Account Management"
  category3header7 = "What happens or what can I do if my KYC verification is rejected?	"
  category3header8 = " Is there a specification to my picture that should be uploaded for KYC?"
  category4header1 = "How can I make a deposit?	"
  category4header2 = " How can I withdraw from my wallet?"
  category4header3 = " What are my transaction limits?"
  category4header4 = "What is the charge for a withdrawal or deposit?"
  category4header5 =  " Can I deposit in other foreign currency apart from Naira? "
  category5header1 = " How do I buy or sell crypto currency on LemonEx?"
  category5header2 = "Can I buy or sell crypto currency on LemonEx without peer-to-peer trading?"
  category5header3 = " Can I do a peer-to-peer trade on the LemonEx app?	"
  category5header4 = "How are my fees applied when I buy or sell crypto currencies?"
  category6header1 = " How to check my wallet address."
  category6header2 = "How to check my transaction on the block chain."
  category6header3 = "Can my wallet address be changed?"
  category6header4 = "My cryptocurrency deposit is not reflecting on the app.	"
  category6header5 =  " My cryptocurrency withdrawal is not reflecting in my wallet "
  category6header6 =  " I sent my cryptocurrency to the wrong address."
  category6header7 =  " Can I do an internal transfer between LemonEx users."
  category7header1 =  "Security tips"
  category7header2 =  " How to re-enable/unlock your account on LemonEx."
  category7header3 = "How to prevent a Phishing attack.	"
  category7header4 = "How to change your password/Forgot password	"
  category7header5 =" Is LemonEx present on social media?"
  category8header1 =   "What do I do when I lose my device?"
  category8header2 =  " How do I deactivate my 2FA authenticator on a lost device?"
  category9header1 =  " What is 2FA authentication.	"
  category9header2 =  "How to enable my 2FA authenticator?	"
  category9header3 =  "How do I deactivate my 2FA authenticator?"
  category9header4 = " How do I change my 2FA authenticator "
  category9header5 = "Will I be able to access my transactions once I disable the 2FA authenticator?"
  category10header1 = "Contact Support"
  isItOne = false



  Id: any = 1;
  constructor() { }

  ngOnInit(): void {
  }


  getItem(list: any)
  {
    this.Id = list.id
  }
}
