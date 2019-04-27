<?php
/* 
------------------
Language: English
------------------
*/

$lang = array();


$lang['LANG'] = 'EN';


// ------------------------
// Header 'Man with finger'
// ------------------------

$lang['See_More_Products'] = 'See More Products';
$lang['Member_Area'] = 'Member Area';
$lang['Change_Language'] = 'Change Language';



// ------------------------
// use-pc
// ------------------------

$lang['title_section_am'] = 'Gridinsoft <br><span>Anti-Malware</span>';
$lang['section_1_p'] = 'Is a type of PC cleaner. <br>
							But better, as it is a type of virus removal tool too. Is a type of rootkit destroyer, includes registry cleaner
							functionality. Able to free your browser from hijack and turn it back to the newborn state. Something you have
							looking for a long time to make your PC work faster. <br>
							Here, in Gridinsoft, we are all PC users too. <br>
							And third-party invasion also makes us angry. We found a way to disable it. And we are happy to share this way
							with our users, taking the cure your PC and Threat List update jobs on our shoulders.';
$lang['use_way'] = 'Use your PC in a proper way';
$lang['get_started'] = 'Get started now';
$lang['button_01'] = 'Download FREE Trial';
$lang['demo_version'] = 'full 6 days trial';
$lang['OR'] = 'OR';
$lang['full_version_link'] = 'Get Full Version';
$lang['gift'] = 'Gift';
$lang['btn_text_down'] = 'Choose a plan you need starting from $3.35/month';




// ------------------------
// s-offers-sol
// ------------------------

$lang['watch_videos'] = 'Watch \'How TO\' Videos';
$lang['offers_title'] = 'Offers superb antimalware solution';
$lang['get_license'] = 'Get License';


// item 1
$lang['offers_items_1_title'] = 'Useful, as our customers say';
$lang['customers_rate_block_1'] = 'Our Facebook Page Rank';
$lang['customers_rate'] = '4.7 out of 5';

$lang['slider_customer_1'] = 'I highly recommend GridinSoft Anti-Malware to anyone suffering from 21st Century non-detectable malware by well-known brands!';
$lang['slider_customer_2'] = 'This is really good software, I rely on the Grindinsoft Team to keep my laptop running smooth.';
$lang['slider_customer_3'] = 'Thank you for your efforts, the world because you are getting better.';
$lang['slider_customer_4'] = 'Yet again a program that does what it\'s suppose to do. It Gets rid of all the bad stuff. And the support is always helpfull...';
$lang['slider_customer_5'] = 'This software helped me a lot. Amazon Aa.hta virus has been successfully removed from my daughter\'s computer.';
$lang['slider_customer_6'] = 'Working according to the instructions of the support team, I could delete malware. Gridsoft support Team is really special.';

// item 2
$lang['offers_items_2_title'] = 'Effective, as we produce it with this aim';
$lang['customers_rate_block_2'] = 'OPSWAT Silver Certificate';
$lang['offers_items_2_text'] = 'OPSWAT is a protecting from content and device based threats organization. It certifies endpoint security applications for compatibility, false positives, and quality.';






// ------------------------
// s-screen
// ------------------------

$lang['understandable'] = 'Understandable';
$lang['USER_FRIENDLY'] = 'USER FRIENDLY';
$lang['handle_cozy'] = 'Handle&Cozy';


// ------------------------
// s-start 
// ------------------------

