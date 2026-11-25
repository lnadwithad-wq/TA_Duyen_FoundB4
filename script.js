
"use strict";

/* =====================================================
   ENGLISH CHALLENGES — VERSION 7

   01. Grammar
   02. Vocabulary
   03. Speaking
   04. Toolbox
   05. Question type guides
   06. Application & storage
   07. Navigation & UI
   08. Flashcards
   09. Speaking & recording
   10. Initialization
   ===================================================== */


/* =====================================================
   01. GRAMMAR
   ===================================================== */

const GRAMMAR_1 = [

    ["g2",
    "You've been studying for three hours. You're starting to feel tired.\n\nWhich sentence emphasizes a change?\n\nA. I'm tired.\nB. I'm getting tired.",
    "B. I'm getting tired.",
    "Be + adj. diễn tả trạng thái. Get + adj. diễn tả sự chuyển sang một trạng thái khác. Be getting + adj. diễn tả sự thay đổi trạng thái đang diễn ra.",
    "When do you usually get tired at school?"],

    ["g3",
    "I love learning about the human body.\n\nI'm interested ___ biology.",
    "I'm interested in biology.",
    "Một số tính từ thường đi kèm với giới từ nhất định. Nên ghi nhớ cả cụm tính từ và giới từ thay vì học riêng lẻ từng từ.",
    "What subjects are you interested in?"],

    ["g4",
    "I passed my English exam.\n\nI'm proud of ___ (pass) it.",
    "I'm proud of passing it.",
    "Khi một động từ làm bổ ngữ cho giới từ, ta dùng dạng V-ing.\nBe proud of + NP/V-ing.",
    "What are you proud of doing?"],

    ["g5",
    "The teacher talks for an hour without stopping.\n\nThe lesson is bored / boring.\nI feel bored / boring.",
    "The lesson is boring.\nI feel bored.",
    "Trong các cặp tính từ chỉ cảm xúc, dạng -ing thường miêu tả người hoặc vật gây ra cảm xúc; dạng -ed miêu tả người trải nghiệm cảm xúc đó.",
    "Which subject do you find boring?"],

    ["g6",
    "My new school felt strange at first, but it's becoming familiar.\n\nI'm getting used to ___ (study) here.",
    "I'm getting used to studying here.",
    "Get used to + NP/V-ing: diễn tả quá trình dần quen với điều gì hoặc việc gì. To trong cấu trúc này là giới từ.",
    "What are you getting used to at school?"],

    ["g7",
    "My classmate helped me when I was struggling.\n\nIt was kind ___ her to help me.",
    "It was kind of her to help me.",
    "It + be + adj. + of + người + to V: dùng để nhận xét một người thông qua hành động cụ thể của họ.",
    "Has a classmate ever done something kind for you?"],

    ["g8",
    "The teacher's explanation confused me.\n\nExpress the same idea, starting with: I was...",
    "I was confused by the teacher's explanation.",
    "Có thể diễn đạt cảm xúc bằng cách lấy nguyên nhân gây ra cảm xúc hoặc người trải nghiệm cảm xúc làm chủ ngữ.",
    "What kinds of things annoy you at school?"],

    ["g9",
    "Physics is difficult for me.\n\nExpress the same idea using find.",
    "I find physics difficult.",
    "Find + O + adj.: diễn tả cảm nhận hoặc đánh giá cá nhân về một đối tượng. Find ở đây không mang nghĩa tìm thấy.",
    "Which subject do you find challenging?"],

    ["g10",
    "It is difficult for me to concentrate.\n\nStart with: I find it...",
    "I find it difficult to concentrate.",
    "Find it + adj. + to V: diễn tả cảm nhận hoặc đánh giá về việc thực hiện một hành động.",
    "When do you find it difficult to concentrate?"],

    ["g11",
    "Group activities help students enjoy their lessons.\n\nComplete: Group activities make lessons more...",
    "Group activities make lessons more enjoyable.",
    "Make + O + adj.: diễn tả tác động làm cho một người hoặc vật có tính chất hoặc trạng thái nào đó.",
    "What makes lessons interesting?"],

    ["g12",
    "I like studying alone more than studying in groups.\n\nI prefer ___ (study) alone.",
    "I prefer studying alone.",
    "Prefer + NP/V-ing: diễn tả sự ưu tiên. Like + NP/V-ing + better cũng được dùng để so sánh sở thích.",
    "Do you prefer studying alone or with friends?"],

    ["g-used-state",
    "I've studied alone for years. It feels normal to me.\n\nI'm used to ___ (study) alone.",
    "I'm used to studying alone.",
    "Be used to + NP/V-ing: diễn tả trạng thái đã quen với điều gì hoặc việc gì.",
    "What are you used to doing at school?"],

    ["g-past-habit",
    "I played soccer every day as a child, but I don't anymore.\n\nI used to ___ (play) soccer.",
    "I used to play soccer.",
    "Used to + V: diễn tả thói quen hoặc trạng thái trong quá khứ không còn tiếp diễn ở hiện tại.",
    "What did you use to do after school?"],

    ["g-opportunity",
    "I get to see my friends at school.\n\nIs this an opportunity or an obligation?",
    "An opportunity.",
    "Get to + V: diễn tả việc được làm gì hoặc có cơ hội làm gì.",
    "What do you get to do at school?"],

    ["g-obligation",
    "I have to wear a uniform.\n\nIs wearing a uniform optional?",
    "No.",
    "Have to + V: diễn tả sự cần thiết hoặc nghĩa vụ phải thực hiện một việc.",
    "What do you have to do at school?"],

    ["g-lean",
    "Both options sound good, but studying alone seems better.\n\nI lean toward ___ (study) alone.",
    "I lean toward studying alone.",
    "Lean toward(s) + NP/V-ing: diễn tả sự thiên về một lựa chọn, thường khi đang cân nhắc các phương án.",
    "Which study method do you lean toward?"],

    ["g-tendency",
    "I tend to get distracted in class.\n\nDoes this happen every single time?",
    "No.",
    "Tend to + V: diễn tả xu hướng hoặc hành vi thường xảy ra, không nhất thiết xảy ra mọi lúc.",
    "What do you tend to do during breaks?"]

].map(([id, front, answer, rule, application]) => ({
    id, front, answer, rule, application
}));


/* =====================================================
   02. VOCABULARY

   One mixed bank.
   Internal deck IDs preserve previous progress.
   No Recall deck. No category tabs.
   ===================================================== */

const DECK_B_1 = [

    ["b1","I'm interested ___ science.","in",
    "I'm interested in science.",
    "Mình hứng thú với khoa học."],

    ["b2","I worked hard and finally passed. I'm proud ___ myself.","of",
    "I'm proud of myself.",
    "Mình tự hào về bản thân."],

    ["b3","I've done this exercise five times. I'm fed up ___ it.","with",
    "I'm fed up with it.",
    "Mình chán ngấy bài tập này."],

    ["b4","She watches movies every weekend. She's keen ___ movies.","on",
    "She's keen on movies.",
    "Cô ấy rất thích phim ảnh."],

    ["b5","He always forgets names. He's hopeless ___ remembering names.","at",
    "He's hopeless at remembering names.",
    "Cậu ấy rất kém trong việc nhớ tên người khác."],

    ["b6","I'm the group leader. I'm responsible ___ organizing meetings.","for",
    "I'm responsible for organizing meetings.",
    "Mình chịu trách nhiệm tổ chức các buổi họp."],

    ["b7","I know I make grammar mistakes. I'm aware ___ my weaknesses.","of",
    "I'm aware of my weaknesses.",
    "Mình nhận thức được điểm yếu của bản thân."],

    ["b8","These answers are almost the same. Mine is similar ___ yours.","to",
    "Mine is similar to yours.",
    "Câu trả lời của mình tương tự câu trả lời của bạn."],

    ["b9","I'm tired of ___ (hear) the same song.","hearing",
    "I'm tired of hearing the same song.",
    "Mình chán nghe mãi bài hát đó."],

    ["b10","She's capable of ___ (work) independently.","working",
    "She's capable of working independently.",
    "Cô ấy có khả năng làm việc độc lập."],

    ["b12","I'm getting used to ___ (speak) English.","speaking",
    "I'm getting used to speaking English.",
    "Mình đang dần quen với việc nói tiếng Anh."],

    ["b16","She didn't expect the exam to be so easy. She was surprised ___ how easy it was.","by",
    "She was surprised by how easy it was.",
    "Cô ấy bất ngờ vì bài thi dễ đến vậy."],

    ["b14","It was kind ___ her to help me.","of",
    "It was kind of her to help me.",
    "Bạn ấy thật tốt bụng khi giúp mình."]

].map(([id, front, answer, example, translation]) => ({
    id, front, answer, example, translation
}));


const DECK_C_1 = [

    ["c-emb",
    "I called my teacher by the wrong name in front of everyone.\n\nembarrassed or ashamed?",
    "embarrassed",
    "Cảm thấy ngượng ngùng vì một tình huống khó xử."],

    ["c-shame",
    "I cheated on an exam and feel bad about what I did.\n\nembarrassed or ashamed?",
    "ashamed",
    "Cảm thấy xấu hổ về hành vi mà mình cho là sai trái."],

    ["c-fed",
    "I've done the same exercise for an hour. I can't stand it anymore.\n\ninterested in or fed up with?",
    "fed up with",
    "Chán ngấy hoặc bực bội vì một tình trạng kéo dài hay lặp đi lặp lại."],

    ["c-result",
    "I expected a high score, but I failed.\n\ndisappointed or pleased?",
    "disappointed",
    "Thất vọng vì kết quả không đáp ứng kỳ vọng."],

    ["c-confused",
    "The instructions were hard to understand. I didn't know what to do.\n\nI felt confused or confusing?",
    "confused",
    "Confused miêu tả cảm giác bối rối. Confusing miêu tả điều gây ra sự bối rối."],

    ["c-capable",
    "She can finish the project alone, but she isn't particularly skilled.\n\ncapable of or good at?",
    "capable of",
    "Có khả năng thực hiện một việc, không nhất thiết làm việc đó giỏi."],

    ["c-habit",
    "My new school feels less strange every day.\n\nI'm getting used to it or I used to study there?",
    "I'm getting used to it.",
    "Đang dần quen với một điều gì đó."],

    ["c-crowd",
    "The classroom was so full of students that it was hard to move.\n\ncrowded or suspicious?",
    "crowded",
    "Đông đúc, chật kín người."],

    ["c-annoy",
    "Someone keeps tapping a pen while I'm studying.\n\nannoyed or terrified?",
    "annoyed",
    "Cảm thấy bực mình, khó chịu."],

    ["c-jealous",
    "My friend has a new phone. I wish I had one like hers.\n\nproud or jealous?",
    "jealous",
    "Ghen tị vì người khác có điều mình mong muốn."]

].map(([id, front, answer, rule]) => ({
    id, front, answer, rule
}));


const DECK_D_1 = [

    ["What have you achieved recently? How do you feel about it?",
    "be proud of + NP/V-ing",
    "I'm proud of passing my math test.",
    "Mình tự hào vì đã vượt qua bài kiểm tra toán."],

    ["What is something you wish you could stop doing at school?",
    "be tired of / be fed up with + NP/V-ing",
    "I'm tired of doing the same exercises.",
    "Mình chán việc cứ phải làm những bài tập giống nhau."],

    ["What makes you feel awkward in front of others?",
    "get embarrassed",
    "I get embarrassed when I make mistakes.",
    "Mình cảm thấy ngượng khi mắc lỗi."],

    ["What felt strange at first but is becoming familiar?",
    "get used to + NP/V-ing",
    "I'm getting used to speaking English in class.",
    "Mình đang dần quen với việc nói tiếng Anh trong lớp."],

    ["What subjects would you like to learn more about?",
    "be interested in + NP/V-ing",
    "I'm interested in learning about animals.",
    "Mình hứng thú với việc tìm hiểu về động vật."],

    ["What is something you find extremely difficult to do?",
    "be hopeless at + NP/V-ing",
    "I'm hopeless at remembering names.",
    "Mình rất kém trong việc nhớ tên người khác."],

    ["What can you do without anyone's help?",
    "be capable of + NP/V-ing",
    "I'm capable of finishing my homework alone.",
    "Mình có thể tự làm xong bài tập về nhà."]

].map(([front, answer, example, translation], i) => ({
    id: `d${i + 1}`,
    front, answer, example, translation,
    rule: "Thử trả lời lại bằng cụm từ gợi ý."
}));


