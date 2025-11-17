#What are some differences between interfaces and types in TypeScript?
=> interface এবং type এর কাজ খুবই কাছাকাছি তবে কিছু হালকা পার্থক্যও রয়েছে। যেমন, 

১। interface প্রিমিটিভ, ইউনিয়ন, টুপল ইত্যাদির ক্ষেত্রে ব্যবহার করা যায় না। 

interface name = string; 
interface age = string | number; 
interface fullName = [string, string];

এভাবে লেখলে ভুল হবে। কারণ interface মূলত অব্জেক্ট শেপ ডিফাইন করার জন্য তৈরি। 
অপরদিকে type ব্যবহার করে প্রিমিটিভ, ইউনিয়ন, টুপল ইত্যাদি ডিক্লেয়ার করা যায়। যেমন,
type name = string; 
type age = string | number; 
type fullName = [string, string];

২। আবার interface কে static blueprint বিবেচনা করা হয়, যে কারণে interface কোনো ইউনিয়ন type কে এক্সটেন্ড বা ইমপ্লিমেন্ট করতে পারে না। 


৩। interface এবং type এর আরেকটা পার্থক্য হলো Declaration merging.
একই interface-কে ইচ্ছা করলে একাধিকবার ডিফাইন করা যায়। যেমন,  

interface fullName {
    firstName: string;
}

interface fullName {
    lastName: string;
}
এবং প্রত্যেক ডিক্লারেশনের মেম্বার মার্জ হয়ে একটা ডিক্লারেশন (interface fullName {
    firstName: string;
    lastName: string;
}) বিবেচিত হয়। 

কিন্তু একই ভাবে একটা type কে ডিফাইন করতে গেলে Duplicate identifier এরর দেখাবে।


#Explain the difference between any, unknown, and never types in TypeScript.
=> any. কোনো ভেরিয়েবলকে any টাইপ দিয়ে ডিক্লার করা মানে এক কথায় টাইপ স্ক্রিপ্টের টাইপ চেকিং থেকে বেরিয়ে আসা। তখন একই ভেরিয়েবলে এক এক সময় নাম্বার, স্ট্রিং বা যে ধরনের ডাটা রাখতে চাইলে রাখা যাবে। টাইপ ডেফিনিশন নেই  এমন এক্সটার্নাল লাইব্রেরি নিয়ে কাজ করার ক্ষেত্রে any ব্যবহার করা লাগতে পারে। 

unknown. কোনো ডাটা ঠিক কোন টাইপের হবে তা আগে থেকে জানা না থাকলে (যেমন, ইউজার ইনপুট) এমন ক্ষেত্রে unknown টাইপ ব্যবহার করা হয়। unknown টাইপের উপর অপারেশন করতে গেলে বা কোনো প্রোপার্টি এক্সেস করতে গেলে আগে typeof বা instanceof টাইপ গার্ড ব্যবহার করে সঠিক টাইপটা জেনে তার পর করতে হয়। 

never. যে ফাংশন কোনো value রিটার্ন করবে না এমন ক্ষেত্রে রিটার্ন টাইপ হিসেবে never ব্যবহার করা হয়। যেমন throwError নামের একটা ফাংশনের কথা ধরা যাক যেটা এরর মেসেজ শো করবে, এ ক্ষেত্রে এই ফাংশনের রিটার্ন টাইপ হবে never.
