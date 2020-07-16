# Generate PDF Buton 
This action button generates PDF file of work item with Engineering Optimization Publishing template in Engineering Workflow Management/Rational Team Concert.

![Overview](https://github.com/tadhara/ewm_generate_pdf/blob/master/doc/image/ButtonImage.png)

In restricted software development process like automotive industory,  a phase exit criteria and review meeting for it are needed to follow their development process.
In some customers, a phase exit criteria and review meeting are stored as a work item and these are also needed to be stored as a paper.

This plugin provides a button that a user can generate PDF easly from work item with (Engineering Lifecycle Optimization Publishing/Rational Publishing Engine) template so that the user can print PDF and store it to follow the process.

## Usage
1. Show a work item
2. Click Generate PDF button
3. PDF file is downloaded
4. Open PDF file

Screen shot of step 3.

![Download PDF](https://github.com/tadhara/ewm_generate_pdf/blob/master/doc/image/download.png)

Screen shot of step 4.

![Downloaded PDF](https://github.com/tadhara/ewm_generate_pdf/blob/master/doc/image/PDF_small.png)

## Setup

### Download
You can find the latest release on the [releases page of this repository](https://github.com/tadhara/ewm_generate_pdf/releases).

### Installation
Deploy just like any other update site:

1. Extract the `net.tadhara.rtc.workitemEditor.GenerateRPEAction.updatesite.ini` **file** from the zip file to the `server/conf/ccm/provision_profiles` directory
2. Extract the `net.tadhara.rtc.workitemEditor.GenerateRPEAction.updatesite` **folder** to the `server/conf/ccm/sites` directory
3. Restart the server
4. Create a new Report Resource as **GenerateRPE** and add `GenerateRPE.dta` file

![ReportResource](https://github.com/tadhara/ewm_generate_pdf/blob/master/doc/image/ReportResource4.png)


### Updating an existing installation
1. Request a server reset in **one** of the following ways:
    * If the server is currently running, call `https://server-address/ccm/admin/cmd/requestReset`
    * Navigate to `https://server-address/ccm/admin?internaltools=true` so you can see the internal tools (on the left in the side-pane). Click on `Server Reset` and press the `Request Server Reset` button
    * If your server is down, you can delete the ccm `built-on.txt` file. Liberty packed with 6.0.3 puts this file in a subfolder of `server/liberty/servers/clm/workarea/org.eclipse.osgi/**/ccm`. The easiest way to locate the file is by using your operating system's search capabilities.
2. Delete previously deployed updatesite folder
3. Follow the file extraction steps from the section above
4. Restart the server


## Cusomization
You can re-design `GenerateRPE.dta` file by using Engineering Optimization Publishing Document Studio

## Contributing
Please use the [Issue Tracker](https://github.com/tadhara/ewm_generate_pdf/issues) of this repository to report issues or suggest enhancements.

## Licensing
Copyright (c) Tadahiro Hara. All rights reserved.  
Licensed under the [MIT](https://github.com/tadhara/ewm_generate_pdf/blob/master/LICENSE) License.