/* =====================================================
   03. SPEAKING CONTENT

   Each vocabulary line:
   English | IPA | Form | Vietnamese

   Preserve the existing question and word IDs.
   ===================================================== */

const TYPE_META = {
    opinion: {
        title: "Nêu quan điểm và đánh giá",
        color: "rose", icon: "message"
    },
    likes: {
        title: "Diễn đạt sự yêu thích",
        color: "rose", icon: "heart"
    },
    past: {
        title: "Kể về quá khứ",
        color: "gold", icon: "history"
    },
    preference: {
        title: "Bày tỏ sự ưu tiên",
        color: "blue", icon: "compare"
    },
    habits: {
        title: "Mô tả thói quen và liệt kê",
        color: "green", icon: "list"
    }
};


const SPEAK_DATA = [

    ["school-enjoy", "likes",
    "Do you enjoy studying at school? Why or why not?",

    `spend time with my friends|spɛnd taɪm wɪð maɪ frɛndz|VP|dành thời gian cho bạn bè
learn new things|lɝn nu θɪŋz|VP|học hỏi những điều mới
take part in group activities|teɪk pɑrt ɪn ɡrup ækˈtɪvətiz|VP|tham gia các hoạt động nhóm
get bored|ɡɛt bɔrd|VP|cảm thấy chán
have too much homework|hæv tu mʌtʃ ˈhoʊmwɝk|VP|có quá nhiều bài tập về nhà
have fun with my classmates|hæv fʌn wɪð maɪ ˈklæsˌmeɪts|VP|vui chơi cùng các bạn trong lớp`,

    [
        ["Bạn có thích đi học không?",
        "Absolutely! / Yeah, I do. / Not really."],

        ["Bạn thích hoặc không thích điều gì?",
        "I like it mainly because I get to ... / I don't really like it because I ..."],

        ["Còn lý do hoặc mặt khác nào không?",
        "Plus, ... / On top of that, ... / But sometimes I ..."]
    ]],


    ["school-past", "past",
    "What was your favorite subject when you were at primary school?",

    `draw and paint|drɔ ən peɪnt|VP|vẽ tranh
do simple experiments|du ˈsɪmpəl ɪkˈspɛrəmənts|VP|làm thí nghiệm đơn giản
learn about animals|lɝn əˈbaʊt ˈænəməlz|VP|tìm hiểu về động vật
play games in class|pleɪ ɡeɪmz ɪn klæs|VP|chơi trò chơi trong lớp
good at|ɡʊd æt|AdjP + NP/V-ing|giỏi về
fun|fʌn|adj.|vui, thú vị`,

    [
        ["Hồi tiểu học bạn thích môn gì nhất?",
        "Back then, my favorite subject was ..."],

        ["Bạn thường được làm gì?",
        "We often got to ... / I used to ..."],

        ["Vì sao bạn thích môn đó?",
        "I liked it because it was ... / I was good at ..."]
    ]],


    ["school-difficulty", "opinion",
    "Which school subject do you find the most difficult? Why?",

    `challenging|ˈtʃælɪndʒɪŋ|adj.|khó, đòi hỏi nhiều nỗ lực
understand the theory|ˌʌndɚˈstænd ðə ˈθiəri|VP|hiểu lý thuyết
remember formulas|rɪˈmɛmbɚ ˈfɔrmjələz|VP|nhớ công thức
solve math problems|sɑlv mæθ ˈprɑbləmz|VP|giải bài toán
memorize facts and dates|ˈmɛməˌraɪz fækts ən deɪts|VP|học thuộc các sự kiện và mốc thời gian
keep up with the lesson|kip ʌp wɪð ðə ˈlɛsən|VP|theo kịp bài học`,

    [
        ["Bạn thấy môn nào khó nhất?",
        "I find ... the most challenging."],

        ["Bạn gặp khó khăn cụ thể khi làm gì?",
        "... mainly because I find it hard to ..."],

        ["Bạn còn phải làm gì nữa?",
        "On top of that, I have to ..."]
    ]],


    ["school-preference", "preference",
    "Do you prefer studying alone or studying with your classmates?",

    `studying on my own|ˈstʌdiɪŋ ɑn maɪ oʊn|V-ing|học một mình
studying with my classmates|ˈstʌdiɪŋ wɪð maɪ ˈklæsˌmeɪts|V-ing|học cùng các bạn trong lớp
concentrate better|ˈkɑnsənˌtreɪt ˈbɛtɚ|VP|tập trung tốt hơn
work at my own pace|wɝk æt maɪ oʊn peɪs|VP|học theo tốc độ của bản thân
share ideas|ʃɛr aɪˈdiəz|VP|chia sẻ ý tưởng
help each other|hɛlp itʃ ˈʌðɚ|VP|giúp đỡ lẫn nhau`,

    [
        ["Bạn thích cách học nào?",
        "I prefer ... / I like ... better. / I lean toward ..."],

        ["Lựa chọn đó giúp bạn học tốt hơn thế nào?",
        "... mainly because I can ... / we can ..."],

        ["Còn lợi ích nào khác?",
        "On top of that, I can ... / we can ..."]
    ]],


    ["school-teachers", "opinion",
    "What qualities do you think a good teacher should have?",

    `patient with students|ˈpeɪʃənt wɪð ˈstudənts|AdjP|kiên nhẫn với học sinh
easy to talk to|ˈizi tə tɔk tə|AdjP|dễ gần, dễ trao đổi
good at explaining things|ɡʊd æt ɪkˈspleɪnɪŋ θɪŋz|AdjP|giỏi giải thích
make lessons interesting|meɪk ˈlɛsənz ˈɪntrəstɪŋ|VP|làm bài học trở nên thú vị
encourage students to ask questions|ɪnˈkɝɪdʒ ˈstudənts tə æsk ˈkwɛstʃənz|VP|khuyến khích học sinh đặt câu hỏi
help students understand difficult ideas|hɛlp ˈstudənts ˌʌndɚˈstænd ˈdɪfɪkəlt aɪˈdiəz|VP|giúp học sinh hiểu những ý tưởng khó`,

    [
        ["Giáo viên nên có phẩm chất gì?",
        "I'd say a good teacher should be ..."],

        ["Vì sao phẩm chất đó quan trọng?",
        "This helps students feel comfortable in class."],

        ["Giáo viên còn nên làm được gì?",
        "On top of that, they should be able to ..."]
    ]],


    ["school-breaks", "habits",
    "What do you usually do during breaks at school?",

    `chat with my friends|tʃæt wɪð maɪ frɛndz|VP|trò chuyện với bạn bè
grab a snack|ɡræb ə snæk|VP|tranh thủ ăn nhẹ
get some fresh air|ɡɛt səm frɛʃ ɛr|VP|hít thở không khí trong lành
take a short walk|teɪk ə ʃɔrt wɔk|VP|đi dạo một lúc
relax before the next class|rɪˈlæks bɪˈfɔr ðə nɛkst klæs|VP|thư giãn trước tiết học tiếp theo
review my notes|rɪˈvju maɪ noʊts|VP|xem lại ghi chép`,

    [
        ["Bạn thường làm gì vào giờ ra chơi?",
        "Most of the time, I ..."],

        ["Việc đó giúp ích gì cho bạn?",
        "It helps me ..."],

        ["Thỉnh thoảng bạn còn làm gì khác?",
        "Sometimes, I also ..."]
    ]],


    ["school-rules", "opinion",
    "What school rules do you think are important for students to follow?",

    `be on time for class|bi ɑn taɪm fər klæs|VP|đến lớp đúng giờ
pay attention in class|peɪ əˈtɛnʃən ɪn klæs|VP|chú ý trong giờ học
treat others with respect|trit ˈʌðɚz wɪð rɪˈspɛkt|VP|đối xử tôn trọng với người khác
keep the classroom clean|kip ðə ˈklæsˌrum klin|VP|giữ lớp học sạch sẽ
cheat on tests|tʃit ɑn tɛsts|VP|gian lận trong các bài kiểm tra
disturb other students|dɪˈstɝb ˈʌðɚ ˈstudənts|VP|làm phiền các học sinh khác`,

    [
        ["Học sinh nên làm gì?",
        "I think students should ..."],

        ["Tại sao quy định đó quan trọng?",
        "... mainly because it helps everyone learn better."],

        ["Học sinh không nên làm gì?",
        "On top of that, students shouldn't ..."]
    ]],


    ["school-things", "habits",
    "What things do you usually bring to school every day?",

    `textbooks|ˈtɛkstˌbʊks|N (plural)|sách giáo khoa
a notebook|ə ˈnoʊtˌbʊk|NP|một quyển vở
extra pens|ˈɛkstrə pɛnz|NP|bút dự phòng
a water bottle|ə ˈwɔtɚ ˈbɑtəl|NP|một bình nước
a calculator|ə ˈkælkjəˌleɪtɚ|NP|máy tính cầm tay
a packed lunch|ə pækt lʌntʃ|NP|bữa trưa chuẩn bị sẵn để mang theo`,

    [
        ["Bạn thường mang những đồ gì?",
        "I usually bring ..."],

        ["Bạn còn mang gì khác?",
        "I also carry ... / Apart from ..., I also carry ..."],

        ["Bạn mang món đó để làm gì?",
        "I need it to ... / I bring it in case ..."]
    ]],


    ["school-phones", "opinion",
    "Do you think students should be allowed to use their mobile phones at school? Why or why not?",

    `let students use phones|lɛt ˈstudənts juz foʊnz|VP|cho phép học sinh sử dụng điện thoại
look up new words|lʊk ʌp nu wɝdz|VP|tra từ mới
search for information|sɝtʃ fər ˌɪnfɚˈmeɪʃən|VP|tìm kiếm thông tin
contact their parents|ˈkɑnˌtækt ðɛr ˈpɛrənts|VP|liên lạc với bố mẹ
get distracted easily|ɡɛt dɪˈstræktɪd ˈizəli|VP|dễ bị phân tâm
play games during class|pleɪ ɡeɪmz ˈdʊrɪŋ klæs|VP|chơi trò chơi trong giờ học`,

    [
        ["Bạn đồng ý hay phản đối?",
        "I think schools should / shouldn't ..."],

        ["Điện thoại giúp ích gì hoặc gây ra vấn đề gì?",
        "... mainly because students can ..."],

        ["Còn lý do hoặc mặt khác nào không?",
        "Plus, ... / On top of that, ... / That said, ..."]
    ]],


    ["school-english", "opinion",
    "How important do you think learning English is for students nowadays?",

    `essential|ɪˈsɛnʃəl|adj.|thiết yếu, rất cần thiết
study abroad|ˈstʌdi əˈbrɔd|VP|du học
access information online|ˈæksɛs ˌɪnfɚˈmeɪʃən ˌɑnˈlaɪn|VP|tiếp cận thông tin trên mạng
communicate with people from other countries|kəˈmjunəˌkeɪt wɪð ˈpipəl frəm ˈʌðɚ ˈkʌntriz|VP|giao tiếp với người đến từ các quốc gia khác
find a good job|faɪnd ə ɡʊd dʒɑb|VP|tìm được công việc tốt
have better career prospects|hæv ˈbɛtɚ kəˈrɪr ˈprɑspɛkts|VP|có triển vọng nghề nghiệp tốt hơn`,

    [
        ["Theo bạn, tiếng Anh quan trọng đến mức nào?",
        "I'd say English is ..."],

        ["Biết tiếng Anh giúp học sinh làm gì?",
        "It allows students to ..."],

        ["Còn lợi ích gì trong tương lai?",
        "On top of that, it can help students ..."]
    ]]

];


const SPEAKING_1 = SPEAK_DATA.map(
    ([id, type, question, raw, hints]) => ({
        id, type, question, hints,
        words: raw.trim().split("\n").map((line, i) => {
            const [chunk, ipa, form, meaning] = line.split("|");
            return { id: `w${i + 1}`, chunk, ipa, form, meaning };
        })
    })
);


/* =====================================================
   04. GLOBAL TOOLBOX

   Shared across every challenge.

   Card fields:
   ID, Pattern, Example, Translation,
   Easy pronunciation, Usage note.
   ===================================================== */

