### Brief Report on Personal Portfolio App Development

#### Design Choices

1. **Tech Stack:**
   - **React Native and Expo:** Chosen for their ease of use and strong community support, allowing for rapid development and deployment across multiple platforms.
   - **React Navigation:** Utilized for seamless navigation between different pages of the app, providing a native-like experience.

2. **App Structure:**
   - **Home Page:** Serves as the landing page, introducing the user and providing navigation to other sections.
   - **Projects Page:** Displays a list of projects, with dynamic routing to individual project detail pages.
   - **Skills Page:** Highlights the user’s skills in a clean and organized manner.
   - **Contact Page:** Provides a contact form and links to social media profiles for easy communication.

3. **Navigation:**
   - **Stack Navigator:** Implemented using React Navigation's stack navigator to manage navigation between pages, allowing for stack-based navigation and a consistent user experience.
   - **Dynamic Routing:** Used on the Projects page to navigate to detailed views of individual projects, enhancing user engagement.

4. **Styling:**
   - **Consistent Design Theme:** Ensured a cohesive look and feel across all pages, reflecting the user’s personal brand.
   - **Responsive Layout:** Designed to be responsive, ensuring the app looks good on various screen sizes and devices.
   - **Modern Aesthetic:** Employed a modern and clean aesthetic, using a minimalistic color scheme and intuitive UI elements.

5. **User Experience:**
   - **Easy Navigation:** Simple and intuitive navigation structure to ensure users can easily find information.
   - **Engaging Content:** Focused on showcasing projects and skills effectively to engage potential employers or collaborators.

#### Challenges Encountered

1. **Node.js Version Compatibility:**
   - **Issue:** Encountered compatibility issues with the global Expo CLI and Node.js version 17+.
   - **Solution:** Switched to using the local Expo CLI bundled with the project and downgraded Node.js to version 16 (LTS) for compatibility.

2. **Expo CLI Transition:**
   - **Issue:** The transition from the global Expo CLI to the local Expo CLI required adjustments in the development workflow.
   - **Solution:** Followed updated documentation and used `npx` commands to manage and start the Expo project.

3. **Metro Bundler Errors:**
   - **Issue:** Experienced issues with the Metro Bundler not starting correctly, resulting in connection errors.
   - **Solution:** Cleared the Metro Bundler cache and ensured no other processes were using the default ports. Additionally, checked network and firewall settings.

4. **Dynamic Routing:**
   - **Issue:** Implementing dynamic routing for project details required careful handling of navigation parameters.
   - **Solution:** Utilized React Navigation’s route parameters feature to pass and retrieve project IDs for dynamic content rendering.

5. **Styling Consistency:**
   - **Issue:** Ensuring a consistent and responsive design across different devices and screen sizes was challenging.
   - **Solution:** Used React Native’s StyleSheet for centralized styling and tested the app on multiple devices and simulators to ensure consistent appearance.

### Conclusion

The development of the personal portfolio app involved careful planning and implementation of modern design principles and navigation techniques. By leveraging React Native, Expo, and React Navigation, the app provides a seamless and engaging user experience, showcasing projects and skills effectively. Despite encountering several challenges, they were resolved through diligent troubleshooting and adherence to best practices, resulting in a polished and functional application.
