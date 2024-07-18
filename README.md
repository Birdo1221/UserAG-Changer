***Start of Development was on 17/7/2024 at 7:57PM 🕗***

***End of Development was on 18/7/2024 at 1:16AM 🕜***

**Depreciated**

After just one day of development, it's clear that this project is already on the path to obsolescence.
Recent updates and security enhancements in modern browsers have rendered the ability to change navigator.userAgent within a browser extension unfeasible. 
These updates are designed to prioritize user privacy and maintain browser integrity by strictly limiting extensions from altering critical properties like userAgent. While this restriction may seem overly strict, alternative methods and best practices still exist to achieve similar testing or customization goals.

However, these alternatives do come with their own set of challenges. For example, network conditions in tools like Chrome DevTools, while effective for simulating different environments, cannot be programmatically controlled by extensions.
This means automating the process of changing user agents using network conditions within an extension is not possible. Moreover, older methods that previously allowed manipulation of navigator.userAgent have been deprecated or blocked due to inherent security vulnerabilities and privacy concerns. 
These methods typically involved injecting scripts or modifying browser settings, which could potentially expose users to tracking or security risks.

Navigating these limitations requires adapting to new methods and exploring alternative strategies that respect browser policies and prioritize the safety of user environments.

In summary, this project only operates exclusively with outdated, less secure browsers. Even with these browsers, there remains a risk of exposing your user agent through network logs, current requests, or JavaScript-based techniques that can retrieve it.

Using outdated browsers also increases susceptibility to vulnerabilities and security exploits. For instance, here are three examples of critical exploits found in older browser versions:

CVE-2021-30563 (Google Chrome): A vulnerability in Google Chrome's V8 JavaScript engine that allows remote code execution via a specially crafted webpage.

CVE-2021-33742 (Microsoft Edge): A memory corruption vulnerability in Microsoft Edge that could be exploited to execute arbitrary code.

CVE-2021-30551 (Brave Browser): A vulnerability in the Brave Browser's URL handling that could enable address bar spoofing, potentially leading to phishing attacks.


It just a warning to look out at what your doing and the versions of software that you are running.