const T = (
    id, pattern, example, translation,
    reading = "", note = ""
) => ({
    id, pattern, example, translation, reading, note
});

const S = (title, tone, ...items) => ({
    title, tone, items
});

const G = (id, title, icon, color, ...sections) => ({
    id, title, icon, color, sections
});


const TOOLBOX = [

    /* YES / NO */

    G("yes-no", "Trả lời Yes / No", "message", "green",

        S("Khẳng định mạnh", "scale-strong-positive",

            T("absolutely",
            "Absolutely!",
            "Absolutely! I love going to school.",
            "Chắc chắn rồi! Mình rất thích đi học.",
            "ab-suh-LOOT-lee",
            "Dùng để khẳng định mạnh mẽ."),

            T("definitely",
            "Definitely!",
            "Definitely! English is really important.",
            "Chắc chắn rồi! Tiếng Anh rất quan trọng.",
            "DEF-uh-nit-lee"),

            T("one-hundred",
            "100%!",
            "100%! I want to study abroad.",
            "Chắc chắn rồi! Mình muốn đi du học.",
            "WUN HUN-drud per-SENT",
            "Cách nói thân mật, thể hiện sự đồng tình mạnh mẽ.")
        ),

        S("Khẳng định điều hiển nhiên", "scale-positive",

            T("of-course",
            "Of course!",
            "Of course! Everyone needs a break sometimes.",
            "Tất nhiên rồi! Ai cũng cần nghỉ ngơi đôi lúc.",
            "uhv KORS",
            "Có thể hàm ý điều đó là hiển nhiên. Chú ý giọng điệu để tránh khiến người nghe cảm thấy câu hỏi của họ là thừa.")
        ),

        S("Khẳng định thông thường", "scale-neutral",

            T("yeah",
            "Yeah, I do.",
            "Yeah, I do. I enjoy studying English.",
            "Có chứ. Mình thích học tiếng Anh.",
            "YEH, eye DOO",
            "Thay trợ động từ theo câu hỏi: Yeah, I am. / Yeah, I can. / Yeah, I did.")
        ),

        S("Phủ định nhẹ", "scale-negative",

            T("not-really",
            "Not really.",
            "Not really. I don't enjoy studying math that much.",
            "Không hẳn. Mình không thích học toán lắm.",
            "naht REE-lee",
            "Phủ định nhẹ nhàng, ít trực diện hơn No.")
        ),

        S("Phủ định mạnh", "scale-strong-negative",

            T("not-at-all",
            "Not at all!",
            "Not at all. I don't find it interesting.",
            "Hoàn toàn không. Mình không thấy việc đó thú vị.",
            "naht at AWL",
            "Trong câu trả lời phủ định, cụm này nhấn mạnh mức độ phủ định.")
        )
    ),


    /* LIKING AND DISLIKING */

    G("likes", "Yêu thích & không yêu thích", "heart", "rose",

        S("Rất thích / Đam mê", "scale-strong-positive",

            T("huge-fan",
            "I'm a huge fan of + NP / V-ing",
            "I'm a huge fan of collecting sneakers.",
            "Mình rất thích sưu tầm giày sneaker.",
            "EYE-muh HYOOJ FAN-uhv",
            "Danh từ đếm được số ít cần từ hạn định phù hợp. Ví dụ: I'm a huge fan of this show."),

            T("big-on",
            "I'm really big on + NP / V-ing",
            "I'm really big on working out.",
            "Mình rất thích tập thể dục.",
            "EYE-m REE-lee BIG-ahn",
            "Cách nói thân mật, thể hiện sự yêu thích hoặc coi trọng điều gì."),

            T("obsessed",
            "I'm absolutely obsessed with + NP / V-ing",
            "I'm absolutely obsessed with reading fantasy novels.",
            "Mình mê đọc tiểu thuyết kỳ ảo vô cùng.",
            "EYE-m ab-suh-LOOT-lee ub-SEST with",
            "Diễn tả mức độ rất mạnh, thường mang tính cường điệu trong hội thoại.")
        ),

        S("Khá thích / Có hứng thú", "scale-positive",

            T("pretty-into",
            "I'm pretty into + NP / V-ing",
            "I'm pretty into baking.",
            "Mình khá thích làm bánh.",
            "EYE-m PRIH-dee IN-too",
            "Pretty ở đây có nghĩa là khá."),

            T("kind-of-enjoy",
            "I kind of enjoy + NP / V-ing",
            "I kind of enjoy playing board games.",
            "Mình cũng hơi thích chơi board game.",
            "EYE KINE-duh in-JOY",
            "Kind of làm giảm mức độ khẳng định. Kinda là cách viết thân mật mô phỏng cách phát âm."),

            T("quite-fond",
            "I'm quite fond of + NP / V-ing",
            "I'm quite fond of drawing.",
            "Mình khá thích vẽ.",
            "EYE-m kwyte FOND-uhv",
            "Fond of thể hiện sự yêu thích hoặc có cảm tình. Không nhất thiết chỉ diễn tả mức độ yêu thích vừa phải.")
        ),

        S("Không thích lắm", "scale-negative",

            T("not-into",
            "I'm not really into + NP / V-ing",
            "I'm not really into playing sports.",
            "Mình không thực sự thích chơi thể thao.",
            "EYE-m naht REE-lee IN-too"),

            T("not-my-thing",
            "NP / V-ing + isn't really my thing",
            "Painting isn't really my thing.",
            "Vẽ tranh không hẳn là sở thích của mình.",
            "IZ-uhnt REE-lee my THING",
            "Chủ ngữ số nhiều dùng aren't. Ví dụ: Team sports aren't really my thing."),

            T("not-fan",
            "I'm not really a fan of + NP / V-ing",
            "I'm not really a fan of going to crowded places.",
            "Mình không thích đến những nơi đông người lắm.",
            "EYE-m naht REE-lee yuh FAN-uhv")
        ),

        S("Rất không thích / Không chịu nổi", "scale-strong-negative",

            T("cant-stand",
            "I can't stand + NP / V-ing",
            "I can't stand waiting in long lines.",
            "Mình không chịu nổi việc phải xếp hàng dài.",
            "EYE KANT STAND",
            "Cách nói mạnh. Âm t cuối của can't có thể không được bật hơi rõ trong tiếng Anh Mỹ."),

            T("sick-tired",
            "I'm sick and tired of + NP / V-ing",
            "I'm sick and tired of doing the same exercises.",
            "Mình chán ngấy việc cứ phải làm những bài tập giống nhau.",
            "EYE-m SIK-un TY-erd-uhv",
            "Thường diễn tả sự chán ngấy hoặc bực bội vì một tình trạng kéo dài hay lặp lại."),

            T("drive-crazy",
            "NP / V-ing + drives me absolutely crazy",
            "Waiting in long lines drives me absolutely crazy.",
            "Việc phải xếp hàng dài khiến mình cực kỳ khó chịu.",
            "DRYVZ mee ab-suh-LOOT-lee KRAY-zee",
            "Ở đây cụm từ thể hiện sự khó chịu mạnh. Chủ ngữ số nhiều dùng drive, không thêm s.")
        )
    ),


    /* PREFERENCES */

    G("preference", "Bày tỏ sự ưu tiên", "compare", "blue",

        S("Nêu lựa chọn", "scale-neutral",

            T("prefer",
            "I prefer + NP / V-ing",
            "I prefer studying alone.",
            "Mình thích học một mình hơn."),

            T("like-better",
            "I like + NP / V-ing + better",
            "I like studying with friends better.",
            "Mình thích học cùng bạn bè hơn."),

            T("lean-towards",
            "I lean toward(s) + NP / V-ing",
            "I lean toward studying on my own.",
            "Mình thiên về việc học một mình.",
            "",
            "Dùng khi có xu hướng chọn một phương án, nhất là khi đang cân nhắc. Toward phổ biến hơn trong tiếng Anh Mỹ; towards cũng đúng.")
        )
    ),


    /* OPINIONS AND EVALUATIONS */

    G("opinions", "Quan điểm & đánh giá", "message", "rose",

        S("Nêu nhận định", "scale-neutral",

            T("say",
            "I'd say + mệnh đề",
            "I'd say English is really important.",
            "Theo mình, tiếng Anh rất quan trọng."),

            T("think",
            "I think + mệnh đề",
            "I think school is a great place to make friends.",
            "Mình nghĩ trường học là nơi rất tốt để kết bạn."),

            T("should",
            "I think + S + should / shouldn't + V",
            "I think students should be on time for class.",
            "Mình nghĩ học sinh nên đến lớp đúng giờ.")
        ),

        S("Đánh giá một người hoặc sự vật", "scale-positive",

            T("find-object",
            "I find + O + adj.",
            "I find physics challenging.",
            "Mình thấy môn vật lý khá khó.",
            "",
            "Find ở đây diễn tả cảm nhận hoặc đánh giá, không mang nghĩa tìm thấy."),

            T("think-object",
            "I think + S + be + adj.",
            "I think physics is challenging.",
            "Mình nghĩ môn vật lý khá khó."),

            T("for-me",
            "S + be + adj. + for me",
            "Physics is challenging for me.",
            "Môn vật lý khá khó đối với mình.",
            "",
            "For me phù hợp khi tính từ diễn tả sự đánh giá hoặc trải nghiệm cá nhân. Không phải tính từ nào cũng kết hợp tự nhiên với for me."),

            T("quite",
            "It's quite + adj.",
            "It's quite interesting.",
            "Việc đó khá thú vị.")
        ),

        S("Đánh giá việc thực hiện một hành động", "scale-positive",

            T("find-it",
            "I find it + adj. + to V",
            "I find it difficult to concentrate.",
            "Mình thấy khó tập trung.",
            "",
            "It đứng trước tính từ, còn cụm to V diễn tả hành động được đánh giá."),

            T("it-for-me",
            "It's + adj. + for me + to V",
            "It's difficult for me to concentrate.",
            "Việc tập trung khá khó đối với mình.")
        )
    ),


    /* FEELINGS */

    G("feelings", "Cảm xúc & trạng thái", "smile", "gold",

        S("Miêu tả cảm xúc", "scale-neutral",

            T("feel",
            "I feel + adj.",
            "I feel nervous before exams.",
            "Mình cảm thấy lo lắng trước các kỳ thi.",
            "",
            "Diễn tả cảm giác hoặc trạng thái mà người nói trải nghiệm."),

            T("get-adjective",
            "I get + adj.",
            "I get bored during long lessons.",
            "Mình cảm thấy chán trong những tiết học kéo dài.",
            "",
            "Get nhấn mạnh sự chuyển sang một trạng thái khác. Ví dụ: get tired, get angry, get distracted.")
        )
    ),


    /* ABILITY, OPPORTUNITY, OBLIGATION */

    G("ability", "Khả năng, cơ hội & nghĩa vụ", "bulb", "green",

        S("Khả năng", "scale-positive",

            T("can",
            "I can + V",
            "I can concentrate better when I study alone.",
            "Mình có thể tập trung tốt hơn khi học một mình.")
        ),

        S("Cơ hội", "scale-positive",

            T("get-to",
            "I get to + V",
            "I get to spend time with my friends.",
            "Mình được dành thời gian cho bạn bè.",
            "",
            "Diễn tả việc được làm gì hoặc có cơ hội làm gì. Dạng quá khứ: got to.")
        ),

        S("Nghĩa vụ", "scale-negative",

            T("have-to",
            "I have to + V",
            "I have to memorize a lot of formulas.",
            "Mình phải học thuộc rất nhiều công thức.",
            "",
            "Diễn tả việc cần hoặc bắt buộc phải làm. Dạng quá khứ: had to.")
        )
    ),


    /* BENEFITS AND EFFECTS */

    G("benefits", "Lợi ích & tác động", "effect", "blue",

        S("Giúp ai làm được việc gì", "scale-positive",

            T("help",
            "It helps me (to) + V",
            "Studying alone helps me concentrate better.",
            "Việc học một mình giúp mình tập trung tốt hơn.",
            "",
            "Sau help + O, có thể dùng V hoặc to V."),

            T("allow",
            "It allows me to + V",
            "Studying alone allows me to work at my own pace.",
            "Việc học một mình giúp mình có thể học theo tốc độ của bản thân.",
            "",
            "Allow có thể diễn tả sự cho phép hoặc việc tạo điều kiện thuận lợi."),

            T("enable",
            "It enables me to + V",
            "Learning English enables me to access more information online.",
            "Việc học tiếng Anh giúp mình tiếp cận nhiều thông tin hơn trên mạng.",
            "",
            "Enable nhấn mạnh việc làm cho một hành động trở nên khả thi. Trang trọng hơn help.")
        ),

        S("Tác động đến tính chất hoặc cảm xúc", "scale-positive",

            T("make",
            "It makes + O + adj.",
            "Group activities make lessons more interesting.",
            "Các hoạt động nhóm khiến tiết học trở nên thú vị hơn."),

            T("keep",
            "It keeps + O + adj.",
            "Studying with friends keeps me motivated.",
            "Việc học cùng bạn bè giúp mình duy trì động lực.")
        )
    ),


    /* CONNECTING AND DEVELOPING IDEAS */

    G("connect", "Kết nối & phát triển ý", "link", "gold",

        S("Giải thích lý do", "scale-neutral",

            T("because",
            "because + mệnh đề",
            "I enjoy art because I get to draw.",
            "Mình thích mỹ thuật vì được vẽ."),

            T("since",
            "since + mệnh đề",
            "I prefer studying alone since I can concentrate better.",
            "Mình thích học một mình hơn vì có thể tập trung tốt hơn.",
            "",
            "Since ở đây mang nghĩa vì. Trong ngữ cảnh khác, since còn có thể diễn tả mốc thời gian."),

            T("mainly-because",
            "mainly because + mệnh đề",
            "I find math challenging, mainly because I have to memorize a lot of formulas.",
            "Mình thấy toán khá khó, chủ yếu vì phải học thuộc rất nhiều công thức.")
        ),

        S("Thêm lý do hoặc thông tin", "scale-positive",

            T("plus",
            "Plus, ...",
            "Plus, I get to spend time with my friends.",
            "Hơn nữa, mình còn được dành thời gian cho bạn bè.",
            "PLUS",
            "Tự nhiên trong hội thoại, thường dùng để bổ sung một lợi ích hoặc lý do."),

            T("on-top",
            "On top of that, ...",
            "On top of that, I can work at my own pace.",
            "Ngoài ra, mình còn có thể học theo tốc độ của bản thân.",
            "ahn TOP-uhv THAT"),

            T("as-well",
            "As well as that, ...",
            "As well as that, I get to learn new things.",
            "Bên cạnh đó, mình còn được học hỏi những điều mới.",
            "az WELL-az THAT",
            "Đúng và tự nhiên, nhưng thường gặp hơn trong tiếng Anh Anh."),

            T("also",
            "I also + V",
            "I also carry a water bottle.",
            "Mình cũng mang theo một bình nước.")
        ),

        S("Đối lập hoặc thừa nhận mặt khác", "scale-negative",

            T("but",
            "but + mệnh đề",
            "I enjoy math, but I find it challenging.",
            "Mình thích toán, nhưng thấy môn này khá khó."),

            T("that-said",
            "That said, ...",
            "Phones can help students find information. That said, they can also be distracting.",
            "Điện thoại có thể giúp học sinh tìm thông tin. Dù vậy, chúng cũng có thể gây mất tập trung.",
            "THAT SED",
            "Dùng để thừa nhận một điểm khác hoặc trái chiều sau khi vừa nêu một nhận định.")
        ),

        S("Ví dụ, tình huống & kết quả", "scale-neutral",

            T("for-example",
            "For example, ...",
            "For example, I often forget important dates.",
            "Ví dụ, mình thường quên những mốc thời gian quan trọng."),

            T("especially",
            "especially when + mệnh đề",
            "I get distracted, especially when people are talking.",
            "Mình bị phân tâm, nhất là khi mọi người đang nói chuyện."),

            T("so",
            "so + mệnh đề",
            "It's noisy in the classroom, so I find it hard to concentrate.",
            "Trong lớp rất ồn nên mình thấy khó tập trung.")
        )
    ),


    /* HABITS AND PAST */

    G("habits-past", "Thói quen & quá khứ", "history", "peach",

        S("Thói quen hiện tại", "scale-neutral",

            T("usually",
            "I usually + V",
            "I usually chat with my friends during breaks.",
            "Mình thường trò chuyện với bạn bè vào giờ ra chơi."),

            T("tend",
            "I tend to + V",
            "I tend to get distracted when it's noisy.",
            "Mình thường dễ bị phân tâm khi có tiếng ồn.",
            "",
            "Diễn tả xu hướng hoặc hành vi thường xảy ra, không nhất thiết lúc nào cũng vậy.")
        ),

        S("Nói về quá khứ", "scale-neutral",

            T("back-then",
            "Back then, + mệnh đề ở quá khứ",
            "Back then, my favorite subject was art.",
            "Hồi đó, môn học yêu thích của mình là mỹ thuật."),

            T("used-to",
            "I used to + V",
            "I used to draw every day.",
            "Trước đây mình thường vẽ mỗi ngày.",
            "EYE YOOS-tuh",
            "Diễn tả thói quen hoặc trạng thái trong quá khứ không còn tiếp diễn ở hiện tại.")
        ),

        S("Bổ sung đồ vật hoặc mục đích", "scale-positive",

            T("apart-from",
            "Apart from + NP, I also ...",
            "Apart from textbooks, I also carry a calculator.",
            "Ngoài sách giáo khoa, mình còn mang theo máy tính."),

            T("purpose",
            "I need it to + V",
            "I need it to solve math problems.",
            "Mình cần nó để giải bài toán."),

            T("in-case",
            "in case + mệnh đề",
            "I bring extra pens in case one runs out of ink.",
            "Mình mang thêm bút phòng trường hợp có chiếc hết mực.")
        )
    )

];


