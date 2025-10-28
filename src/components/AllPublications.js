// src/components/AllPublications.js
'use client';

import React, { useRef, useState, useMemo, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Card,
    useTheme,
    useMediaQuery,
    TextField,
    InputAdornment,
    Chip,
    FormControl,
    Select,
    MenuItem,
    Tooltip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkIcon from '@mui/icons-material/Link';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GetAppIcon from '@mui/icons-material/GetApp';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// All publications data
const allPublicationsData = [
    {
        id: 1,
        title: "Understanding Online Discussion Experiences of Blind Screen Reader Users",
        venue: "IJHCI",
        date: "2025",
        authors: "Md Javedul Ferdous, Akshay Kolgar Nayak, Yash Prakash, Nithiya Venkatraman, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "Online discussion platforms are vital for socializing and information exchange, yet blind screen reader users' conversational experiences remain largely unexplored. Through semi-structured interviews with blind participants active on Reddit, Facebook, and YouTube, we uncovered critical challenges including difficulty joining ongoing conversations, tracking replies to their posts, and comprehending context-dependent content. Participants expressed needs for text standardization, sub-thread summarization, and sub-conversation navigation links. They preferred longer context-rich posts and hierarchical organization over linear presentation. We discuss LLM-driven design solutions including semantic conversation disentanglement using chain-of-thought prompting, dynamic voice profiling for different posts, and intelligent summarization features to reduce cognitive load and enhance participation in online discussions.",
        image: "ijhci25",
        links: {
            pdf: "Papers/ijhci25.pdf",
        },
        extraLinks: {},
        awards: [],
    },
    {
        id: 2,
        title: "Examining Inclusive Computing Education for Blind Students in India",
        venue: "ACM SIGCSE TS '26",
        date: "February 2026",
        authors: "Akshay Kolgar Nayak, Yash Prakash, Md Javedul Ferdous, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We examine the state of inclusive computing education for blind and visually impaired (BVI) students in India, a resource-constrained Global South context. Through an interview study with 15 BVI students, instructors, and professionals, we identify key challenges including inaccessible instructional materials, heavy reliance on peer support, and the cognitive burden of simultaneously learning computing concepts and screen readers. Our findings reveal gaps in curriculum and instructor training, which often confines BVI individuals to basic, non-developer job roles. We provide recommendations to restructure curricula and propose self-learning assistive tools to foster more equitable and accessible computing education.",
        image: "csed",
        links: {
            pdf: "Papers/SIGCSE26.pdf",
        },
        extraLinks: {},
        awards: [],
    },
    {
        id: 3,
        title: "Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India",
        venue: "ACM CSCW",
        date: "October 2025",
        authors: "Akshay Kolgar Nayak, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present a study on self-reflection strategies among blind and visually impaired (BVI) job seekers in India. Despite gaining digital skills, many face challenges aligning with industry expectations due to limited personalized feedback and inaccessible job-prep tools. Self-reflection is often a social process shaped by peer interactions, yet current systems lack the tailored support needed for effective growth. Our findings inform the design of future tools to better guide reflective job-seeking and address the unique needs of BVI individuals in the Global South.",
        image: "selfReflection",
        links: {
            pdf: "Papers/cscw25.pdf",
            doi: "https://doi.org/10.1145/3757485",
        },
        extraLinks: {},
        acmAuthorizer: {
            url: "https://dl.acm.org/doi/10.1145/3757485?cid=99661242236",
            doi: "10.1145/3757485",
            cid: "99661242236",
        },
        citation: {
            bibtex: `@article{kolgar2025insights,
  title={Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India},
  author={Kolgar Nayak, Akshay and Prakash, Yash and Jayarathna, Sampath and Lee, Hae-Na and Ashok, Vikas},
  journal={Proceedings of the ACM on Human-Computer Interaction},
  volume={9},
  number={7},
  pages={1--30},
  year={2025},
  publisher={ACM New York, NY, USA}
}`,
            apa: "Kolgar Nayak, A., Prakash, Y., Jayarathna, S., Lee, H. N., & Ashok, V. (2025). Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India. Proceedings of the ACM on Human-Computer Interaction, 9(7), 1-30.",
            mla: "Kolgar Nayak, Akshay, et al. \"Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India.\" Proceedings of the ACM on Human-Computer Interaction 9.7 (2025): 1-30.",
            chicago: "Kolgar Nayak, Akshay, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, and Vikas Ashok. \"Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India.\" Proceedings of the ACM on Human-Computer Interaction 9, no. 7 (2025): 1-30.",
            ieee: "A. Kolgar Nayak, Y. Prakash, S. Jayarathna, H. N. Lee, and V. Ashok, \"Insights in Adaptation: Examining Self-reflection Strategies of Job Seekers with Visual Impairments in India,\" Proceedings of the ACM on Human-Computer Interaction, vol. 9, no. 7, pp. 1-30, 2025.",
        },
        awards: [],
    },
    {
        id: 4,
        title: "AccessMenu: Enhancing Usability of Online Restaurant Menus for Screen Reader Users",
        venue: "ACM Web4All",
        date: "April 2025",
        authors: "Nithiya Venkatraman*, Akshay Kolgar Nayak*, Suyog Dahal, Yash Prakash, Hae-Na Lee, Vikas Ashok",
        abstract: "Visual restaurant menus in PDF and image formats create substantial barriers for blind screen reader users ordering food online. An interview study with 12 BVI participants revealed that current OCR tools produce illogically ordered outputs, contextual hallucinations, and legend misinterpretations. AccessMenu addresses these issues through a browser extension leveraging GPT-4o-mini with custom Chain-of-Thought prompting to extract menu content (0.80 Entity F1) and re-render it in linearly navigable HTML. The system supports natural language queries for efficient menu filtering. Evaluation with 10 blind participants demonstrated significant improvements in usability and reduced task workload versus JAWS OCR, with participants covering twice as many menu items.",
        image: "accessMenu25",
        links: {
            pdf: "Papers/accessMenu25.pdf",
            doi: "https://doi.org/10.1145/3744257.3744275",
        },
        extraLinks: {},
        acmAuthorizer: {
            url: "https://dl.acm.org/doi/10.1145/3744257.3744275?cid=99661242236",
            doi: "10.1145/3744257.3744275",
            cid: "99661242236",
        },
        citation: {
            bibtex: `@inproceedings{venkatraman2025accessmenu,
  title={AccessMenu: Enhancing Usability of Online Restaurant Menus for Screen Reader Users},
  author={Venkatraman, Nithiya and Kolgar Nayak, Akshay and Dahal, Suyog and Prakash, Yash and Lee, Hae-Na and Ashok, Vikas},
  booktitle={Proceedings of the 22nd International Web for All Conference},
  pages={36--47},
  year={2025}
}`,
            apa: "Venkatraman, N., Kolgar Nayak, A., Dahal, S., Prakash, Y., Lee, H. N., & Ashok, V. (2025). AccessMenu: Enhancing Usability of Online Restaurant Menus for Screen Reader Users. In Proceedings of the 22nd International Web for All Conference (pp. 36-47).",
            mla: "Venkatraman, Nithiya, et al. \"AccessMenu: Enhancing Usability of Online Restaurant Menus for Screen Reader Users.\" Proceedings of the 22nd International Web for All Conference. 2025. 36-47.",
            chicago: "Venkatraman, Nithiya, Akshay Kolgar Nayak, Suyog Dahal, Yash Prakash, Hae-Na Lee, and Vikas Ashok. \"AccessMenu: Enhancing Usability of Online Restaurant Menus for Screen Reader Users.\" In Proceedings of the 22nd International Web for All Conference, pp. 36-47, 2025.",
            ieee: "N. Venkatraman, A. Kolgar Nayak, S. Dahal, Y. Prakash, H. N. Lee, and V. Ashok, \"AccessMenu: Enhancing Usability of Online Restaurant Menus for Screen Reader Users,\" in Proceedings of the 22nd International Web for All Conference, 2025, pp. 36-47.",
        },
        awards: [],
    },
    {
        id: 5,
        title: "Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews",
        venue: "ACM Web4All",
        date: "April 2025",
        authors: "Mohan Sunkara, Akshay Kolgar Nayak, Sandeep Kalari, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present QuickCue, an assistive browser extension that improves the usability of online restaurant reviews for blind screen reader users. QuickCue restructures review content into a hierarchical format organized by aspects (e.g., food, service, ambiance) and sentiment (positive/negative), enabling faster, more focused exploration with minimal navigation. Powered by GPT-4, it performs aspect-sentiment classification and generates targeted summaries, significantly reducing listening fatigue and helping users make more informed decisions.",
        image: "quickCue",
        links: {
            pdf: "Papers/quickCue.pdf",
            doi: "https://doi.org/10.1145/3744257.3744276",
        },
        extraLinks: {},
        acmAuthorizer: {
            url: "https://dl.acm.org/doi/10.1145/3744257.3744276?cid=99661242236",
            doi: "10.1145/3744257.3744276",
            cid: "99661242236",
        },
        citation: {
            bibtex: `@inproceedings{sunkara2025adapting,
  title={Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews},
  author={Sunkara, Mohan and Kolgar Nayak, Akshay and Kalari, Sandeep and Prakash, Yash and Jayarathna, Sampath and Lee, Hae-Na and Ashok, Vikas},
  booktitle={Proceedings of the 22nd International Web for All Conference},
  pages={135--146},
  year={2025}
}`,
            apa: "Sunkara, M., Kolgar Nayak, A., Kalari, S., Prakash, Y., Jayarathna, S., Lee, H. N., & Ashok, V. (2025). Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews. In Proceedings of the 22nd International Web for All Conference (pp. 135-146).",
            mla: "Sunkara, Mohan, et al. \"Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews.\" Proceedings of the 22nd International Web for All Conference. 2025. 135-146.",
            chicago: "Sunkara, Mohan, Akshay Kolgar Nayak, Sandeep Kalari, Yash Prakash, Sampath Jayarathna, Hae-Na Lee, and Vikas Ashok. \"Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews.\" In Proceedings of the 22nd International Web for All Conference, pp. 135-146, 2025.",
            ieee: "M. Sunkara, A. Kolgar Nayak, S. Kalari, Y. Prakash, S. Jayarathna, H. N. Lee, and V. Ashok, \"Adapting Online Customer Reviews for Blind Users: A Case Study of Restaurant Reviews,\" in Proceedings of the 22nd International Web for All Conference, 2025, pp. 135-146.",
        },
        awards: [{
            type: "best-paper",
            name: "Best Paper Award"
        }],
    },
    {
        id: 6,
        title: "Improving Usability of Data Charts in Multimodal Documents for Low Vision Users",
        venue: "ACM ICMI",
        date: "November 2024",
        authors: "Yash Prakash, Akshay Kolgar Nayak, Shoaib Mohammed Alyaan, Pathan Aseef Khan, Hae-Na Lee, Vikas Ashok",
        abstract: "Multimodal documents pairing charts with text create significant challenges for low vision screen magnifier users on smartphones, who struggle to mentally associate spatially separated information due to limited viewport and constant panning. Following a formative study with 10 low vision participants revealing key requirements, ChartSync transforms static charts into interactive slideshows featuring magnified views of salient data point combinations identified through LLaMA with Chain-of-Thought and ReAct prompting. Each slide includes tailored voice narration addressing the split-attention effect. Evaluation with 12 participants demonstrated significant improvements in task completion time, comprehension, and reduced cognitive load compared to standard screen magnifiers and existing solutions.",
        image: "icmi24",
        links: {
            pdf: "Papers/icmi24.pdf",
            doi: "https://doi.org/10.1145/3678957.3685714",
        },
        extraLinks: {
            github: "https://github.com/accessodu/ChartSync.git",
        },
        acmAuthorizer: {
            url: "https://dl.acm.org/doi/10.1145/3678957.3685714?cid=99661242236",
            doi: "10.1145/3678957.3685714",
            cid: "99661242236",
        },
        citation: {
            bibtex: `@inproceedings{prakash2024improving,
  title={Improving Usability of Data Charts in Multimodal Documents for Low Vision Users},
  author={Prakash, Yash and Kolgar Nayak, Akshay and Alyaan, Shoaib Mohammed and Khan, Pathan Aseef and Lee, Hae-Na and Ashok, Vikas},
  booktitle={Proceedings of the 26th International Conference on Multimodal Interaction},
  pages={498--507},
  year={2024}
}`,
            apa: "Prakash, Y., Kolgar Nayak, A., Alyaan, S. M., Khan, P. A., Lee, H. N., & Ashok, V. (2024). Improving Usability of Data Charts in Multimodal Documents for Low Vision Users. In Proceedings of the 26th International Conference on Multimodal Interaction (pp. 498-507).",
            mla: "Prakash, Yash, et al. \"Improving Usability of Data Charts in Multimodal Documents for Low Vision Users.\" Proceedings of the 26th International Conference on Multimodal Interaction. 2024. 498-507.",
            chicago: "Prakash, Yash, Akshay Kolgar Nayak, Shoaib Mohammed Alyaan, Pathan Aseef Khan, Hae-Na Lee, and Vikas Ashok. \"Improving Usability of Data Charts in Multimodal Documents for Low Vision Users.\" In Proceedings of the 26th International Conference on Multimodal Interaction, pp. 498-507, 2024.",
            ieee: "Y. Prakash, A. Kolgar Nayak, S. M. Alyaan, P. A. Khan, H. N. Lee, and V. Ashok, \"Improving Usability of Data Charts in Multimodal Documents for Low Vision Users,\" in Proceedings of the 26th International Conference on Multimodal Interaction, 2024, pp. 498-507.",
        },
        awards: [],
    },
    {
        id: 7,
        title: "Understanding Low Vision Graphical Perception of Bar Charts",
        venue: "ACM ASSETS",
        date: "October 2024",
        authors: "Yash Prakash, Akshay Kolgar Nayak, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "Bar charts are ubiquitous for data representation, yet how low-vision screen magnifier users perceive them remains unexplored. Through four controlled experiments with 25 low-vision participants using a custom screen magnifier logger capturing zooming and panning behaviors, this study reveals critical differences from sighted user perception. Findings show low-vision users invest substantial effort counteracting blurring and contrast effects, with tall distractors significantly elevating error rates contrary to sighted user studies. Adjacent bars within single-column stacks prove harder to interpret than separated bars for some participants, while the \"blurring effect\" causes systematic height estimation errors. These insights inform future chart design guidelines accommodating low-vision needs.",
        image: "assets24",
        links: {
            pdf: "Papers/assets24.pdf",
            doi: "https://doi.org/10.1145/3663548.3675616",
        },
        extraLinks: {
            github: "https://github.com/accessodu/LV_Graph_BarCharts.git",
            presentation: "https://youtu.be/VYwg1kaJUos",
            demo: "https://youtu.be/V7uOzCfy0rM"
        },
        acmAuthorizer: {
            url: "https://dl.acm.org/doi/10.1145/3663548.3675616?cid=99661242236",
            doi: "10.1145/3663548.3675616",
            cid: "99661242236",
        },
        citation: {
            bibtex: `@inproceedings{prakash2024understanding,
  title={Understanding Low Vision Graphical Perception of Bar Charts},
  author={Prakash, Yash and Kolgar Nayak, Akshay and Jayarathna, Sampath and Lee, Hae-Na and Ashok, Vikas},
  booktitle={Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility},
  pages={1--10},
  year={2024}
}`,
            apa: "Prakash, Y., Kolgar Nayak, A., Jayarathna, S., Lee, H. N., & Ashok, V. (2024). Understanding Low Vision Graphical Perception of Bar Charts. In Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility (pp. 1-10).",
            mla: "Prakash, Yash, et al. \"Understanding Low Vision Graphical Perception of Bar Charts.\" Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility. 2024. 1-10.",
            chicago: "Prakash, Yash, Akshay Kolgar Nayak, Sampath Jayarathna, Hae-Na Lee, and Vikas Ashok. \"Understanding Low Vision Graphical Perception of Bar Charts.\" In Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility, pp. 1-10, 2024.",
            ieee: "Y. Prakash, A. Kolgar Nayak, S. Jayarathna, H. N. Lee, and V. Ashok, \"Understanding Low Vision Graphical Perception of Bar Charts,\" in Proceedings of the 26th International ACM SIGACCESS Conference on Computers and Accessibility, 2024, pp. 1-10.",
        },
        awards: [],
    },
    {
        id: 8,
        title: "Towards Enhancing Low Vision Usability of Data Charts on Smartphones",
        venue: "IEEE VIS (TVCG)",
        date: "September 2024",
        authors: "Yash Prakash, Pathan Aseef Khan, Akshay Kolgar Nayak, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present GraphLite, a mobile assistive system that makes data charts more usable for low-vision screen magnifier users. GraphLite transforms static, non-interactive charts into customizable, interactive views that preserve visual context under magnification. Users can selectively focus on key data points, personalize chart appearance, and reduce panning effort through simplified gestures.",
        image: "graphLite",
        links: {
            pdf: "Papers/graphLite.pdf",
            doi: "https://doi.org/10.1109/TVCG.2024.3456348",
        },
        extraLinks: {
            github: "https://github.com/accessodu/GraphLite?tab=readme-ov-file",
            video: "https://youtu.be/QFw5QH7FwNY"
        },
        citation: {
            bibtex: `@article{prakash2024towards,
  title={Towards Enhancing Low Vision Usability of Data Charts on Smartphones},
  author={Prakash, Yash and Khan, Pathan Aseef and Nayak, Akshay Kolgar and Jayarathna, Sampath and Lee, Hae-Na and Ashok, Vikas},
  journal={IEEE Transactions on Visualization and Computer Graphics},
  year={2024},
  publisher={IEEE}
}`,
            apa: "Prakash, Y., Khan, P. A., Nayak, A. K., Jayarathna, S., Lee, H. N., & Ashok, V. (2024). Towards Enhancing Low Vision Usability of Data Charts on Smartphones. IEEE Transactions on Visualization and Computer Graphics. IEEE.",
            mla: "Prakash, Yash, et al. \"Towards Enhancing Low Vision Usability of Data Charts on Smartphones.\" IEEE Transactions on Visualization and Computer Graphics (2024).",
            chicago: "Prakash, Yash, Pathan Aseef Khan, Akshay Kolgar Nayak, Sampath Jayarathna, Hae-Na Lee, and Vikas Ashok. \"Towards Enhancing Low Vision Usability of Data Charts on Smartphones.\" IEEE Transactions on Visualization and Computer Graphics (2024).",
            ieee: "Y. Prakash, P. A. Khan, A. K. Nayak, S. Jayarathna, H. N. Lee, and V. Ashok, \"Towards Enhancing Low Vision Usability of Data Charts on Smartphones,\" IEEE Transactions on Visualization and Computer Graphics, 2024.",
        },
        awards: [],
    },
    {
        id: 9,
        title: "Assessing the Accessibility and Usability of Web Archives for Blind Users",
        venue: "TPDL",
        date: "September 2024",
        authors: "Mohan Sunkara, Akshay Kolgar Nayak, Sandeep Kalari, Satwik Ram Kodandaram, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "Web archives preserve digital history for researchers and the public, yet their accessibility for blind users remains unexplored. This study provides the first comprehensive evaluation of five prominent platforms (Wayback Machine, UK Web Archive, Pandora, Trove, Archive.today) through automated analysis of 223 pages and a user study with 10 blind participants. Critical barriers emerged including missing image alternatives, inadequate ARIA labeling, and inaccessible date-selection widgets. Participants averaged 8.21 minutes and 129 shortcuts per task, with Archive.today least accessible and UK Web Archive most usable, informing actionable design recommendations for developers.",
        image: "tpdl24",
        links: {
            pdf: "Papers/tpdl24.pdf",
            doi: "https://doi.org/10.1007/978-3-031-72437-4_12",
        },
        extraLinks: {
            github: "https://github.com/accessodu/Web_Archives",
        },
        citation: {
            bibtex: `@inproceedings{sunkara2024assessing,
  title={Assessing the Accessibility and Usability of Web Archives for Blind Users},
  author={Sunkara, Mohan and Nayak, Akshay Kolgar and Kalari, Sandeep and Kodandaram, Satwik Ram and Jayarathna, Sampath and Lee, Hae-Na and Ashok, Vikas},
  booktitle={International Conference on Theory and Practice of Digital Libraries},
  pages={203--221},
  year={2024},
  organization={Springer}
}`,
            apa: "Sunkara, M., Nayak, A. K., Kalari, S., Kodandaram, S. R., Jayarathna, S., Lee, H. N., & Ashok, V. (2024). Assessing the Accessibility and Usability of Web Archives for Blind Users. In International Conference on Theory and Practice of Digital Libraries (pp. 203-221). Springer.",
            mla: "Sunkara, Mohan, et al. \"Assessing the Accessibility and Usability of Web Archives for Blind Users.\" International Conference on Theory and Practice of Digital Libraries. Springer, 2024. 203-221.",
            chicago: "Sunkara, Mohan, Akshay Kolgar Nayak, Sandeep Kalari, Satwik Ram Kodandaram, Sampath Jayarathna, Hae-Na Lee, and Vikas Ashok. \"Assessing the Accessibility and Usability of Web Archives for Blind Users.\" In International Conference on Theory and Practice of Digital Libraries, pp. 203-221. Springer, 2024.",
            ieee: "M. Sunkara, A. K. Nayak, S. Kalari, S. R. Kodandaram, S. Jayarathna, H. N. Lee, and V. Ashok, \"Assessing the Accessibility and Usability of Web Archives for Blind Users,\" in International Conference on Theory and Practice of Digital Libraries, Springer, 2024, pp. 203-221.",
        },
        awards: [],
    },
    {
        id: 10,
        title: "All in One Place: Ensuring Usable Access to Online Shopping Items for Blind Users",
        venue: "ACM EICS (PACMHCI)",
        date: "June 2024",
        authors: "Yash Prakash, Akshay Kolgar Nayak, Mohan Sunkara, Sampath Jayarathna, Hae-Na Lee, Vikas Ashok",
        abstract: "We present InstaFetch, a browser extension that transforms e-commerce accessibility for blind screen reader users by eliminating tedious navigation between product list and detail pages. InstaFetch provides a unified interface that consolidates descriptions, specifications, and reviews in one place using a custom Mask R-CNN model trained on 3,000 annotated webpages. Beyond information aggregation, it features natural language querying powered by LLaMA with Retrieval Augmented Generation, Chain-of-Thought, and ReAct prompting, enabling users to ask complex product questions and receive immediate contextual responses. In evaluations with 14 blind participants, InstaFetch significantly reduced interaction time, keyboard shortcuts, and cognitive workload while enabling exploration of substantially more products.",
        image: "instafetch24",
        links: {
            pdf: "Papers/instafetch24.pdf",
            doi: "https://doi.org/10.1145/3664639",
        },
        extraLinks: {
            github: "https://github.com/accessodu/InstaFetch.git",
            video: "https://youtu.be/D9drlAodlRw"
        },
        acmAuthorizer: {
            url: "https://dl.acm.org/doi/10.1145/3664639?cid=99661242236",
            doi: "10.1145/3664639",
            cid: "99661242236",
        },
        citation: {
            bibtex: `@article{prakash2024all,
  title={All in one place: Ensuring usable access to online shopping items for blind users},
  author={Prakash, Yash and Nayak, Akshay Kolgar and Sunkara, Mohan and Jayarathna, Sampath and Lee, Hae-Na and Ashok, Vikas},
  journal={Proceedings of the ACM on Human-Computer Interaction},
  volume={8},
  number={EICS},
  pages={1--25},
  year={2024},
  publisher={ACM New York, NY, USA}
}`,
            apa: "Prakash, Y., Nayak, A. K., Sunkara, M., Jayarathna, S., Lee, H. N., & Ashok, V. (2024). All in one place: Ensuring usable access to online shopping items for blind users. Proceedings of the ACM on Human-Computer Interaction, 8(EICS), 1-25.",
            mla: "Prakash, Yash, et al. \"All in One Place: Ensuring Usable Access to Online Shopping Items for Blind Users.\" Proceedings of the ACM on Human-Computer Interaction 8.EICS (2024): 1-25.",
            chicago: "Prakash, Yash, Akshay Kolgar Nayak, Mohan Sunkara, Sampath Jayarathna, Hae-Na Lee, and Vikas Ashok. \"All in One Place: Ensuring Usable Access to Online Shopping Items for Blind Users.\" Proceedings of the ACM on Human-Computer Interaction 8, no. EICS (2024): 1-25.",
            ieee: "Y. Prakash, A. K. Nayak, M. Sunkara, S. Jayarathna, H. N. Lee, and V. Ashok, \"All in One Place: Ensuring Usable Access to Online Shopping Items for Blind Users,\" Proceedings of the ACM on Human-Computer Interaction, vol. 8, no. EICS, pp. 1-25, 2024.",
        },
        awards: [],
    },
];

// Citation Dialog Component
const CitationDialog = ({ open, onClose, citation }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [copiedFormat, setCopiedFormat] = useState(null);

    const formats = [
        { label: 'BibTeX', value: citation?.bibtex || '', key: 'bibtex' },
        { label: 'APA', value: citation?.apa || '', key: 'apa' },
        { label: 'MLA', value: citation?.mla || '', key: 'mla' },
        { label: 'Chicago', value: citation?.chicago || '', key: 'chicago' },
        { label: 'IEEE', value: citation?.ieee || '', key: 'ieee' },
    ];

    const handleCopy = (text, formatKey) => {
        navigator.clipboard.writeText(text);
        setCopiedFormat(formatKey);
        setTimeout(() => setCopiedFormat(null), 2000);
    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(45, 64, 89, 0.2)',
                }
            }}
        >
            <DialogTitle sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 2,
                borderBottom: '1px solid rgba(45, 64, 89, 0.1)'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FormatQuoteIcon sx={{ color: '#1565C0', fontSize: '1.5rem' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#2D4059' }}>
                        Cite this article
                    </Typography>
                </Box>
                <IconButton
                    onClick={onClose}
                    size="small"
                    sx={{
                        color: '#5A7CA1',
                        '&:hover': { backgroundColor: 'rgba(90, 124, 161, 0.1)' }
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ pt: 3 }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    sx={{
                        mb: 3,
                        '& .MuiTab-root': {
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            color: '#5A7CA1',
                            minWidth: 'auto',
                            px: 3,
                            '&.Mui-selected': {
                                color: '#1565C0',
                            }
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#1565C0',
                            height: 3,
                            borderRadius: '3px 3px 0 0'
                        }
                    }}
                >
                    {formats.map((format, index) => (
                        <Tab key={format.key} label={format.label} />
                    ))}
                </Tabs>

                {formats.map((format, index) => (
                    selectedTab === index && (
                        <Box key={format.key} sx={{ position: 'relative' }}>
                            <Box
                                sx={{
                                    backgroundColor: '#F5F7FA',
                                    border: '1px solid rgba(45, 64, 89, 0.1)',
                                    borderRadius: '12px',
                                    p: 3,
                                    fontFamily: 'monospace',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.6,
                                    color: '#2D4059',
                                    whiteSpace: 'pre-wrap',
                                    wordBreak: 'break-word',
                                    maxHeight: '300px',
                                    overflowY: 'auto',
                                    position: 'relative',
                                }}
                            >
                                {format.value}
                            </Box>
                            <Button
                                startIcon={copiedFormat === format.key ? <CheckIcon /> : <ContentCopyIcon />}
                                onClick={() => handleCopy(format.value, format.key)}
                                variant="contained"
                                size="small"
                                sx={{
                                    mt: 2,
                                    backgroundColor: copiedFormat === format.key ? '#1B5E20' : '#1565C0',
                                    color: 'white',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    borderRadius: '8px',
                                    px: 3,
                                    '&:hover': {
                                        backgroundColor: copiedFormat === format.key ? '#2E7D32' : '#0D47A1',
                                    }
                                }}
                            >
                                {copiedFormat === format.key ? 'Copied!' : 'Copy to clipboard'}
                            </Button>
                        </Box>
                    )
                ))}
            </DialogContent>
        </Dialog>
    );
};

// ACM Author-Izer Button Component
const ACMAuthorizerButton = ({ acmData }) => {
    const [stats, setStats] = useState({
        downloads: null,
        citations: null,
        loading: true,
        error: false
    });

    useEffect(() => {
        // Fetch ACM statistics
        const fetchACMStats = async () => {
            try {
                // ACM provides stats through their API or embedded script
                // Note: This may fail in localhost due to CORS restrictions
                const response = await fetch(`https://dl.acm.org/action/ajaxShowCitedBy?doi=${acmData.doi}`, {
                    mode: 'cors',
                    credentials: 'omit',
                });

                if (response.ok) {
                    const data = await response.json();
                    setStats({
                        citations: data.citationCount || null,
                        downloads: data.downloadCount || null,
                        loading: false,
                        error: false
                    });
                } else {
                    // API request failed, use placeholder
                    setStats({ citations: null, downloads: null, loading: false, error: true });
                }
            } catch (error) {
                // CORS or network error - common in localhost
                // Silently fail and show button without stats
                setStats({ citations: null, downloads: null, loading: false, error: true });
            }
        };

        if (acmData && acmData.doi) {
            // Add a small delay to avoid hammering the API
            const timer = setTimeout(() => {
                fetchACMStats();
            }, 100);

            return () => clearTimeout(timer);
        } else {
            setStats({ citations: null, downloads: null, loading: false, error: false });
        }
    }, [acmData]);

    return (
        <Tooltip
            title="Access on ACM Digital Library (free via Author-Izer)"
            arrow
            placement="top"
        >
            <Button
                component="a"
                href={acmData.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    minWidth: 'auto',
                    backgroundColor: 'transparent',
                    color: '#0085CA',
                    borderRadius: '50%',
                    width: '44px',
                    height: '44px',
                    p: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(0, 133, 202, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 133, 202, 0.08)',
                        borderColor: '#0085CA',
                        transform: 'scale(1.1)',
                        boxShadow: '0 4px 12px rgba(0, 133, 202, 0.2)',
                    },
                }}
            >
                <Box
                    component="img"
                    src="/Icons/dl.png"
                    alt="ACM DL"
                    sx={{
                        height: '22px',
                        width: 'auto',
                    }}
                />
            </Button>
        </Tooltip>
    );
};