$lang['start_title_1'] = 'How to start with Gridinsoft Anti-Malware?';
$lang['s_title_1'] = 'Download</a> Gridinsoft Anti-Malware';
$lang['start_text_item_1'] = 'We give you 6 days to try it on your PC and to see if it is really what you are looking for.';  
$lang['s_title_2'] = '<span>Start your first scan</span> to see if there is something wrong or abnormal on your PC';
$lang['start_text_item_2'] = 'It can take time to scan your PC, depending on the type of launched scan. Quick scan will be started by default. Standard scan is recommended, but takes a longer time.';
$lang['s_title_3'] = '<span>Get the result.</span> It is time to see what concrete threats were detected.';
$lang['start_text_item_3'] = 'It is necessary to pay attention to a type of threats. Potentially Unwanted Programs (so-called PUPs) are
									often appear in the result report. They could be well-known tools in some cases, but deliver an advertisement
									on your PC, we have to notify you if so. <br>
									There could be junk files in many cases. Gridinsoft Anti-Malware could remove them too, these files are not
									threats by themselves, but could be a part of it.';
$lang['s_title_4'] = '<span>Analyze.</span> Detected threats have different types of harmfulness. ';
$lang['start_text_item_4'] = 'We mark them with Threat Level to help you understand which threats are more or less impact your PC.';
$lang['s_title_5'] = '<span>Remove threats.</span> Normally, it takes a few seconds.';
$lang['start_text_item_5'] = 'Actually, files will be quarantined, with the exception of the files which are extremely dangerous, they
									haven\'t stay in your PC as able to replicate.';
$lang['s_title_6'] = '<span>Use a built-in tool</span> to reset browser setting.';
$lang['start_text_item_6'] = 'Hijack is a common system failure, the straight way to numerous malicious invasions. Resetting browser
									settings is a good idea to get rid of any hijack.';

$lang['carousel_start_text_1'] = 'Switch ON the Protection. Combine three types of it to get a result you like.';
$lang['carousel_start_text_2'] = 'Include or exclude detection of Potentially Unwanted Programs (PUPs) by checking this option. ';
$lang['carousel_start_text_3'] = 'Switch ON Camera Protection option to disable access to it for unknown programs.';
$lang['carousel_start_text_4'] = 'Adjust Scheduled Scan to clean your PC regularly: daily, weekly or even twice a week. ';
$lang['carousel_start_text_5'] = 'You can apply different actions to the detected items before the removal process - just switch Removal Process to the Advanced Mode';
$lang['carousel_start_text_6'] = 'Choose the language you prefer to make Gridinsoft Anti-Malware more comfortable. There is a choice of 27 languages in it.';


// ------------------------
// Price
// ------------------------
$prices1 = file('https://anti-malware.gridinsoft.com/prices1.txt');
$prices3 = file('https://anti-malware.gridinsoft.com/prices3.txt');
$prices5 = file('https://anti-malware.gridinsoft.com/prices5.txt');
// US,36,29.95,39.95,89.95
// str to array
$pr_1 = explode(",", $prices1[0]);
$pr_2 = explode(",", $prices3[0]);
$pr_3 = explode(",", $prices5[0]);

$lang['s_price_title'] = 'Receive License to keep your Threat List updated';

// item Standard
$lang['Standard'] = 'Standard';
$lang['6_Monts'] = '6 Months';
$lang['1_Year'] = '1 Year';
$lang['Lifetime'] = 'Lifetime';
$lang['AM_6_MONTS_Standard'] = "$ <span>". $pr_1[2] ."</span>";
$lang['AM_12_MONTS_Standard'] = "$ <span>". $pr_1[3] ."</span>";
$lang['AM_LIFETIME_Standard'] = "$ <span>". $pr_1[4] ."</span>";
$lang['AFFORDABLE_price'] = 'AFFORDABLE price';
$lang['SAVE_year_st'] = 'SAVE $19.95/year';
$lang['endless_benefits'] = 'Endless benefits';

$lang['line_text_Standard'] = 'one Gridinsoft Anti-Malware license can be used for <strong>one corporate</strong> or <strong>two home</strong> computers.';
$lang['subscribe_standard'] = 'Subscribe Standard*';

// item Family
$lang['Family'] = 'Family';
$lang['AM_6_MONTS_Family'] = "$ <span>". $pr_2[2] ."</span>";
$lang['AM_12_MONTS_Family'] = "$ <span>". $pr_2[3] ."</span>";
$lang['AM_LIFETIME_Family'] = "$ <span>". $pr_2[4] ."</span>";