const TOOL_INDEX = new Map();

for (const group of TOOLBOX) {
    for (const section of group.sections) {
        for (const item of section.items) {
            TOOL_INDEX.set(item.id, item);
        }
    }
}


/* =====================================================
   05. QUESTION TYPE GUIDES

   Each section references existing Toolbox IDs.
   No duplicated example database.
   ===================================================== */

const TYPE_GUIDES = {

    opinion: {
        flow: "Nêu quan điểm hoặc đánh giá → Giải thích lý do → Phát triển ý.",
        sections: [
            ["Nêu quan điểm và đánh giá", "opinions", "rose",
            ["say", "find-object", "find-it", "should"]],

            ["Giải thích và thêm lý do", "connect", "gold",
            ["mainly-because", "on-top"]]
        ]
    },

    likes: {
        flow: "Trả lời trực tiếp → Diễn đạt mức độ yêu thích → Nêu lý do.",
        sections: [
            ["Thay cho Yes / No", "yes-no", "green",
            ["absolutely", "not-really"]],

            ["Diễn đạt sự yêu thích", "likes", "rose",
            ["huge-fan", "pretty-into", "not-into"]],

            ["Giải thích lý do", "ability", "blue",
            ["get-to"]]
        ]
    },

    past: {
        flow: "Trả lời ở quá khứ → Mô tả hoạt động hoặc trải nghiệm → Giải thích.",
        sections: [
            ["Nói về quá khứ", "habits-past", "gold",
            ["back-then", "used-to"]],

            ["Những hoạt động từng được làm", "ability", "green",
            ["get-to"],
            "Khi kể về quá khứ, đổi get to thành got to. Ví dụ: We often got to draw and paint."]
        ]
    },

    preference: {
        flow: "Nêu lựa chọn → Giải thích lợi ích hoặc lý do.",
        sections: [
            ["Bày tỏ sự ưu tiên", "preference", "rose",
            ["prefer", "like-better", "lean-towards"]],

            ["Nêu khả năng", "ability", "green",
            ["can"]],

            ["Giải thích lợi ích", "benefits", "blue",
            ["help", "allow"]]
        ]
    },

    habits: {
        flow: "Nêu hoạt động hoặc đồ vật → Bổ sung thông tin → Nêu mục đích nếu cần.",
        sections: [
            ["Mô tả thói quen", "habits-past", "green",
            ["usually", "tend"]],

            ["Bổ sung thông tin", "connect", "rose",
            ["also"]],

            ["Liệt kê và nêu mục đích", "habits-past", "gold",
            ["apart-from", "purpose", "in-case"]]
        ]
    }
};


/* =====================================================
   CHALLENGE DATABASE

   Add future challenges below.
   Toolbox remains independent.
   ===================================================== */

const CHALLENGES = [

    {
        id: 1,
        title: "School",
        grammar: GRAMMAR_1,
        deckB: DECK_B_1,
        deckC: DECK_C_1,
        deckD: DECK_D_1,
        speaking: SPEAKING_1
    }

    /*
    ,{
        id: 2,
        title: "Next topic",
        grammar: [],
        deckB: [],
        deckC: [],
        deckD: [],
        speaking: []
    }
    */

];


/* =====================================================
   06. APPLICATION & STORAGE
   ===================================================== */

const $ = id => document.getElementById(id);

function el(tag, cls = "", text = "", lang = "") {
    const node = document.createElement(tag);
    node.className = cls;
    node.textContent = text;
    if (lang) node.lang = lang;
    return node;
}

function div(cls, ...children) {
    const node = el("div", cls);
    node.append(...children);
    return node;
}

function vi(text, cls = "vi") {
    return el("p", cls, text, "vi");
}

function btn(text, fn, cls = "", lang = "") {
    const node = el("button", cls, text, lang);
    node.type = "button";
    node.addEventListener("click", fn);
    return node;
}


/* Icons */

const ICONS = {
    menu: "M4 5h16M4 12h16M4 19h16",
    search: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14M15 15l6 6",
    bag: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",
    trash: "M3 6h18M19 6v14H5V6M9 6V3h6v3M9 10v6M15 10v6",
    grammar: "M4 4h5a3 3 0 0 1 3 3v14a4 4 0 0 0-4-4H4zM12 7a3 3 0 0 1 3-3h5v13h-4a4 4 0 0 0-4 4",
    vocabulary: "M12 3 3 8l9 5 9-5zM3 12l9 5 9-5M3 16l9 5 9-5",
    speaking: "M3 4h18v13H9l-6 4zM7 9h10M7 13h6",
    toolbox: "M3 8h18v12H3zM8 8V4h8v4M3 12h18M10 12v3h4v-3",
    speaker: "M3 9v6h4l5 4V5L7 9zM15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12",
    mute: "M3 9v6h4l5 4V5L7 9zM16 9l5 6M21 9l-5 6",
    message: "M3 4h18v13H9l-6 4zM7 9h10M7 13h6",
    heart: "M12 20S3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12",
    history: "M3 12a9 9 0 1 1 3 7M3 5v7h7M12 7v5l3 2",
    compare: "M3 7h17M16 3l4 4-4 4M21 17H4M8 13l-4 4 4 4",
    list: "M8 6h12M8 12h12M8 18h12M3 6h1M3 12h1M3 18h1",
    grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
    bulb: "M9 18h6M9 22h6M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 4H9c0-2 0-3-1-4",
    prev: "M15 6l-6 6 6 6",
    next: "M9 6l6 6-6 6",
    close: "M6 6l12 12M18 6 6 18",
    flip: "M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3",
    play: "M6 4l13 8-13 8z",
    mic: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8",
    stop: "M6 6h12v12H6z",
    download: "M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5",
    note: "M5 3h10l4 4v14H5zM14 3v5h5M8 12h8M8 16h8",
    info: "M12 11v6M12 7h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20",
    smile: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M8 14a4 4 0 0 0 8 0M8 9h.01M16 9h.01",
    effect: "M3 17l6-6 4 4 8-10M15 5h6v6",
    link: "M10 13a4 4 0 0 0 6 0l4-4a4 4 0 0 0-6-6l-2 2M14 11a4 4 0 0 0-6 0l-4 4a4 4 0 0 0 6 6l2-2"
};

function icon(key) {
    return `<svg viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        stroke-width="1.7" stroke-linecap="round"
        stroke-linejoin="round" aria-hidden="true">
        <path d="${ICONS[key] || ICONS.grid}"/>
    </svg>`;
}

function iconBox(key) {
    const node = el("span", "svg-icon");
    node.innerHTML = icon(key);
    return node;
}