// Award badge component
const AwardBadge = ({ awards }) => {
    const renderBestPaperBadge = () => (
        <Box sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFF9F0 100%)',
            px: 2,
            py: 0.8,
            borderRadius: '24px',
            boxShadow: '0 3px 12px rgba(184, 134, 11, 0.25)',
            border: '2px solid #D4AF37',
        }}>
            <Box sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                boxShadow: '0 2px 6px rgba(255, 165, 0, 0.3)',
            }}>
                🏆
            </Box>
            <Typography sx={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
                color: '#8B7500',
            }}>
                Best Paper Award
            </Typography>
        </Box>
    );

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                zIndex: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'flex-end'
            }}
        >
            {awards.map((award, index) => {
                if (award.type === 'best-paper') {
                    return <Box key={index}>{renderBestPaperBadge()}</Box>;
                }
                return null;
            })}
        </Box>
    );
};

// Publication Image component
const PublicationImage = ({ imageName, alt }) => {
    const dialogRef = useRef(null);
    const imgUrl = `/Publications/${imageName}.png`;
    const isAssets24 = imageName === 'assets24';

    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    return (
        <>
            <Box
                onClick={openDialog}
                sx={{
                    width: '100%',
                    height: '335px',
                    display: 'flex',
                    flexDirection: isAssets24 ? 'column' : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'transform 0.2s ease',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    }
                }}
            >
                {isAssets24 ? (
                    <>
                        <Box
                            component="img"
                            src="/Publications/assets24_1.png"
                            alt={alt || `Image 1 for ${imageName}`}
                            sx={{
                                width: '100%',
                                flex: 1,
                                objectFit: 'contain',
                            }}
                        />
                        <Box
                            component="img"
                            src="/Publications/assets24_2.png"
                            alt={alt || `Image 2 for ${imageName}`}
                            sx={{
                                width: '100%',
                                flex: 1,
                                objectFit: 'contain',
                            }}
                        />
                    </>
                ) : (
                    <Box
                        component="img"
                        src={imgUrl}
                        alt={alt || `Image for ${imageName}`}
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            borderRadius: '12px'
                        }}
                    />
                )}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        color: 'white',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        zIndex: 1
                    }}
                >
                    🔍
                </Box>
            </Box>

            <dialog
                ref={dialogRef}
                style={{
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    backgroundColor: 'white',
                    padding: '16px',
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                    position: 'fixed',
                    zIndex: 9999,
                    margin: 'auto'
                }}
                onClick={(e) => {
                    if (e.target === dialogRef.current) {
                        closeDialog();
                    }
                }}
            >
                <button
                    onClick={closeDialog}
                    style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        backgroundColor: '#333',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10
                    }}
                >
                    ✕
                </button>
                {isAssets24 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                        <img
                            src="/Publications/assets24_1.png"
                            alt={alt || `Full-size image 1 for ${imageName}`}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '40vh',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                        <img
                            src="/Publications/assets24_2.png"
                            alt={alt || `Full-size image 2 for ${imageName}`}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '40vh',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                ) : (
                    <img
                        src={imgUrl}
                        alt={alt || `Full-size image for ${imageName}`}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '80vh',
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto'
                        }}
                    />
                )}
            </dialog>
        </>
    );
};

