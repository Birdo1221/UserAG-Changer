***Start of Development was on 17/7/2024 at 7:57PM 🕗***

***End of Development was on 18/7/2024 at 1:16AM 🕜***

**Depreciated**

After only 1 day in development, it's already apparent that this project is heading towards deprecation.
Changing navigator.userAgent within a browser extension is no longer feasible due to recent browser updates and security enhancements.
These updates prioritize user privacy and browser integrity by restricting extensions from modifying critical properties like userAgent.
While this limitation seems overly restrictive, alternative methods and best practices can still achieve similar testing or customization goals.

But this comes at a cost.

Network conditions, while effective for simulating different environments in Chrome DevTools, cannot be programmatically controlled by extensions.
This means that automating the process of changing user agents using network conditions within an extension is not possible.
Additionally, older methods that once allowed manipulation of navigator.userAgent have been deprecated or blocked due to security vulnerabilities and privacy concerns.

 These methods included injecting scripts or modifying browser settings, which could potentially expose users to tracking or security risks, navigating these limitations 
 requires adapting to new methods and exploring alternative strategies that respect browser policies and safe of the user / system environment while still meeting   
 development needs.

In summary, this project is now obsolete and operates solely with outdated, less secure browsers. Even with these browsers, there are risks of exposing your user agent through network logs or current requests, as well as through JavaScript that could potentially grab it.

Using outdated browsers can also leave you susceptible to vulnerabilities and security exploits.
For instance, three examples of critical exploits on old browers :

CVE-2021-30563 (Google Chrome): A vulnerability in Google Chrome's V8 JavaScript engine that could allow remote code execution via a specially crafted webpage.

CVE-2021-33742 (Microsoft Edge): A memory corruption vulnerability in Microsoft Edge that could be exploited to execute arbitrary code.

CVE-2021-30551 (Brave Browser): A vulnerability in the Brave Browser's URL handling that could allow for address bar spoofing, potentially leading to phishing attacks.