function iconBtn(key, label, fn, cls = "icon-button") {
    const node = btn("", fn, cls);
    node.innerHTML = icon(key);
    node.title = label;
    node.setAttribute("aria-label", label);
    return node;
}


/* Persistent storage

   Version 7 saves a single data snapshot.
   If no V7 data exists, read the old V4/V5/V6 keys.
   Old storage is NOT deleted.
*/

const STORAGE_KEY = "english-challenges-v7";

function readJSON(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
    } catch {
        return fallback;
    }
}

function safeObject(value) {
    return value && typeof value === "object" && !Array.isArray(value)
        ? value : {};
}

function loadData() {
    const old = safeObject(readJSON(STORAGE_KEY, null));

    let oldSound = true;
    try {
        oldSound = localStorage.getItem("english-click-sound") !== "off";
    } catch {}

    const rawCart = old.cart ??
        readJSON("english-challenges-cart-v1", []);

    return {
        progress: safeObject(
            old.progress ?? readJSON("english-challenges-v1", {})
        ),
        cart: Array.isArray(rawCart)
            ? [...new Set(rawCart.filter(k => typeof k === "string"))]
            : [],
        notes: safeObject(
            old.notes ?? readJSON("english-challenges-notes-v1", {})
        ),
        sound: typeof old.sound === "boolean" ? old.sound : oldSound
    };
}

let data = loadData();


function persist() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

        $("status").textContent =
            "Tiến độ, giỏ hàng và ghi chú đã lưu được giữ trên trình duyệt này.";

        return true;
    } catch (error) {
        console.warn("Storage error:", error);

        $("status").textContent =
            "Không thể lưu dữ liệu trên trình duyệt này.";

        return false;
    }
}


/* Application state */

const MODULES = [
    ["grammar", "Grammar", "rose", "en"],
    ["vocabulary", "Từ vựng trong bài", "blue", "vi"],
    ["speaking", "Speaking Questions", "rose", "en"],
    ["toolbox", "Toolbox", "gold", "en"]
];

let challenge = "all";
let currentModule = "home";
let query = "";
let view = "bank";

let speakingGroup = null;
let toolboxGroup = null;
let toolboxReturn = null;

let queue = [];
let position = 0;
let revealed = false;
let support = true;

let sidebarOpen = innerWidth > 760;

let timerId = null;
let remaining = 20;

let recordingCleanup = null;


/* Data helpers */

function normalize(value) {
    return String(value ?? "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d");
}

function itemKey(item) {
    return [
        item.challenge,
        item.module,
        item.deck || "",
        item.id
    ].join(":");
}

function typeMeta(type) {
    return TYPE_META[type] || {
        title: type,
        color: "rose",
        icon: "message"
    };
}

function withMeta(c, m, records, deck = "") {
    return records.map(item => ({
        ...item,
        challenge: c,
        module: m,
        deck
    }));
}

function allFor(m, global = false) {
    return CHALLENGES
        .filter(c => global || challenge === "all" || c.id === challenge)
        .flatMap(c => {
            if (m === "vocabulary") {
                return ["B", "C", "D"].flatMap(d =>
                    withMeta(c.id, m, c["deck" + d] || [], d)
                );
            }

            return withMeta(c.id, m, c[m] || []);
        });
}

function matchesQuery(item) {
    const term = normalize(query.trim());

    if (!term) return true;
    if (normalize(JSON.stringify(item)).includes(term)) return true;

    return Boolean(
        item.type &&
        normalize(typeMeta(item.type).title).includes(term)
    );
}

function recordsFor(m) {
    return allFor(m).filter(matchesQuery);
}

function moduleTitle(m) {
    return MODULES.find(row => row[0] === m)?.[1] || "Home";
}

function scope() {
    if (currentModule === "toolbox" || currentModule === "cart") {
        return "All challenges";
    }

    return challenge === "all"
        ? "All challenges"
        : `Challenge ${challenge}`;
}


/* Sound effects — no pronunciation API */

let audioContext = null;

function playTone(type = "pop") {
    if (!data.sound) return;

    try {
        const Engine = window.AudioContext || window.webkitAudioContext;
        if (!Engine) return;

        audioContext ??= new Engine();

        if (audioContext.state === "suspended") {
            audioContext.resume().catch(() => {});
        }

        const notes = {
            pop: [610],
            flip: [420, 580],
            correct: [620, 840],
            wrong: [260, 200],
            chime: [523, 659, 784]
        }[type] || [610];

        notes.forEach((hz, i) => {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            const start = audioContext.currentTime + i * .065;

            osc.type = "sine";
            osc.frequency.value = hz;

            gain.gain.setValueAtTime(.0001, start);
            gain.gain.exponentialRampToValueAtTime(.032, start + .008);
            gain.gain.exponentialRampToValueAtTime(.0001, start + .19);

            osc.connect(gain);
            gain.connect(audioContext.destination);

            osc.start(start);
            osc.stop(start + .20);

            osc.onended = () => {
                osc.disconnect();
                gain.disconnect();
            };
        });
    } catch {}
}

document.addEventListener("click", event => {
    const target = event.target.closest?.("button, summary");

    if (!target || target.disabled || target.dataset.sound === "custom") {
        return;
    }

    playTone("pop");
}, true);

function renderSoundButton() {
    $("sound").innerHTML = icon(data.sound ? "speaker" : "mute");
    $("sound").setAttribute("aria-pressed", String(data.sound));
    $("sound").title = data.sound ? "Mute sound" : "Enable sound";
}


/* Toast */

let toastTimer = null;

function showToast(message) {
    const toast = $("toast");

    toast.replaceChildren(
        iconBox("info"),
        el("span", "", message, "vi")
    );

    toast.classList.add("show");
    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}


/* Save transaction

   Roll back the change if localStorage fails.
*/

function commitData(change, message = "", sound = "chime") {
    const before = JSON.stringify(data);

    change();

    if (!persist()) {
        data = JSON.parse(before);
        playTone("wrong");
        showToast("Chưa lưu được dữ liệu. Hãy thử lại.");
        return false;
    }

    renderNav();

    if (message) {
        showToast(message);
        playTone(sound);
    }

    return true;
}


/* Progress */

function ratingOf(item) {
    return data.progress[itemKey(item)] || "";
}

function percentage(records) {
    if (!records.length) return 0;

    return Math.round(
        records.filter(item => ratingOf(item) === "known").length
        / records.length * 100
    );
}


/* Shopping cart */

function inCart(item) {
    return data.cart.includes(itemKey(item));
}

function addCartKey(item) {
    const key = itemKey(item);
    if (!data.cart.includes(key)) data.cart.push(key);
}

function removeCartKey(item) {
    data.cart = data.cart.filter(key => key !== itemKey(item));
}

function wordItem(question, word) {
    return {
        ...word,
        id: `${question.id}-${word.id}`,
        challenge: question.challenge,
        module: "speakingWord",
        deck: "",
        questionId: question.id
    };
}

function selectedWords(question) {
    return (question.words || []).filter(word =>
        inCart(wordItem(question, word))
    );
}

function getSpeakingNote(question) {
    const note = data.notes[itemKey(question)];
    return typeof note === "string" ? note : "";
}

function migrateCart() {
    for (const question of allFor("speaking", true)) {
        if (selectedWords(question).length) {
            addCartKey(question);
        }
    }
}

function resolveCartItems() {
    const all = [
        ...allFor("grammar", true),
        ...allFor("vocabulary", true),
        ...allFor("speaking", true)
    ];

    const lookup = new Map(all.map(item => [itemKey(item), item]));

    return data.cart.map(key => lookup.get(key)).filter(Boolean);
}

function toggleRegularCart(item) {
    const removing = inCart(item);

    return commitData(
        () => removing ? removeCartKey(item) : addCartKey(item),
        removing ? "Đã bỏ khỏi giỏ." : "Đã thêm vào giỏ.",
        removing ? "pop" : "chime"
    );
}

function saveSpeaking(question, note, word = null) {
    return commitData(() => {
        addCartKey(question);

        if (word) {
            addCartKey(wordItem(question, word));
        }

        data.notes[itemKey(question)] = note;

    }, word
        ? "Đã lưu từ vựng và thẻ Speaking."
        : "Đã lưu thẻ Speaking và ghi chú."
    );
}

function deleteCartItem(item) {
    return commitData(() => {
        removeCartKey(item);

        if (item.module === "speaking") {
            for (const word of item.words || []) {
                removeCartKey(wordItem(item, word));
            }

            delete data.notes[itemKey(item)];
        }

    }, "Đã bỏ thẻ khỏi giỏ.", "pop");
}


/* =====================================================
   07. NAVIGATION & UI
   ===================================================== */

function setSidebar(open) {
    sidebarOpen = open;
    $("layout").classList.toggle("collapsed", !open);
    $("menu").setAttribute("aria-expanded", String(open));
}

function renderChallenges() {
    const container = $("challenges");
    const oldScroll = container.scrollTop;

    container.replaceChildren();

    const ids = [
        "all",
        ...Array.from({ length: 30 }, (_, i) => i + 1)
    ];

    for (const id of ids) {
        const lesson = CHALLENGES.find(c => c.id === id);

        const button = btn("", () => {
            stopSession();

            challenge = id;
            view = "bank";
            queue = [];
            speakingGroup = null;
            toolboxReturn = null;
            query = "";
            $("search").value = "";

            if (innerWidth <= 760) setSidebar(false);

            render();

        }, [
            "challenge",
            challenge === id ? "active" : "",
            id !== "all" && !lesson ? "empty" : ""
        ].join(" "));

        const label = div(
            "challenge-label",
            el("span", "", id === "all" ? "All" : `Challenge ${id}`)
        );

        if (lesson) {
            label.append(el("small", "", lesson.title));
        }

        button.append(label);

        if (lesson) {
            button.append(el("span", "dot"));
        }

        button.setAttribute(
            "aria-current",
            challenge === id ? "true" : "false"
        );

        container.append(button);
    }

    container.scrollTop = oldScroll;
}

function navigate(m, keepQuery = false) {
    stopSession();

    currentModule = m;
    view = "bank";
    queue = [];
    speakingGroup = null;
    toolboxGroup = null;
    toolboxReturn = null;

    if (!keepQuery) {
        query = "";
        $("search").value = "";
    }

    render();
}

function renderNav() {
    const nav = $("nav");
    nav.replaceChildren();

    // Shopping cart is FIRST.

    const cartButton = btn(
        "",
        () => navigate("cart"),
        `nav-btn nav-cart ${currentModule === "cart" ? "active" : ""}`,
        "vi"
    );

    cartButton.append(
        iconBox("bag"),
        el("span", "", "Giỏ hàng", "vi")
    );

    if (resolveCartItems().length) {
        const dot = el("span", "nav-cart-dot");
        dot.setAttribute("aria-hidden", "true");
        cartButton.append(dot);
    }

    cartButton.setAttribute(
        "aria-current",
        currentModule === "cart" ? "page" : "false"
    );

    nav.append(cartButton);

    for (const [id, name, , lang] of [
        ["home", "Home", "", "en"],
        ...MODULES
    ]) {
        const button = btn(
            name,
            () => navigate(id),
            `nav-btn ${currentModule === id ? "active" : ""}`,
            lang
        );

        button.setAttribute(
            "aria-current",
            currentModule === id ? "page" : "false"
        );

        nav.append(button);
    }
}


/* Common components */

function heading(title, subtitle = "", lang = "en") {
    const node = div(
        "heading",
        el("p", "eyebrow", scope()),
        el("h1", "", title, lang)
    );

    if (subtitle) node.append(vi(subtitle, "desc"));
    return node;
}

function empty(root, message = "") {
    root.append(div(
        "empty-state",
        vi(message || (
            query.trim()
                ? "Không tìm thấy nội dung phù hợp."
                : "Chưa có nội dung cho Challenge này."
        ))
    ));
}

function progressBar(percent) {
    const line = div("progress-line");
    const fill = el("i");
    fill.style.width = `${percent}%`;
    line.append(fill);
    return line;
}

function tile(name, iconName, color, action, lang = "en", records = null) {
    const button = btn("", action, "tile");
    const image = div(`tile-icon ${color}`);
    image.innerHTML = icon(iconName);

    button.append(image, el("strong", "", name, lang));

    if (records !== null) {
        const percent = percentage(records);
        button.append(
            el("small", "", `${percent}%`),
            progressBar(percent)
        );
    }

    return button;
}