// Extra links component
const ExtraLinks = ({ links }) => {
    if (!links || Object.keys(links).length === 0) return null;

    const getIcon = (type) => {
        switch (type) {
            case 'github':
                return <CodeIcon fontSize="small" />;
            case 'video':
            case 'presentation':
            case 'demo':
                return <VideoLibraryIcon fontSize="small" />;
            default:
                return <LinkIcon fontSize="small" />;
        }
    };

    const getLabel = (type) => {
        switch (type) {
            case 'github':
                return 'GitHub';
            case 'video':
                return 'Demo';
            case 'presentation':
                return 'Presentation';
            case 'demo':
                return 'Demo';
            default:
                return type.charAt(0).toUpperCase() + type.slice(1);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1.5, justifyContent: 'center' }}>
            {Object.entries(links).map(([type, url]) => (
                <Button
                    key={type}
                    startIcon={getIcon(type)}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="outlined"
                    sx={{
                        backgroundColor: 'transparent',
                        color: '#5A7CA1',
                        fontWeight: 500,
                        border: '1px solid #5A7CA1',
                        borderRadius: '30px',
                        textTransform: 'none',
                        padding: '4px 12px',
                        minWidth: 'auto',
                        '&:hover': {
                            backgroundColor: '#5A7CA1',
                            color: 'white',
                            borderColor: '#5A7CA1',
                        },
                        '& .MuiButton-startIcon': {
                            color: '#5A7CA1',
                            transition: 'color 0.2s ease',
                        },
                        '&:hover .MuiButton-startIcon': {
                            color: 'white'
                        }
                    }}
                >
                    {getLabel(type)}
                </Button>
            ))}
        </Box>
    );
};