$lang['SAVE_year_f'] = 'SAVE $25.05/year';
$lang['line_text_Family'] = 'one Gridinsoft Anti-Malware license can be used for <strong>3 home computers.</strong>';
$lang['subscribe_family'] = 'Subscribe Family*';

// item Extended Family
$lang['Extended'] = 'Extended <br>Family';
$lang['AM_6_MONTS_Extended'] = "$ <span>". $pr_3[2] ."</span>";
$lang['AM_12_MONTS_Extended'] = "$ <span>". $pr_3[3] ."</span>";
$lang['AM_LIFETIME_Extended'] = "$ <span>". $pr_3[4] ."</span>";

$lang['SAVE_year_ef'] = 'SAVE $31.95/year';
$lang['line_text_Extended'] = 'one Gridinsoft Anti-Malware license can be used for <strong>5 home computers.</strong>';
$lang['subscribe_Extended'] = 'Subscribe Extended*';


$lang['secure_text'] = '*Proceed to the secure link by pressing this button where you will be instructed to enter all required information. If you have a PROMO code, you’ll be able to enter it on the next step too.';

// trial
$lang['trial_title'] ='FREE/TRIAL';
$lang['trial_time'] ='6 days';
$lang['trial_free'] ='free';
$lang['trial_get'] ='Get it NOW!';
$lang['trial_desciption'] ='Absolutely FREE full-functional version. Allow to complete scan and cure your PC during the TRIAL period';


// ------------------------
// renew
// ------------------------
$lang['renew_p'] = 'Already our client?';
$lang['renew_title'] = 'Renew your GridinSoft Anti-Malware license with the 15% off discount';
$lang['renew_form_text'] = 'Enter your current/previous Anti-Malware activation code:';
$lang['renew_submit'] = 'Submit';
$lang['field_empty'] = 'Activation code field can\'t be empty';
$lang['errors_form'] = 'Activation code field must be of valid format';
$lang['callback_form'] = 'Thanks! Your personal link for renewal at discounted price will be sent to the email related to your order';
$lang['undefined_error'] = 'Undefined Error! Please try again or contact technical support!';




// ------------------------
// s-articles
// ------------------------

$lang['recommended_articles'] = 'Recommended Articles';
$lang['articles_link_1'] = 'How To Start Your First Scan?';
$lang['articles_link_2'] = 'How To Restore Quarantined Files?';
$lang['articles_link_3'] = 'How To Interpret The Result?';
$lang['articles_link_4'] = 'How To Reset Browser Settings?';
$lang['articles_link_5'] = 'How To Send Information For Analysis?';
$lang['articles_link_6'] = 'How To Report A False Detection?';



// ------------------------
// Fotter
// ------------------------

$lang['footer_item_1'] = 'Let\'s be friends';
$lang['footer_item_2'] = 'Easy how to...';
$lang['footer_item_3'] = 'Need help?';

$lang['footer_item_text_1'] = 'Gridinsoft Anti-Malware is on all your favorite social networks. Come say hello!';
$lang['footer_item_text_2'] = 'We have a set of simple lessons to help you to start with easy';
$lang['footer_item_text_3'] = 'We\'re here to answer any questions you have about Gridinsoft Anti-Malware or our products';

$lang['visit_youtube'] = 'Visit youtube channel';
$lang['visit_support'] = 'Visit support center';

$lang['f-nav-1'] = 'Browse products';
$lang['f-nav-2'] = 'Member Area';
$lang['f-nav-3'] = 'Coupons&Gifts';
$lang['f-nav-4'] = 'Help Center';
$lang['f-nav-5'] = 'Contact Us';
$lang['f-nav-6'] = 'Privacy';
$lang['f-nav-7'] = 'Terms';
$lang['f-nav-8'] = 'Sitemap';

?>