function bagButton(item) {
    const button = iconBtn("bag", "Thêm vào giỏ", () => {
        toggleRegularCart(item);
        update();
    }, "mini-bag-btn");

    button.dataset.sound = "custom";

    function update() {
        const saved = inCart(item);

        button.classList.toggle("saved", saved);
        button.title = saved ? "Bỏ khỏi giỏ" : "Thêm vào giỏ";
        button.setAttribute("aria-label", button.title);
        button.setAttribute("aria-pressed", String(saved));
    }

    update();
    return button;
}

function practiceButton(records, label = "Practice") {
    const button = btn("", () => start(records), "primary");

    button.append(iconBox("play"), document.createTextNode(` ${label}`));
    button.disabled = !records.length;

    return button;
}


/* Home */

function renderHome(root) {
    const lesson = CHALLENGES.find(c => c.id === challenge);

    root.append(heading(
        challenge === "all"
            ? "Your learning space"
            : lesson
                ? `Challenge ${challenge} · ${lesson.title}`
                : `Challenge ${challenge}`
    ));

    const grid = div("module-grid");

    for (const [id, name, color, lang] of MODULES) {
        const records = ["grammar", "vocabulary"].includes(id)
            ? recordsFor(id)
            : null;

        grid.append(tile(
            name, id, color,
            () => navigate(id, true),
            lang, records
        ));
    }

    root.append(grid);
}


/* Card banks */

function renderCardList(root, records, singleColumn = false) {
    const grid = div(singleColumn ? "question-list" : "card-grid");

    records.forEach((item, index) => {
        const isSpeaking = item.module === "speaking";

        const bag = isSpeaking
            ? iconBtn("bag", "Mở thẻ để lưu", () => {
                start(records, index);

                if (!inCart(item)) {
                    $("main").querySelector(".speaking-save")?.click();
                }
            }, `mini-bag-btn ${inCart(item) ? "saved" : ""}`)
            : bagButton(item);

        const card = div(
            `bank-card ${ratingOf(item)}`,

            div(
                "bank-card-top",
                el(
                    "small", "",
                    isSpeaking ? typeMeta(item.type).title : "Question",
                    isSpeaking ? "vi" : "en"
                ),
                bag
            ),

            btn(
                isSpeaking ? item.question : item.front,
                () => start(records, index),
                "bank-open",
                "en"
            )
        );

        grid.append(card);
    });

    root.append(grid);
}

function renderBank(root) {
    root.append(heading(
        moduleTitle(currentModule),
        "",
        currentModule === "vocabulary" ? "vi" : "en"
    ));

    const records = recordsFor(currentModule);

    root.append(div(
        "bar",
        el("span", "white-pill", `${percentage(records)}%`),
        practiceButton(records)
    ));

    if (records.length) renderCardList(root, records);
    else empty(root);
}


/* Question type guide */

function openToolboxFromSpeaking(groupId) {
    const previous = {
        group: speakingGroup,
        challenge,
        query
    };

    navigate("toolbox");

    toolboxReturn = previous;
    toolboxGroup = groupId;

    render();
}

function returnToSpeaking() {
    const origin = toolboxReturn;

    if (!origin) {
        navigate("speaking");
        return;
    }

    navigate("speaking");

    challenge = origin.challenge;
    speakingGroup = origin.group;
    query = origin.query;
    $("search").value = query;

    render();
}

function guideCard(item, color) {
    return div(
        `guide-card ${color}`,
        el("p", "pattern", item.pattern, "en"),
        el("p", "example", item.example, "en"),
        vi(item.translation, "translation")
    );
}

function toolNote(text) {
    return div("tool-note", iconBox("info"), vi(text));
}

function guidePanel(type) {
    const guide = TYPE_GUIDES[type];

    const panel = div(
        "guide-panel",
        el("h3", "", "Cách trả lời", "vi")
    );

    if (!guide) {
        panel.append(vi(
            "Trả lời trực tiếp, nêu lý do và bổ sung chi tiết.",
            "guide-flow"
        ));
        return panel;
    }

    panel.append(vi(guide.flow, "guide-flow"));

    for (const [title, group, color, ids, note] of guide.sections) {
        const link = btn(
            "",
            () => openToolboxFromSpeaking(group),
            "guide-link"
        );

        link.append(
            iconBox("toolbox"),
            el("span", "", "Toolbox")
        );

        const section = div(
            "guide-section",
            div(
                "guide-header",
                el("strong", "", title, "vi"),
                link
            )
        );

        for (const id of ids) {
            const item = TOOL_INDEX.get(id);

            if (item) {
                section.append(guideCard(item, color));
            }
        }

        if (note) section.append(toolNote(note));

        panel.append(section);
    }

    return panel;
}


/* Speaking question categories */

function renderSpeakingBank(root) {
    const all = recordsFor("speaking");

    if (speakingGroup === null) {
        root.append(heading(
            "Speaking Questions",
            "Chọn loại câu hỏi để luyện tập."
        ));

        if (!all.length) {
            empty(root);
            return;
        }

        const grid = div("category-grid");

        grid.append(tile("All", "grid", "rose", () => {
            speakingGroup = "all";
            render();
        }));

        for (const type of new Set(all.map(q => q.type))) {
            const meta = typeMeta(type);

            grid.append(tile(
                meta.title,
                meta.icon,
                meta.color,
                () => {
                    speakingGroup = type;
                    render();
                },
                "vi"
            ));
        }

        root.append(grid);
        return;
    }

    const isAll = speakingGroup === "all";

    const records = isAll
        ? all
        : all.filter(q => q.type === speakingGroup);

    root.append(heading(
        isAll ? "Speaking Questions" : typeMeta(speakingGroup).title,
        "",
        isAll ? "en" : "vi"
    ));

    root.append(div(
        "bar",
        iconBtn("prev", "Quay lại các loại câu hỏi", () => {
            speakingGroup = null;
            render();
        }),
        practiceButton(records)
    ));

    if (!records.length) {
        empty(root);
        return;
    }

    // No crowded question type tab bar.

    if (isAll) {
        renderCardList(root, records);
    } else {
        const left = div("");
        renderCardList(left, records, true);

        root.append(div(
            "speaking-split",
            left,
            guidePanel(speakingGroup)
        ));
    }
}


/* Toolbox cards */

function renderToolCard(item) {
    const card = div(
        "tool-card",
        el("h3", "tool-pattern", item.pattern, "en")
    );

    if (item.reading) {
        card.append(el("p", "tool-reading", item.reading, "en"));
    }

    card.append(div(
        "tool-example",
        el("p", "example", item.example, "en"),
        vi(item.translation, "translation")
    ));

    if (item.note) card.append(toolNote(item.note));

    return card;
}

function renderToolSection(section, items = section.items) {
    return div(
        "toolbox-section",
        vi(section.title, "toolbox-section-title"),
        div("toolbox-card-grid", ...items.map(renderToolCard))
    );
}


/* Yes / No and liking intensity scales */

function renderScale(group) {
    const grid = div("scale-grid");
    grid.style.setProperty("--scale-cols", group.sections.length);

    for (const section of group.sections) {
        const box = div(
            `scale-item ${section.tone}`,
            vi(section.title)
        );

        for (const item of section.items) {
            const phrase = item.pattern
                .replace(/\s*\+\s*NP\s*\/\s*V-ing\s*$/, "...")
                .replace(/^NP\s*\/\s*V-ing\s*\+\s*/, "... ");

            box.append(el("p", "", phrase, "en"));
        }

        grid.append(box);
    }

    const yesNo = group.id === "yes-no";

    return div(
        "tool-scale",

        vi(
            yesNo
                ? "Mức độ khẳng định và phủ định"
                : "Mức độ yêu thích",
            "toolbox-section-title"
        ),

        div("scale-track"),
        grid,

        vi(
            yesNo
                ? "Absolutely, Definitely và 100% cùng thuộc nhóm khẳng định mạnh. Of course còn hàm ý điều đó là hiển nhiên. Đây không phải một thang đo tuyệt đối."
                : "Các nhóm thể hiện sắc thái gần đúng. Obsessed with, sick and tired of và drives me crazy còn có những sắc thái nghĩa riêng.",
            "translation"
        )
    );
}


/* Equivalent structures */

function equivalenceBlock(id, color) {
    const item = TOOL_INDEX.get(id);

    return div(
        `equivalence-block ${color}`,
        el("strong", "", item.example, "en"),
        el("p", "form", item.pattern, "en"),
        vi(item.translation, "translation")
    );
}

function renderEquivalence() {
    return div(
        "equivalence",

        vi("Đánh giá một đối tượng", "toolbox-section-title"),

        div(
            "equivalence-grid",
            equivalenceBlock("find-object", "rose"),
            equivalenceBlock("think-object", "blue"),
            equivalenceBlock("for-me", "green")
        ),

        vi("Đánh giá một hành động", "toolbox-section-title"),

        div(
            "equivalence-grid two",
            equivalenceBlock("find-it", "rose"),
            equivalenceBlock("it-for-me", "blue")
        ),

        vi(
            "Các câu trong mỗi nhóm diễn đạt gần như cùng một ý trong ngữ cảnh đánh giá cá nhân.",
            "translation"
        )
    );
}


/* Toolbox navigation */

function renderToolbox(root) {
    const term = normalize(query.trim());

    if (toolboxReturn) {
        root.append(div(
            "bar",
            btn("‹ Quay lại Speaking", returnToSpeaking, "", "vi")
        ));
    }

    // Search all global Toolbox cards.

    if (term) {
        root.append(heading(
            "Toolbox",
            "Tìm cấu trúc theo chức năng, ví dụ hoặc nghĩa."
        ));

        const page = div("toolbox-page");
        let found = false;

        for (const group of TOOLBOX) {
            const matches = group.sections.map(section => ({
                section,
                items: section.items.filter(item =>
                    normalize(
                        JSON.stringify(item) + group.title + section.title
                    ).includes(term)
                )
            })).filter(result => result.items.length);

            if (!matches.length) continue;

            found = true;
            page.append(el("h2", "", group.title, "vi"));

            for (const result of matches) {
                page.append(renderToolSection(result.section, result.items));
            }
        }

        if (found) root.append(page);
        else empty(root, "Không tìm thấy cấu trúc phù hợp.");

        return;
    }

    // Group landing page.

    if (toolboxGroup === null) {
        root.append(heading(
            "Toolbox",
            "Bạn muốn diễn đạt điều gì?"
        ));

        const grid = div("toolbox-menu");

        for (const group of TOOLBOX) {
            grid.append(tile(
                group.title,
                group.icon,
                group.color,
                () => {
                    toolboxGroup = group.id;
                    render();
                },
                "vi"
            ));
        }

        root.append(grid);
        return;
    }

    // Individual Toolbox group.

    const group = TOOLBOX.find(g => g.id === toolboxGroup);

    if (!group) {
        toolboxGroup = null;
        render();
        return;
    }

    root.append(heading(group.title, "", "vi"));

    root.append(div(
        "bar",
        btn("‹ Toolbox", () => {
            toolboxGroup = null;
            render();
        })
    ));

    const page = div("toolbox-page");

    if (["yes-no", "likes"].includes(group.id)) {
        page.append(renderScale(group));
    }

    if (group.id === "opinions") {
        page.append(renderEquivalence());
    }

    for (const section of group.sections) {
        page.append(renderToolSection(section));
    }

    root.append(page);
}


/* Cart view */