// Publication card component (reused from main page)
const PublicationCard = ({ publication }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [citationDialogOpen, setCitationDialogOpen] = useState(false);

    return (
        <Card
            elevation={0}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 8px 24px rgba(45, 64, 89, 0.12)',
                mb: 5,
                mt: 4,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '6px',
                    background: 'linear-gradient(90deg, #FF6B35, #FF8C42, #A47BB0)',
                    opacity: 0.8
                },
                '&:hover': {
                    boxShadow: '0 16px 48px rgba(45, 64, 89, 0.2)',
                    transform: 'translateY(-12px)',
                    '&::before': {
                        opacity: 1
                    }
                },
                minHeight: { xs: 'auto', md: '420px' }
            }}
        >
            {/* Award Badges */}
            {publication.awards && publication.awards.length > 0 &&
                <AwardBadge awards={publication.awards} />
            }

            {/* Left side - Content */}
            <Box sx={{
                width: { xs: '100%', md: '55%' },
                p: { xs: 3, md: 4 },
                pt: { xs: 4, md: 4.5 },
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(255, 248, 243, 0.4)',
                borderRight: { xs: 'none', md: '1px solid rgba(45, 64, 89, 0.08)' }
            }}>
                {/* Title */}
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.3,
                        mb: 2,
                        color: '#2D4059',
                        fontSize: { xs: '1.3rem', md: '1.45rem' },
                    }}
                >
                    {publication.title}
                </Typography>

                {/* Venue Badge */}
                <Box sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    mb: 2,
                    backgroundColor: publication.venue && publication.venue.includes('IEEE')
                        ? 'rgba(0, 114, 206, 0.1)'
                        : 'rgba(21, 101, 192, 0.1)',
                    px: 2,
                    py: 1,
                    borderRadius: '12px',
                    width: 'fit-content',
                    border: publication.venue && publication.venue.includes('IEEE')
                        ? '1px solid rgba(0, 114, 206, 0.2)'
                        : '1px solid rgba(21, 101, 192, 0.2)'
                }}>
                    {publication.venue && (publication.venue.includes('ACM') || publication.venue.includes('SIGACCESS') || publication.venue.includes('SIGCSE') || publication.venue.includes('CSCW') || publication.venue.includes('EICS') || publication.venue.includes('Web4All') || publication.venue.includes('ICMI') || publication.venue.includes('ASSETS')) ? (
                        <Box
                            component="img"
                            src="/Icons/acm.png"
                            alt="ACM"
                            sx={{
                                height: '16px',
                                width: 'auto',
                                mr: 1,
                            }}
                        />
                    ) : publication.venue && publication.venue.includes('IEEE') ? (
                        <Box
                            component="img"
                            src="/Icons/ieee.png"
                            alt="IEEE"
                            sx={{
                                height: '16px',
                                width: 'auto',
                                mr: 1,
                            }}
                        />
                    ) : publication.venue && publication.venue.includes('IJHCI') ? (
                        <Box
                            component="img"
                            src="/News/taylorFrancis.png"
                            alt="Taylor & Francis"
                            sx={{
                                height: '16px',
                                width: 'auto',
                                mr: 1,
                            }}
                        />
                    ) : (
                        <SchoolIcon sx={{
                            fontSize: '1.1rem',
                            mr: 1,
                            color: publication.venue && publication.venue.includes('IEEE') ? '#0072CE' : '#1565C0'
                        }} />
                    )}
                    <Typography
                        variant="body2"
                        sx={{
                            color: publication.venue && publication.venue.includes('IEEE') ? '#0072CE' : '#1565C0',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                        }}
                    >
                        {publication.venue} • {publication.date}
                    </Typography>
                </Box>

                {/* Authors */}
                <Box sx={{
                    mb: 2,
                    p: 1.5,
                    backgroundColor: 'rgba(90, 124, 161, 0.08)',
                    borderRadius: '8px',
                    borderLeft: '3px solid #5A7CA1'
                }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 600,
                            color: '#2D4059',
                            fontSize: '0.9rem',
                            lineHeight: 1.6
                        }}
                    >
                        {publication.authors.split('Akshay Kolgar Nayak').map((part, index, array) => (
                            <React.Fragment key={index}>
                                {part}
                                {index < array.length - 1 && (
                                    <Box component="span" sx={{ fontWeight: 800, color: '#FF6B35' }}>
                                        Akshay Kolgar Nayak
                                    </Box>
                                )}
                            </React.Fragment>
                        ))}
                    </Typography>
                </Box>

                {/* Abstract */}
                <Typography
                    variant="body2"
                    sx={{
                        color: '#2D4059',
                        mb: 3,
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                        opacity: 0.9,
                        flexGrow: 1
                    }}
                >
                    {publication.abstract}
                </Typography>

                {/* Action Buttons - Elegant Icon Design */}
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    mt: 'auto',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    {publication.links.pdf && (
                        <Tooltip title="Download PDF" arrow placement="top">
                            <Button
                                component="a"
                                href={publication.links.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    minWidth: 'auto',
                                    backgroundColor: 'transparent',
                                    color: '#FF6B35',
                                    borderRadius: '50%',
                                    width: '44px',
                                    height: '44px',
                                    p: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(255, 107, 53, 0.2)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 107, 53, 0.08)',
                                        borderColor: '#FF6B35',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 12px rgba(255, 107, 53, 0.2)',
                                    },
                                }}
                            >
                                <DescriptionIcon sx={{ fontSize: '1.3rem' }} />
                            </Button>
                        </Tooltip>
                    )}
                    {publication.acmAuthorizer && (
                        <ACMAuthorizerButton acmData={publication.acmAuthorizer} />
                    )}
                    {publication.links.doi && (
                        <Tooltip title="View DOI" arrow placement="top">
                            <Button
                                component="a"
                                href={publication.links.doi}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    minWidth: 'auto',
                                    backgroundColor: 'transparent',
                                    color: '#1565C0',
                                    borderRadius: '50%',
                                    width: '44px',
                                    height: '44px',
                                    p: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(21, 101, 192, 0.2)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(21, 101, 192, 0.08)',
                                        borderColor: '#1565C0',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 12px rgba(21, 101, 192, 0.2)',
                                    },
                                }}
                            >
                                <LinkIcon sx={{ fontSize: '1.3rem' }} />
                            </Button>
                        </Tooltip>
                    )}
                    {publication.citation && (
                        <Tooltip title="Cite this article" arrow placement="top">
                            <Button
                                onClick={() => setCitationDialogOpen(true)}
                                sx={{
                                    minWidth: 'auto',
                                    backgroundColor: 'transparent',
                                    color: '#1B5E20',
                                    borderRadius: '50%',
                                    width: '44px',
                                    height: '44px',
                                    p: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(27, 94, 32, 0.2)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(27, 94, 32, 0.08)',
                                        borderColor: '#1B5E20',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 12px rgba(27, 94, 32, 0.2)',
                                    },
                                }}
                            >
                                <FormatQuoteIcon sx={{ fontSize: '1.3rem' }} />
                            </Button>
                        </Tooltip>
                    )}
                    {publication.links.project && (
                        <Tooltip title="Project Page" arrow placement="top">
                            <Button
                                component="a"
                                href={publication.links.project}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    minWidth: 'auto',
                                    backgroundColor: 'transparent',
                                    color: '#7B1FA2',
                                    borderRadius: '50%',
                                    width: '44px',
                                    height: '44px',
                                    p: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px solid rgba(123, 31, 162, 0.2)',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(123, 31, 162, 0.08)',
                                        borderColor: '#7B1FA2',
                                        transform: 'scale(1.1)',
                                        boxShadow: '0 4px 12px rgba(123, 31, 162, 0.2)',
                                    },
                                }}
                            >
                                <WebIcon sx={{ fontSize: '1.3rem' }} />
                            </Button>
                        </Tooltip>
                    )}
                </Box>
            </Box>

            {/* Right side - Image and extra links */}
            <Box sx={{
                width: { xs: '100%', md: '45%' },
                p: { xs: 3, md: 3 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'rgba(243, 232, 248, 0.3)',
            }}>
                <Box sx={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                    mb: 2
                }}>
                    <PublicationImage imageName={publication.image} alt={`Image for ${publication.title}`} />
                </Box>

                {/* Extra links */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <ExtraLinks links={publication.extraLinks} />
                </Box>
            </Box>

            {/* Citation Dialog */}
            {publication.citation && (
                <CitationDialog
                    open={citationDialogOpen}
                    onClose={() => setCitationDialogOpen(false)}
                    citation={publication.citation}
                />
            )}
        </Card>
    );
};

