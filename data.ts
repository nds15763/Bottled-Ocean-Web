
export type Language = 'en' | 'zh';

export interface LocalizedContent {
  subtitle: string;
  promoText: string;
  aboutTitle: string;
  aboutText: string;
  whyTitle: string;
  whyPoints: string[];
  idealForTitle: string;
  idealForPoints: string[];
  featuresTitle: string;
  featuresList: string[];
  downloadBtn: string;
  backBtn: string;
  footerText: string;
  
  // Legal & Support Content
  privacyTitle: string;
  privacyContent: string;
  termsTitle: string;
  termsContent: string;
  supportTitle: string;
  supportContent: string;
}

export interface ContentData {
  en: LocalizedContent;
  zh: LocalizedContent;
}

export const content: ContentData = {
  en: {
    subtitle: "A Calm Focus Timer for Reading",
    promoText: "Dive into your reading journey with Bottled Ocean – a minimalist focus timer designed for book lovers. Like a peaceful ocean, we help you stay calm, focused, and distraction-free. Perfect for study sessions, deep reading, or mindful practice. Start your next chapter in tranquility.",
    aboutTitle: "About Bottled Ocean",
    aboutText: "Bottled Ocean is a beautifully simple focus timer designed specifically for readers and learners. Inspired by the calm, endless horizon of the ocean, this app helps you create a distraction-free zone for deep reading and focused study.",
    whyTitle: "Why Bottled Ocean?",
    whyPoints: [
      "Minimal Design – No ads, no social features, just you and your book.",
      "Ocean-Themed Atmosphere – Soothing visuals and gentle animations to keep you calm.",
      "Perfect for Reading Sessions – Designed with book lovers in mind, not just productivity junkies.",
      "Flexible Timing – Customize your focus sessions to match your reading pace.",
      "Stay Present – Block digital distractions and immerse yourself in the story."
    ],
    idealForTitle: "Ideal For",
    idealForPoints: [
      "Students preparing for exams",
      "Readers who want to build a daily reading habit",
      "Anyone seeking mindful, focused time away from screens",
      "Study groups and book clubs"
    ],
    featuresTitle: "Features",
    featuresList: [
      "Simple one-tap timer",
      "Visual ocean-themed interface",
      "Focus tracking (optional)",
      "No notifications or interruptions",
      "Lightweight and battery-friendly"
    ],
    downloadBtn: "Download on App Store",
    backBtn: "Back to Home",
    footerText: "Made with ❤️ for readers everywhere.",
    
    // Legal & Support Content
    privacyTitle: "Privacy Policy",
    privacyContent: `
      <h3>Introduction</h3>
      <p>Thank you for using Bottled Ocean ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it.</p>
      
      <h3>Data Collection</h3>
      <p><strong>We do not collect any personal data.</strong> Bottled Ocean is designed to be a private, offline-first experience.</p>
      <ul>
        <li><strong>No Account Required:</strong> You do not need to create an account to use the app.</li>
        <li><strong>Local Storage:</strong> All data regarding your focus sessions, reading history, and settings is stored locally on your device.</li>
        <li><strong>No Tracking:</strong> We do not use third-party analytics or tracking tools that collect identifiable user behavior.</li>
      </ul>

      <h3>Children’s Privacy</h3>
      <p>Since we do not collect personal data, our application is safe for users of all ages. We do not knowingly solicit data from or market to children.</p>

      <h3>Changes to This Policy</h3>
      <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.</p>

      <h3>Contact Us</h3>
      <p>If you have questions or comments about this policy, you may email us at <a href="mailto:xyakim625@gmail.com">xyakim625@gmail.com</a>.</p>
    `,
    
    termsTitle: "Terms of Service",
    termsContent: `
      <h3>1. Agreement to Terms</h3>
      <p>By accessing or using Bottled Ocean, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.</p>

      <h3>2. Intellectual Property</h3>
      <p>The service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of the developers of Bottled Ocean.</p>

      <h3>3. User Responsibilities</h3>
      <p>Bottled Ocean is provided for personal, non-commercial use. You agree not to use the app for any unlawful purpose or in any way that interrupts, damages, or impairs the service.</p>

      <h3>4. Disclaimer</h3>
      <p>The app is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the operation of the app or the information, content, or materials included.</p>

      <h3>5. Limitation of Liability</h3>
      <p>In no event shall the developers be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the app.</p>
    `,

    supportTitle: "Technical Support",
    supportContent: `
      <h3>Need Help?</h3>
      <p>If you are experiencing issues with Bottled Ocean, or if you have any suggestions for improvements, we are here to help.</p>

      <h3>Contact Information</h3>
      <p>Please contact us directly via email. We aim to respond to all inquiries within 24-48 hours.</p>
      
      <p class="email-box">
        <strong>Email:</strong> <a href="mailto:xyakim625@gmail.com">xyakim625@gmail.com</a>
      </p>

      <h3>Common Topics</h3>
      <ul>
        <li>Bug reports</li>
        <li>Feature requests</li>
        <li>Feedback on reading modes</li>
      </ul>
    `
  },
  zh: {
    subtitle: "为阅读而生的专注计时器",
    promoText: "Bottled Ocean 是一款专为阅读爱好者设计的极简专注计时器。像平静的海面一样，帮你远离干扰、沉入书页。无论是学习、深度阅读还是正念练习，都能让你在宁静中开启下一章节。",
    aboutTitle: "关于 Bottled Ocean",
    aboutText: "Bottled Ocean 是一款为读者和学习者量身打造的极简专注计时器。灵感源自平静无垠的海平面，这款应用帮你营造无干扰的阅读空间，专注于深度阅读与学习。",
    whyTitle: "为什么选择 Bottled Ocean？",
    whyPoints: [
      "极简设计 – 无广告、无社交功能，只有你和你的书。",
      "海洋主题氛围 – 舒缓的视觉与轻柔动效，让你保持平静。",
      "专为阅读定制 – 不只是效率工具，更是读书人的专属时钟。",
      "灵活计时 – 根据你的阅读节奏自定义专注时长。",
      "保持当下 – 屏蔽数字干扰，沉浸在故事之中。"
    ],
    idealForTitle: "适用场景",
    idealForPoints: [
      "学生备考、复习",
      "想养成每日阅读习惯的读者",
      "需要远离手机、专注当下的人",
      "学习小组和读书会"
    ],
    featuresTitle: "核心功能",
    featuresList: [
      "一键开始计时",
      "海洋主题视觉界面",
      "专注时长记录（可选）",
      "无通知打扰",
      "轻量省电"
    ],
    downloadBtn: "App Store 下载",
    backBtn: "返回主页",
    footerText: "为每一位热爱阅读的人精心制作。",
    
    privacyTitle: "隐私政策",
    privacyContent: `
      <h3>简介</h3>
      <p>感谢您使用 Bottled Ocean。我们非常重视您的隐私。本隐私政策说明了我们如何处理您的信息。</p>
      
      <h3>数据收集</h3>
      <p><strong>我们不收集任何个人数据。</strong> Bottled Ocean 是一款注重隐私的离线应用。</p>
      <ul>
        <li><strong>无需账户：</strong> 您无需注册即可使用。</li>
        <li><strong>本地存储：</strong> 所有专注记录和设置均存储在您的设备本地。</li>
        <li><strong>无追踪：</strong> 我们不使用第三方追踪工具收集用户行为数据。</li>
      </ul>

      <h3>联系我们</h3>
      <p>如有疑问，请通过邮件联系我们：<a href="mailto:xyakim625@gmail.com">xyakim625@gmail.com</a>。</p>
    `,
    
    termsTitle: "使用条款",
    termsContent: `
      <h3>1. 协议接受</h3>
      <p>下载或使用 Bottled Ocean 即表示您同意受本条款约束。</p>
      <h3>2. 仅限个人使用</h3>
      <p>本应用仅供个人非商业用途使用。</p>
      <h3>3. 免责声明</h3>
      <p>本应用按“原样”提供，不提供任何形式的明示或暗示保证。</p>
    `,

    supportTitle: "技术支持",
    supportContent: `
      <h3>需要帮助？</h3>
      <p>如果您在使用过程中遇到问题，或有任何建议，请联系我们。</p>
      <p class="email-box">
        <strong>邮箱：</strong> <a href="mailto:xyakim625@gmail.com">xyakim625@gmail.com</a>
      </p>
    `
  }
};