function renderCart(root) {
    const records = resolveCartItems().filter(item => {
        if (!query.trim()) return true;

        if (item.module === "speaking") {
            return normalize([
                item.question,
                typeMeta(item.type).title,
                ...selectedWords(item).map(w => w.chunk + " " + w.meaning),
                getSpeakingNote(item)
            ].join(" ")).includes(normalize(query));
        }

        return matchesQuery(item);
    });

    root.append(heading(
        "Giỏ hàng",
        "Những thẻ bạn đã lưu để luyện tập lại.",
        "vi"
    ));

    root.append(div(
        "bar",
        el("span"),
        practiceButton(records, "Ôn giỏ")
    ));

    if (!records.length) {
        empty(root, query.trim()
            ? "Không tìm thấy thẻ phù hợp."
            : "Giỏ hàng đang trống."
        );
        return;
    }

    const list = div("cart-list");

    records.forEach((item, index) => {
        const isSpeaking = item.module === "speaking";

        const label = isSpeaking
            ? "Speaking"
            : item.module === "grammar"
                ? "Grammar"
                : "Từ vựng trong bài";

        const info = div(
            "cart-info",
            el("span", "cart-category", label),
            el(
                "strong", "",
                isSpeaking ? item.question : item.front,
                "en"
            )
        );

        if (isSpeaking) {
            const words = selectedWords(item);

            if (words.length) {
                info.append(div(
                    "cart-words",
                    ...words.map(word =>
                        el("span", "cart-word", word.chunk, "en")
                    )
                ));
            } else {
                info.append(vi("Chưa có từ vựng đã lưu.", "translation"));
            }

            const note = getSpeakingNote(item);

            if (note.trim()) {
                info.append(div(
                    "cart-note",
                    vi("Ghi chú", "note-label"),
                    vi(note, "note-preview")
                ));
            }
        }

        const remove = iconBtn(
            "trash",
            "Xóa thẻ này khỏi giỏ",
            () => {
                if (isSpeaking &&
                    !confirm("Bỏ câu hỏi này cùng từ vựng và ghi chú đã lưu?")) {
                    return;
                }

                if (deleteCartItem(item)) render();
            }
        );

        list.append(div(
            "cart-item",
            info,
            div(
                "cart-actions",
                iconBtn("play", "Ôn thẻ này", () => start(records, index)),
                remove
            )
        ));
    });

    root.append(list);
}


/* =====================================================
   08. STUDY SESSION & FLASHCARDS
   ===================================================== */

function stopClock() {
    if (timerId !== null) clearInterval(timerId);
    timerId = null;
    remaining = 20;
}

function stopSession() {
    stopClock();

    if (recordingCleanup) {
        const cleanup = recordingCleanup;
        recordingCleanup = null;
        cleanup();
    }
}

function start(records, index = 0) {
    if (!records.length) return;

    stopSession();

    queue = records;
    position = index;
    view = "study";
    revealed = false;

    // Guided practice is always the default
    // when starting a new session.

    support = true;

    render();
}

function advance(delta) {
    const next = position + delta;

    if (next < 0 || next >= queue.length) return;

    stopSession();

    position = next;
    revealed = false;

    playTone("pop");
    render();
}

function backToBank() {
    stopSession();

    queue = [];
    view = "bank";

    render();
}

function rate(item, rating) {
    const ok = commitData(() => {
        data.progress[itemKey(item)] = rating;
    });

    if (!ok) return;

    playTone(
        rating === "known"
            ? "correct"
            : rating === "again"
                ? "wrong"
                : "pop"
    );

    if (position === queue.length - 1) {
        backToBank();
    } else {
        stopSession();
        position++;
        revealed = false;
        render();
    }
}

function studyBar(root) {
    const item = queue[position];

    const label = item.module === "grammar"
        ? "Grammar"
        : item.module === "speaking"
            ? "Speaking"
            : "Vocabulary";

    root.append(div(
        "bar study-top",
        el("span", "white-pill", `${label} ${position + 1}/${queue.length}`),
        iconBtn("close", "Đóng thẻ", backToBank)
    ));
}

function moveButton(delta) {
    const button = iconBtn(
        delta < 0 ? "prev" : "next",
        delta < 0 ? "Thẻ trước" : "Thẻ tiếp theo",
        () => advance(delta),
        "ctrl-round"
    );

    button.dataset.sound = "custom";

    button.disabled = delta < 0
        ? position === 0
        : position === queue.length - 1;

    return button;
}

function peekCard(item, direction) {
    const button = btn(
        item.question || item.front,
        () => advance(direction),
        `peek-card ${direction < 0 ? "prev" : "next"}`,
        "en"
    );

    button.dataset.sound = "custom";
    button.setAttribute(
        "aria-label",
        direction < 0 ? "Thẻ trước" : "Thẻ tiếp theo"
    );

    return button;
}

function exampleBox(example, translation = "") {
    const box = div(
        "example-box",
        el("p", "example", example, "en")
    );

    if (translation) {
        box.append(vi(translation, "translation"));
    }

    return box;
}

function renderFlash(root, item) {
    const panel = div("study");
    const stage = div("carousel-stage");

    if (position > 0) {
        stage.append(peekCard(queue[position - 1], -1));
    }

    if (position < queue.length - 1) {
        stage.append(peekCard(queue[position + 1], 1));
    }

    const scene = div("card-scene");
    const flip = div("flip-card");

    const front = el("article", "card-face front");
    const back = el("article", "card-face back");

    // No grammar title that reveals the answer.

    front.append(
        el("span", "face-label", "Question"),
        el("p", "prompt", item.front, "en"),
        vi("Chạm để xem đáp án", "card-footnote")
    );

    back.append(
        el("span", "face-label", "Answer"),
        el("p", "answer", item.answer, "en")
    );

    if (item.rule) back.append(vi(item.rule, "rule"));

    if (item.example) {
        back.append(exampleBox(item.example, item.translation));
    }

    if (item.application) {
        back.append(
            vi("Thử vận dụng", "card-footnote"),
            exampleBox(item.application)
        );
    }

    back.append(vi("Chạm để quay lại câu hỏi", "card-footnote"));

    function updateFlip() {
        flip.classList.toggle("is-flipped", revealed);

        front.tabIndex = revealed ? -1 : 0;
        back.tabIndex = revealed ? 0 : -1;

        front.inert = revealed;
        back.inert = !revealed;

        front.setAttribute("aria-hidden", String(revealed));
        back.setAttribute("aria-hidden", String(!revealed));
    }

    function flipCard() {
        revealed = !revealed;
        playTone("flip");
        updateFlip();
    }

    // Both sides are interactive.

    for (const face of [front, back]) {
        face.setAttribute("role", "button");

        face.addEventListener("click", flipCard);

        face.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.code === "Space") {
                event.preventDefault();
                event.stopPropagation();

                flipCard();
                (revealed ? back : front).focus();
            }
        });
    }

    flip.append(front, back);
    scene.append(flip);
    stage.append(scene);

    panel.append(stage);

    const bag = btn("", () => {
        toggleRegularCart(item);
        updateBag();
    }, "ctrl-pill", "vi");

    bag.dataset.sound = "custom";

    function updateBag() {
        const saved = inCart(item);

        bag.classList.toggle("in-cart", saved);

        bag.replaceChildren(
            iconBox("bag"),
            el("span", "", saved ? "Đã lưu" : "Thêm vào giỏ", "vi")
        );
    }

    const flipButton = iconBtn(
        "flip",
        "Lật thẻ",
        flipCard,
        "ctrl-round"
    );

    flipButton.dataset.sound = "custom";

    panel.append(div(
        "modal-controls",
        moveButton(-1),
        flipButton,
        bag,
        moveButton(1)
    ));

    // Ratings are always visible.

    const ratings = div("rating");

    for (const [key, label] of [
        ["again", "Chưa nhớ"],
        ["hesitant", "Còn do dự"],
        ["known", "Nhớ rồi"]
    ]) {
        const button = btn(
            label,
            () => rate(item, key),
            key,
            "vi"
        );

        button.dataset.sound = "custom";
        ratings.append(button);
    }

    panel.append(ratings);

    updateFlip();
    updateBag();

    root.append(panel);
}


/* =====================================================
   09. SPEAKING & RECORDING
   ===================================================== */


/* Independent 20-second timer */

function runClock(button) {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
        button.textContent = `▷ ${remaining}s`;
        return;
    }

    if (remaining <= 0) remaining = 20;

    const deadline = Date.now() + remaining * 1000;

    button.textContent = `${remaining}s`;

    timerId = setInterval(() => {
        remaining = Math.max(
            0,
            Math.ceil((deadline - Date.now()) / 1000)
        );

        button.textContent = `${remaining}s`;

        if (remaining === 0) {
            clearInterval(timerId);
            timerId = null;
            remaining = 20;

            button.textContent = "▷ 20s";

            playTone("chime");
        }
    }, 100);
}


/* Recording controller

   Each Speaking card owns its own recorder.
   Switching modes does not destroy it.
   Leaving the card destroys it.
*/

function recordingPanel(item) {
    const box = div("record-panel");
    const message = vi("", "translation record-message");

    message.setAttribute("aria-live", "polite");

    const player = el("audio", "record-player");
    player.controls = true;
    player.hidden = true;
    player.preload = "metadata";

    let stream = null;
    let recorder = null;
    let blob = null;
    let url = "";
    let disposed = false;
    let pending = false;
    let generation = 0;

    function releaseStream(target = stream) {
        target?.getTracks().forEach(track => track.stop());

        if (stream === target) {
            stream = null;
        }
    }

    function discardAudio() {
        player.pause();
        player.removeAttribute("src");
        player.load();
        player.hidden = true;

        if (url) URL.revokeObjectURL(url);

        url = "";
        blob = null;
        download.hidden = true;
    }

    function cleanup() {
        disposed = true;
        generation++;

        if (recorder && recorder.state !== "inactive") {
            try { recorder.stop(); } catch {}
        }

        releaseStream();
        discardAudio();

        recorder = null;
        pending = false;
    }

    recordingCleanup = cleanup;

    const download = iconBtn(
        "download",
        "Tải bản ghi xuống máy",
        () => {
            if (!blob) return;

            const mime = blob.type;

            const extension = mime.includes("mp4")
                ? "m4a"
                : mime.includes("ogg")
                    ? "ogg"
                    : mime.includes("wav")
                        ? "wav"
                        : "webm";

            const filename = item.question
                .replace(/[<>:"/\\|?*\x00-\x1f]/g, "")
                .replace(/[. ]+$/g, "")
                .trim()
                .slice(0, 140) || "Speaking recording";

            const downloadURL = URL.createObjectURL(blob);

            const link = el("a");

            link.href = downloadURL;
            link.download = `${filename}.${extension}`;

            document.body.append(link);
            link.click();
            link.remove();

            setTimeout(() => {
                URL.revokeObjectURL(downloadURL);
            }, 30000);
        },
        "ctrl-round"
    );

    download.hidden = true;

    const record = btn("", async () => {
        if (disposed || pending) return;

        if (recorder?.state === "recording") {
            record.disabled = true;
            recorder.stop();
            return;
        }

        if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
            message.textContent =
                "Hãy mở website bằng localhost hoặc HTTPS để sử dụng microphone.";
            return;
        }

        // Keep an old recording until permission
        // for a replacement has been granted.

        const run = ++generation;

        pending = true;
        record.disabled = true;
        message.textContent = "Đang xin quyền sử dụng microphone...";

        let requestedStream = null;

        try {
            requestedStream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });

            if (disposed || run !== generation) {
                releaseStream(requestedStream);
                return;
            }

            stream = requestedStream;

            const formats = [
                "audio/webm;codecs=opus",
                "audio/mp4",
                "audio/ogg;codecs=opus",
                "audio/webm"
            ];

            const supported = typeof MediaRecorder.isTypeSupported === "function"
                ? formats.find(format => MediaRecorder.isTypeSupported(format))
                : null;

            const localRecorder = supported
                ? new MediaRecorder(stream, { mimeType: supported })
                : new MediaRecorder(stream);

            recorder = localRecorder;

            const chunks = [];

            localRecorder.ondataavailable = event => {
                if (event.data.size) chunks.push(event.data);
            };

            localRecorder.onstop = () => {
                releaseStream(requestedStream);

                if (disposed || run !== generation) return;

                recorder = null;
                pending = false;

                blob = new Blob(chunks, {
                    type: localRecorder.mimeType ||
                        chunks[0]?.type || "audio/webm"
                });

                if (blob.size) {
                    url = URL.createObjectURL(blob);
                    player.src = url;
                    player.hidden = false;
                    download.hidden = false;

                    message.textContent =
                        "Bạn có thể nghe lại hoặc tải bản ghi xuống máy.";
                } else {
                    blob = null;
                    message.textContent =
                        "Bản ghi chưa có âm thanh. Hãy thử ghi âm lại.";
                }

                record.disabled = false;
                record.classList.remove("recording");

                setLabel("mic", "Ghi âm lại");
            };

            localRecorder.onerror = () => {
                if (disposed || run !== generation) return;

                generation++;

                if (localRecorder.state !== "inactive") {
                    try { localRecorder.stop(); } catch {}
                }

                releaseStream(requestedStream);
                recorder = null;
                pending = false;

                record.disabled = false;
                record.classList.remove("recording");

                setLabel("mic", "Ghi âm lại");

                message.textContent =
                    "Không thể hoàn thành bản ghi. Hãy thử lại.";
            };

            localRecorder.start();

            // Replace the old audio only after recording starts.

            discardAudio();

            pending = false;
            record.disabled = false;
            record.classList.add("recording");

            setLabel("stop", "Dừng ghi âm");

            message.textContent = "Đang ghi âm...";

        } catch (error) {
            releaseStream(requestedStream);

            if (disposed || run !== generation) return;

            recorder = null;
            pending = false;

            record.disabled = false;
            record.classList.remove("recording");

            setLabel("mic", blob ? "Ghi âm lại" : "Ghi âm");

            message.textContent =
                "Không ghi âm được. Hãy kiểm tra quyền microphone của trình duyệt.";

            console.warn("Microphone error:", error);
        }

    }, "record-button", "vi");

    // Avoid click sounds when starting the microphone.

    record.dataset.sound = "custom";

    function setLabel(iconName, label) {
        record.replaceChildren(
            iconBox(iconName),
            el("span", "", label, "vi")
        );
    }

    setLabel("mic", "Ghi âm");

    box.append(
        div("record-actions", record, player, download),
        message,
        vi(
            "Bản ghi chỉ tồn tại khi bạn đang mở thẻ này. Hãy lưu xuống máy nhé!",
            "record-reminder"
        )
    );

    return box;
}