export default function AllPublications() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedVenue, setSelectedVenue] = useState('all');

    // Extract unique years and venues
    const years = useMemo(() => {
        const yearSet = new Set();
        allPublicationsData.forEach(pub => {
            const year = pub.date.match(/\d{4}/)?.[0];
            if (year) yearSet.add(year);
        });
        return ['all', ...Array.from(yearSet).sort((a, b) => b - a)];
    }, []);

    const venues = useMemo(() => {
        const venueSet = new Set();
        allPublicationsData.forEach(pub => {
            // Extract main venue name (before year or special characters)
            const venueName = pub.venue.replace(/\s*\d{4}.*$/, '').replace(/\s*'\d{2}$/, '').trim();
            venueSet.add(venueName);
        });
        return ['all', ...Array.from(venueSet).sort()];
    }, []);

    // Filter publications based on search and filters
    const filteredPublications = useMemo(() => {
        return allPublicationsData.filter(pub => {
            // Search filter (by title)
            const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase());

            // Year filter
            const pubYear = pub.date.match(/\d{4}/)?.[0];
            const matchesYear = selectedYear === 'all' || pubYear === selectedYear;

            // Venue filter
            const pubVenue = pub.venue.replace(/\s*\d{4}.*$/, '').replace(/\s*'\d{2}$/, '').trim();
            const matchesVenue = selectedVenue === 'all' || pubVenue === selectedVenue;

            return matchesSearch && matchesYear && matchesVenue;
        });
    }, [searchQuery, selectedYear, selectedVenue]);

    const handleClearFilters = () => {
        setSearchQuery('');
        setSelectedYear('all');
        setSelectedVenue('all');
    };

    const activeFiltersCount = [
        searchQuery !== '',
        selectedYear !== 'all',
        selectedVenue !== 'all'
    ].filter(Boolean).length;

    return (
        <Box>
            {/* Modern Search and Filter Section */}
            <Box sx={{
                mb: 5,
                position: 'relative',
            }}>
                {/* Search Bar - Prominent and Modern */}
                <Box sx={{
                    mb: 3,
                    position: 'relative',
                }}>
                    <TextField
                        fullWidth
                        placeholder="Search publications by title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: '#1565C0', fontSize: '1.5rem' }} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                fontSize: '1.05rem',
                                padding: '4px 8px',
                                boxShadow: '0 4px 20px rgba(21, 101, 192, 0.08)',
                                border: '2px solid transparent',
                                transition: 'all 0.3s ease',
                                '& fieldset': {
                                    border: 'none',
                                },
                                '&:hover': {
                                    boxShadow: '0 6px 24px rgba(21, 101, 192, 0.12)',
                                    transform: 'translateY(-1px)',
                                },
                                '&.Mui-focused': {
                                    boxShadow: '0 6px 28px rgba(21, 101, 192, 0.16)',
                                    border: '2px solid rgba(21, 101, 192, 0.3)',
                                },
                            },
                            '& input': {
                                padding: '14px 8px',
                            }
                        }}
                    />
                </Box>

                {/* Filters - Clean Dropdown Style */}
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    {/* Left side - Filter controls */}
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                        alignItems: 'center',
                    }}>
                        {/* Year Filter */}
                        <FormControl size="small">
                            <Select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                displayEmpty
                                sx={{
                                    minWidth: 140,
                                    borderRadius: '12px',
                                    backgroundColor: 'white',
                                    boxShadow: '0 2px 8px rgba(45, 64, 89, 0.06)',
                                    fontWeight: 500,
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        boxShadow: '0 4px 12px rgba(45, 64, 89, 0.1)',
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: 'white',
                                    },
                                }}
                            >
                                {years.map(year => (
                                    <MenuItem key={year} value={year}>
                                        {year === 'all' ? 'All Years' : year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* Venue Filter */}
                        <FormControl size="small">
                            <Select
                                value={selectedVenue}
                                onChange={(e) => setSelectedVenue(e.target.value)}
                                displayEmpty
                                sx={{
                                    minWidth: 200,
                                    borderRadius: '12px',
                                    backgroundColor: 'white',
                                    boxShadow: '0 2px 8px rgba(45, 64, 89, 0.06)',
                                    fontWeight: 500,
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        boxShadow: '0 4px 12px rgba(45, 64, 89, 0.1)',
                                    },
                                    '&.Mui-focused': {
                                        backgroundColor: 'white',
                                    },
                                }}
                            >
                                {venues.map(venue => (
                                    <MenuItem key={venue} value={venue}>
                                        {venue === 'all' ? 'All Venues' : venue}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* Clear Filters Button */}
                        {activeFiltersCount > 0 && (
                            <Button
                                size="small"
                                onClick={handleClearFilters}
                                sx={{
                                    textTransform: 'none',
                                    borderRadius: '12px',
                                    px: 2,
                                    py: 0.75,
                                    color: '#5A7CA1',
                                    fontWeight: 500,
                                    backgroundColor: 'white',
                                    boxShadow: '0 2px 8px rgba(45, 64, 89, 0.06)',
                                    '&:hover': {
                                        color: '#C62828',
                                        backgroundColor: 'rgba(198, 40, 40, 0.05)',
                                        boxShadow: '0 4px 12px rgba(198, 40, 40, 0.1)',
                                    },
                                }}
                            >
                                Clear Filters
                            </Button>
                        )}
                    </Box>

                    {/* Right side - Results count */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        px: 2.5,
                        py: 1,
                        borderRadius: '12px',
                        backgroundColor: activeFiltersCount > 0 ? 'rgba(21, 101, 192, 0.08)' : 'rgba(90, 124, 161, 0.08)',
                        transition: 'all 0.3s ease',
                    }}>
                        <Typography sx={{
                            color: activeFiltersCount > 0 ? '#1565C0' : '#5A7CA1',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                        }}>
                            {filteredPublications.length} {filteredPublications.length === 1 ? 'result' : 'results'}
                        </Typography>
                        {activeFiltersCount > 0 && (
                            <Chip
                                label={activeFiltersCount}
                                size="small"
                                sx={{
                                    backgroundColor: '#1565C0',
                                    color: 'white',
                                    fontWeight: 700,
                                    height: '22px',
                                    fontSize: '0.75rem',
                                    minWidth: '22px',
                                    '& .MuiChip-label': {
                                        px: 0.75,
                                    }
                                }}
                            />
                        )}
                    </Box>
                </Box>
            </Box>

            {/* Publications List */}
            {filteredPublications.length > 0 ? (
                filteredPublications.map((publication) => (
                    <PublicationCard key={publication.id} publication={publication} />
                ))
            ) : (
                <Box sx={{
                    textAlign: 'center',
                    py: 8,
                    px: 3,
                }}>
                    <Typography variant="h6" sx={{ color: '#5A7CA1', mb: 1 }}>
                        No publications found
                    </Typography>
                    <Typography sx={{ color: '#5A7CA1', opacity: 0.8 }}>
                        Try adjusting your search or filters
                    </Typography>
                </Box>
            )}
        </Box>
    );
}