/* Complete Speaking card */

function renderSpeaking(root, item) {
    const card = div("panel speaking study");

    const timer = btn(
        `▷ ${remaining}s`,
        () => runClock(timer),
        "timer"
    );

    // Notes are shared by both modes.

    const note = el("textarea", "speaking-note-input");

    note.id = "speakingNote";
    note.lang = "vi";
    note.rows = 2;
    note.placeholder = "Viết ghi chú của bạn ở đây...";
    note.value = getSpeakingNote(item);

    const noteStatus = vi("", "note-status");

    const noteLabel = el(
        "label", "note-label", "Ghi chú của bạn", "vi"
    );

    noteLabel.htmlFor = note.id;

    const noteBox = div(
        "speaking-note",
        div("note-heading", iconBox("note"), noteLabel),
        note,
        noteStatus
    );


    /* Save/update card */

    const saveButton = btn("", () => {
        if (!inCart(item) && !selectedWords(item).length) {
            warning.hidden = false;
            return;
        }

        saveCard();
    }, "ctrl-pill speaking-save", "vi");

    saveButton.dataset.sound = "custom";

    function syncSaveButton() {
        const saved = inCart(item);
        const dirty = note.value !== getSpeakingNote(item);

        saveButton.classList.toggle("in-cart", saved);

        saveButton.replaceChildren(
            iconBox("bag"),
            el(
                "span", "",
                saved
                    ? dirty ? "Lưu thay đổi" : "Đã lưu"
                    : "Lưu thẻ Speaking",
                "vi"
            )
        );

        noteStatus.textContent = dirty
            ? "Ghi chú chưa được lưu."
            : saved
                ? "Ghi chú đã được lưu cùng thẻ."
                : "Ghi chú sẽ được lưu khi bạn lưu thẻ hoặc chọn từ vựng.";
    }

    function saveCard(word = null) {
        const ok = saveSpeaking(item, note.value, word);

        if (!ok) {
            noteStatus.textContent =
                "Chưa lưu được dữ liệu. Hãy thử lại.";
            return;
        }

        warning.hidden = true;

        syncSaveButton();
        refreshWords();
    }

    // Typing alone does not save the note.

    note.addEventListener("input", syncSaveButton);


    /* Speaking vocabulary */

    const grid = div("vocab-grid");

    function refreshWords() {
        grid.replaceChildren();

        // In the cart, show only previously saved words.

        const words = currentModule === "cart"
            ? selectedWords(item)
            : item.words || [];

        for (const word of words) {
            const entry = wordItem(item, word);
            const saved = inCart(entry);

            const bag = iconBtn(
                "bag",
                saved ? "Bỏ từ khỏi giỏ" : "Lưu từ vựng và thẻ Speaking",
                () => {
                    if (inCart(entry)) {
                        // Removing a word keeps its parent question.
                        const ok = commitData(
                            () => removeCartKey(entry),
                            "Đã bỏ từ khỏi thẻ Speaking.",
                            "pop"
                        );

                        if (ok) {
                            refreshWords();
                            syncSaveButton();
                        }

                    } else {
                        // Saving any word saves:
                        // Word + question + current note.
                        saveCard(word);
                    }
                },
                `mini-bag-btn ${saved ? "saved" : ""}`
            );

            bag.dataset.sound = "custom";
            bag.setAttribute("aria-pressed", String(saved));

            grid.append(div(
                "word-row",

                div(
                    "word-top",
                    el("strong", "", word.chunk, "en"),
                    bag
                ),

                div(
                    "word-meta",
                    el("span", "ipa", `/${word.ipa}/`),
                    el("span", "form", word.form, "en")
                ),

                vi(word.meaning, "translation")
            ));
        }

        if (!words.length) {
            grid.append(vi(
                "Chưa có từ vựng đã lưu.",
                "translation"
            ));
        }
    }


    /* Hints */

    const hint = div("hint");
    hint.hidden = true;

    for (const [label, pattern] of item.hints || []) {
        hint.append(div(
            "hint-step",
            vi(label),
            el("p", "pattern", pattern, "en")
        ));
    }

    const hintButton = btn("", () => {
        hint.hidden = !hint.hidden;
        syncHint();
    }, "hint-button");

    function syncHint() {
        hintButton.replaceChildren(
            iconBox("bulb"),
            el(
                "span", "",
                hint.hidden ? "Hint" : "Ẩn gợi ý",
                hint.hidden ? "en" : "vi"
            )
        );

        hintButton.setAttribute("aria-expanded", String(!hint.hidden));
    }


    /* Test and Guided practice */

    const testPane = div(
        "speaking-mode-pane",
        vi("Trả lời bằng lời của bạn.", "test-instruction")
    );

    const guidedPane = div(
        "speaking-mode-pane",

        div(
            "speaking-section",
            el("h3", "section-title", "Từ vựng Speaking", "vi"),
            grid
        ),

        div("speaking-section", hintButton, hint)
    );

    const guidedButton = btn(
        "Guided practice",
        () => setMode(true)
    );

    const testButton = btn(
        "Test",
        () => setMode(false)
    );

    function setMode(guided) {
        support = guided;

        testPane.hidden = guided;
        guidedPane.hidden = !guided;

        guidedButton.classList.toggle("active", guided);
        testButton.classList.toggle("active", !guided);

        guidedButton.setAttribute("aria-pressed", String(guided));
        testButton.setAttribute("aria-pressed", String(!guided));

        // No rerender.
        // Audio, timer and notes remain untouched.
    }


    /* Warning when no words have been selected */

    const warning = div(
        "save-warning",

        vi("Nếu không lưu một số từ vựng, thẻ này trong giỏ hàng sẽ không có từ!"),

        div(
            "warning-actions",

            btn(
                "Vẫn lưu câu hỏi",
                () => saveCard(),
                "",
                "vi"
            ),

            btn(
                "Chọn từ vựng",
                () => {
                    warning.hidden = true;
                    setMode(true);
                    grid.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });
                },
                "primary",
                "vi"
            )
        )
    );

    warning.hidden = true;


    /* Recorder shared by BOTH modes */

    const recorderBox = recordingPanel(item);


    /* Initial state */

    refreshWords();
    syncSaveButton();
    syncHint();
    setMode(support);


    /* Assemble */

    card.append(
        div(
            "speaking-header",
            el("span", "type-label", typeMeta(item.type).title, "vi"),
            timer
        ),

        el("h2", "", item.question, "en"),

        div(
            "mode-bar",
            div("segmented", guidedButton, testButton)
        ),

        guidedPane,
        testPane,

        // Always visible.

        recorderBox,
        noteBox,
        warning,

        div(
            "modal-controls",
            moveButton(-1),
            saveButton,
            moveButton(1)
        )
    );

    root.append(card);
}


/* =====================================================
   10. INITIALIZATION
   ===================================================== */

function render() {
    const main = $("main");

    // Defensive cleanup if a full render occurs
    // while a recording controller still exists.

    if (recordingCleanup) {
        recordingCleanup();
        recordingCleanup = null;
        stopClock();
    }

    main.replaceChildren();

    renderNav();
    renderChallenges();

    if (view === "study" && queue[position]) {
        const item = queue[position];

        studyBar(main);

        if (item.module === "speaking") {
            renderSpeaking(main, item);
        } else {
            renderFlash(main, item);
        }

    } else if (currentModule === "home") {
        renderHome(main);

    } else if (currentModule === "cart") {
        renderCart(main);

    } else if (currentModule === "speaking") {
        renderSpeakingBank(main);

    } else if (currentModule === "toolbox") {
        renderToolbox(main);

    } else {
        renderBank(main);
    }

    main.scrollTop = 0;
}


/* Validate the content database */

function validateContent() {
    const used = new Set();

    for (const group of TOOLBOX) {
        for (const section of group.sections) {
            for (const item of section.items) {
                if (used.has(item.id)) {
                    console.error("Duplicate Toolbox ID:", item.id);
                }

                used.add(item.id);
            }
        }
    }

    for (const [type, guide] of Object.entries(TYPE_GUIDES)) {
        for (const [, group, , ids] of guide.sections) {
            if (!TOOLBOX.some(g => g.id === group)) {
                console.error("Missing Toolbox group:", type, group);
            }

            for (const id of ids) {
                if (!TOOL_INDEX.has(id)) {
                    console.error("Missing Toolbox card:", id);
                }
            }
        }
    }

    for (const lesson of CHALLENGES) {
        for (const question of lesson.speaking || []) {
            if (question.words?.length !== 6) {
                console.warn("Check vocabulary count:", question.id);
            }

            for (const word of question.words || []) {
                if (!word.chunk || !word.ipa || !word.form || !word.meaning) {
                    console.error("Incomplete Speaking vocabulary:", question.id, word);
                }
            }
        }
    }
}


/* Toolbar */

$("menu").innerHTML = icon("menu");
$("searchIcon").innerHTML = icon("search");

$("menu").addEventListener("click", () => {
    setSidebar(!sidebarOpen);
});

$("home").addEventListener("click", () => {
    navigate("home");
});

$("sound").dataset.sound = "custom";

$("sound").addEventListener("click", () => {
    const ok = commitData(() => {
        data.sound = !data.sound;
    });

    renderSoundButton();

    if (ok && data.sound) playTone("pop");
});


/* Search */

$("search").addEventListener("input", event => {
    stopSession();

    query = event.target.value;
    view = "bank";
    queue = [];

    if (currentModule === "speaking") {
        speakingGroup = query.trim() ? "all" : null;
    }

    render();
});


/* Keyboard shortcuts */

document.addEventListener("keydown", event => {
    if (view !== "study") return;

    const active = document.activeElement;
    const tag = active?.tagName;

    if (
        ["INPUT", "TEXTAREA", "SELECT", "AUDIO"].includes(tag) ||
        active?.isContentEditable
    ) {
        return;
    }

    if (event.key === "Escape") {
        event.preventDefault();
        backToBank();
        return;
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        advance(1);
        return;
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        advance(-1);
        return;
    }

    if (
        event.code === "Space" &&
        tag !== "BUTTON" &&
        tag !== "SUMMARY" &&
        queue[position]?.module !== "speaking"
    ) {
        event.preventDefault();

        document.querySelector(
            revealed ? ".card-face.back" : ".card-face.front"
        )?.click();
    }
});


/* Clean up microphone and temporary audio
   when leaving or reloading the page. */

window.addEventListener("pagehide", stopSession);

window.addEventListener("pageshow", event => {
    if (event.persisted) {
        data = loadData();
        renderSoundButton();
        render();
    }
});


/* Start */

validateContent();
migrateCart();
setSidebar(sidebarOpen);
renderSoundButton();
persist();
render();
