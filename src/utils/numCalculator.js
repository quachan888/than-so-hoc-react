export default function numCalculator(fullnameInput, birthdayInput) {
    // DDMMYYYY
    const ngaySinhInput = birthdayInput;
    const tenInput = fullnameInput;

    let fullBirth = ngaySinhInput.split('').map((n) => Number(n));
    const ngaySinh = [fullBirth[0], fullBirth[1]];
    const thangSinh = [fullBirth[2], fullBirth[3]];
    const namSinh = [fullBirth[4], fullBirth[5], fullBirth[6], fullBirth[7]];

    let fullname = tenInput
        .split('')
        .filter((c) => c != ' ')
        .map((c) => c.toUpperCase());

    const cNguyenAm = fullname.filter((c) => 'AEIOU'.includes(c));
    const cPhuAm = fullname.filter((c) => !'AEIOU'.includes(c));

    const sum = (input) => {
        let result = 0;
        result = input.reduce((a, c) => a + c, 0);
        if (result === 11 || result === 22) return result;
        while (result >= 10) {
            const tmp = result
                .toString()
                .split('')
                .map((n) => Number(n));

            result = tmp[0] + tmp[1];
        }

        return result;
    };

    const textToNumArray = (input) => {
        const charToNum = (input) => {
            let answer = 0;
            switch (input.toUpperCase()) {
                case 'A':
                case 'J':
                case 'S':
                    answer = 1;
                    break;
                case 'B':
                case 'K':
                case 'T':
                    answer = 2;
                    break;
                case 'C':
                case 'L':
                case 'U':
                    answer = 3;
                    break;
                case 'D':
                case 'M':
                case 'V':
                    answer = 4;
                    break;
                case 'E':
                case 'N':
                case 'W':
                    answer = 5;
                    break;
                case 'F':
                case 'O':
                case 'X':
                    answer = 6;
                    break;
                case 'G':
                case 'P':
                case 'Y':
                    answer = 7;
                    break;
                case 'H':
                case 'Q':
                case 'Z':
                    answer = 8;
                    break;
                case 'I':
                case 'R':
                    answer = 9;
                    break;
                default:
                    answer = 0;
            }
            return answer;
        };

        return input.map((c) => charToNum(c));
    };

    const lyGiai = (input) => {
        let result = '';
        switch (Number(input)) {
            case 1:
                result = 'Độc lập, năng nổ, có nhu cầu chịu trách nhiệm.';
                break;
            case 2:
                result = 'Nhạy cảm, không thích mâu thuẫn.';
                break;
            case 3:
                result = 'Coi trọng giao tiếp và năng lượng sáng tạo.';
                break;
            case 4:
                result = 'Chắc chắn, có tinh thần trách nhiệm, theo đuổi sự an tâm.';
                break;
            case 5:
                result = 'Tự do, phiêu lưu.';
                break;
            case 6:
                result = 'Nuôi dưỡng, có khuynh hướng là người trông nom, quan tâm.';
                break;
            case 7:
                result = 'Tìm kiếm chân lý, luôn hỏi câu hỏi lớn “Tôi là ai?”';
                break;
            case 8:
                result = 'Có nhu cầu tự do về tài chính và tâm linh.';
                break;
            case 9:
                result = 'Có tố chất lãnh đạo, bẩm sinh có khuynh hướng nhân đạo.';
                break;
            default:
                result = '';
        }
        return '=> ' + result;
    };

    // Check 11, 22, 29
    const sumWithCheck = (input) => {
        if (input[0] === 1 && input[1] === 1) return '11/2';
        if (input[0] === 2 && input[1] === 9) return '11/2';
        if (input[0] === 2 && input[1] === 2) return '22/4';
        return sum(input);
    };

    // Sum ve 2 so roi moi check 11, 22
    const sumAndCheck = (input) => {
        let result = 0;
        let check = '';
        result = input.reduce((a, c) => a + c, 0);

        if (result === 11 || result === 22) {
            check = result + '/';
        }

        while (result >= 10) {
            const tmp = result
                .toString()
                .split('')
                .map((n) => Number(n));

            result = tmp[0] + tmp[1];
        }

        if (check != '') return check + result;
        else return result;
    };

    const NS = sumWithCheck(ngaySinh);
    const TD = sum([...ngaySinh, ...thangSinh]);
    const DD = sum([...ngaySinh, ...thangSinh, ...namSinh]);
    const DDCheck = sumAndCheck([...ngaySinh, ...thangSinh, ...namSinh]);
    const LH = sumAndCheck(textToNumArray(cNguyenAm));
    const NC = sumAndCheck(textToNumArray(cPhuAm));
    const SM = sumAndCheck(textToNumArray(fullname));
    const TN = sum([SM, DD]);

    // Show result

    // console.log('\n=== BA GIAI ĐOẠN CUỘC ĐỜI ===');
    // console.log(`Tuổi trẻ \t[ 0-${36 - DD}] \tSố đại diện (GĐ):`, sum(thangSinh));
    // console.log(`Trưởng thành \t[${36 - DD + 1}-${36 - DD + 27}] \tSố đại diện (GĐ):`, sum(ngaySinh));
    // console.log(`Tuổi già \t[${36 - DD + 27 + 1}-...] \tSố đại diện (GĐ):`, sum(namSinh));

    // console.log('\nTRUNG NIÊN (Divine Purpose) (TN)', TN);
    // console.log('\n=== GIA ĐOẠN TRUNG NIÊN ===');
    // console.log(`Giai đoạn 1 \t[${36 - DD}-${36 - DD + 9}]  \tSố đại diện (GĐTN):`, TD);
    // console.log(
    //     `Giai đoạn 2 \t[${36 - DD + 9 + 1}-${36 - DD + 9 + 9}]  \tSố đại diện (GĐTN):`,
    //     sum([...ngaySinh, ...namSinh])
    // );
    // console.log(
    //     `Giai đoạn 3 \t[${36 - DD + 9 + 9 + 1}-${36 - DD + 9 + 9 + 9}]  \tSố đại diện (GĐTN):`,
    //     sum([TD, ...ngaySinh, ...namSinh])
    // );
    // console.log(
    //     `Giai đoạn 4 \t[${36 - DD + 9 + 9 + 9 + 1}-...]  \tSố đại diện (GĐTN):`,
    //     sum([...thangSinh, ...namSinh])
    // );

    // LẤY NĂM, THÁNG, NGÀY HIỆN TẠI
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // Băm số thành array
    const numberToTextArray = (input) => {
        let result = input.toString().split('');
        result = result.map((c) => Number(c));
        // console.log(result);
        return result;
    };

    // Năm thế giới
    const namTheGioi = sum(numberToTextArray(currentYear));
    // console.log('Năm Thế Giới:', namTheGioi);

    // Năm cá nhân = Năm Thế Giới + Thái Độ
    const namCaNhan = sum([namTheGioi, TD]);

    // Rung động tuổi: tính tuổi hiện tại rồi sum lại.
    const tuoiHienTai = currentYear - Number(namSinh.join(''));
    const rungDongTuoi = sum(numberToTextArray(tuoiHienTai));

    // Tháng cá nhân = Năm Cá Nhân + Tháng Hiện tại
    const thangCaNhan = sum([namCaNhan + currentMonth]);

    // Ngày cá nhân = Tháng cá nhân + ngày theo lịch
    const ngayCaNhan = sum([namCaNhan, currentMonth, currentDay]);

    const lyGiaiThangCaNhan = {
        1: 'NĂNG LƯỢNG MỚI, KẾ HOẠCH MỚI. Đây là tháng để bắt tay vào những kế hoạch mới, khởi đầu những điều mới. Các cơ hội mới sẽ đến với bạn, nên đừng ngại nắm bắt chúng. Đây cũng là thời điểm thích hợp để nắm bắt, hạ quyết tâm và suy nghĩ quyết đoán, nhằm kiểm soát tay lái điều khiển cuộc đời mình và nắm quyền chỉ huy. Hãy dũng cảm khác biệt, đổi mới và làm những điều bạn chưa bao giờ làm.',
        2: 'LẮNG NGHE NHIỀU HƠN, KIÊN NHẪN, CÁC MỐI QUAN HỆ. Đây là thời gian để bạn dành thời gian cho những người bạn quan tâm. Bạn nên dành thời gian để thu thập dữ liệu và học tính kiên nhẫn, bạn nên lùi lại một bước và nhẫn nại. Tìm kiếm sự cân bằng, bình yên, hòa hợp trong các mối quan hệ của bạn và sẵn sàng hợp tác với người khác. Hàn gắn những tổn thương trong quá khứ, biểu đạt cảm xúc của mình một cách lành mạnh, cũng như sẵn sàng đón nhận tình yêu.',
        3: 'THỂ HIỆN BẢN THÂN, GIAO LƯU, SÁNG TẠO, CHIA SẺ. Đây là tháng bạn dành thời gian cho bản thân, vui chơi, giao lưu tìm kiếm cơ hội. Dù chuyện gì đang xảy ra trong cuộc sống của bạn đi chăng nữa thì việc giữ thái độ lạc quan vẫn là rất quan trọng. Đây cũng là thời điểm để thể hiện bản thân cũng như chia sẻ những suy nghĩ và cảm nhận của bạn một cách thật lòng.',
        4: 'LÊN KẾ HOẠCH, NỖ LỰC, XÂY DỰNG, TRÁCH NHIỆM. Đây là thời gian giải quyết những vấn đề mà bạn đã bỏ qua, là tháng tuyệt vời để bạn thiết lập những kê hoạch, mục tiêu. Đây là lúc bạn phải làm việc chăm chỉ và nỗ lực trong mọi lĩnh vực của cuộc sống, bởi nỗ lực sẽ mang lại thành quả. Cố gắng đạt sự ổn định và xây dựng một nền móng vững chãi. Hãy lên kế hoạch trước, đừng trì hoãn hay lãng phí thời gian. Kiên trì vượt qua mọi thử thách và đừng bao giờ bỏ cuộc.',
        5: 'TỰ DO, DỊCH CHUYỂN, PHIÊU LƯU, THAY ĐỔI. Đây là tháng bạn nên thay đổi, bươc ra khỏi vùng an toàn. Hãy linh hoạt và tập thích nghi cho sự thay đổi mới. Nếu bạn đang muốn thay đổi điều gì trong cuộc sống thì đây là lúc làm điều đó. Đây là một tháng năng động và có nhịp độ nhanh nên hãy tập trung và phân bổ thời gian hợp lý, và đừng bắt tay vào làm quá nhiều việc. Hãy kết giao và quảng bá hình ảnh của bản thân.',
        6: 'YÊU THƯƠNG, BAO DUNG, TRÁCH NHIỆM, GIA ĐÌNH. Đây là tháng bạn nên thể hiện tình yêu thương, trách nhiệm với gia đình và xã hội. Hãy dành thời gian cho những người cần bạn giúp đỡ, quan tâm hay ở bên, cũng như giành thời gian yêu thương đứa trẻ bên trong bạn. Các vấn để còn tồn tại sẽ trở nên nổi cộm và cần được giải quyết. Đây là lúc để cải thiện các mối quan hệ của bạn, cũng như tập trung vào việc cho đi và nhận lại tình yêu.',
        7: 'CHIÊM NGHIỆM, SUY NGẪM, TÂM LINH. Đây là tháng bạn nên lui lại, dành thời gian một mình yên tĩnh để suy nghĩ về cuộc sống và mục đích hướng tới. Đây cũng là lúc để tìm lại sợi dây kết nối tâm linh trong bạn và tập trung vào việc trở thành một con người tốt hơn. Hãy tìm cách nâng cao sức khỏe và thử những phương pháp thay thế như yoga và thiền định.',
        8: 'HIỆN THỰC HÓA SỨC MẠNH CÁ NHÂN VÀ SỰ NGHIỆP TÀI CHÍNH. Đây là tháng bạn nên dành thời gian cân bằng lịch trình làm việc, phát triển bản thân và sắp xếp lại các khoản chi tiêu. Đây là thời điểm thuận lợi để có những thay đổi trong sự nghiệp: Hãy tham vọng lên, bảo vệ tiếng nói bên trong của bản thân và bắt tay vào hành động. Bạn cũng đừng ngại tiếp thu thái độ giàu có và suy nghĩ một cách tích cực, vì số 8 chính là con số của sự hiện thực hóa.',
        9: 'THAY ĐỔI, THA THỨ, KẾT THÚC. Đây là tháng của kết thúc và thay đổi, vì thế hãy buông bỏ những điều củ dọn đường cho cái mới. Từ bỏ các thói quen xấu, những người không tốt, hay bất cứ điều gì bạn không còn cần đến trong cuộc sống. Đừng ái ngại khi phải chấm dứt một điều gì đó, vì những cơ hội tốt hơn đang chờ bạn ở phía trước. Hãy tha thứ cho những bất hạnh của cuộc đời mình và hướng về tương lai.'
    };

    // Lý giải Năm cá nhân
    // https://sohocmattroi.com/than-so-hoc-so-4/

    const lyGiaiNamCaNhan = {
        1: 'Sự bắt đầu.\nNăm đầu tiên trong chu kỳ 9 năm nhân số học sẽ là năm của sự sáng tạo, gieo hạt cho những sự kiện mới, cơ hội mới và tràn đầy tự tin. Cũng là năm chúng ta lên kế hoạch cho những mục tiêu mới.\nĐây là một năm của những hành động phát triển cá nhân mạnh mẽ. Sức mạnh của năm này thúc đẩy chúng ta dám trở nên đặc biệt và phát triển lòng tự tin.\nĐây cũng là một năm phù hợp để chúng ta phá bỏ những thói quen cũ. Bên cạnh đó việc hình thành lối sống mới chắc chắn đòi hỏi ta có sự kiên trì cao độ. ',
        2: 'Sự cân bằng, tình yêu thương.\nNăm số 2 của chu kỳ 9 năm thần số học là thời điểm bạn nên đặt sự ưu tiên dành cho bản thân và các mối quan hệ xung quanh. Bạn nên dành nhiều thời gian quan tâm cho gia đình và những người thân yêu dưới mọi hình thức.\nĐây là một năm diễn biến chậm, không phải là năm của sự thay đổi. Năm này đòi hỏi bạn phải có sự kiên trì, nhẫn nại. Có thể xem năm nay được thiết kế cho bạn nghỉ ngơi và phát triển về nhận thức tâm linh.',
        3: 'Truyền cảm hứng, phát triển bản thân.\nKhi bước vào năm số 3 trong chu kỳ 9 năm nhân số học, bạn cần mở rộng tầm mắt, trí não để phát triển bản thân. Bạn có thể tham gia một khóa học, hay một chuyến đi nào đó. Và điều quan trọng, bạn hãy nhận thức rằng đây là năm phát triển trí não.\nĐây cũng là năm chúng ta nên cân bằng cuộc sống. Dành thời gian cho những niềm vui, các buổi tụ tập cùng bạn bè để tận hưởng cuộc sống. Tuy nhiên đây cũng là năm nhạy cảm. Sẽ chứa đựng những cảm xúc bị tổn thương và nỗi nghi ngờ sẽ xuất hiện. ',
        4: 'Củng cố nội lực (điểm trũng lần 1 trong chu kỳ 9 năm nhân số học).\nĐây là năm trũng đầu tiên trong chu kỳ 9 năm của đời người. Bạn cần nghỉ ngơi và duy trì sự ổn định sẽ là điều kiện tốt giúp củng cố lại năng lượng cho chu kỳ 5 năm tiếp theo. Các yếu tố về thể chất, tiền tài sẽ được xem là chạm đáy trong năm này.\nĐây được xem là một năm để bạn nghiêm túc trau dồi kỹ năng và cũng cố nội lực nhằm tạo dựng nền tảng vững chắc cho công việc, cho các mối quan hệ, sức khỏe hay gia đình của bạn. ',
        5: 'Sự phiêu lưu và tự do.\nĐây là năm bắt đầu với một sự bùng nổ, nhộn nhịp với nhiều trải nghiệm và niềm vui, là năm mà năng lượng tự do được kích hoạt rõ nét nhất. Năm nay có rất nhiều cuộc vui nhưng mục đích là để rèn luyện tính kỷ luật của bạn.\nĐây là năm không có gì là chắc chắn, không có kế hoạch và luôn có cảm giác hồi hộp nhất định. Đây không phải là thời điểm mà bạn nên lựa chọn để cam kết lâu dài, vì còn rất nhiều thứ thú vị để bạn thử.\nNăm số 5 trong chu kỳ 9 năm thần số học mang đến rất nhiều cơ hội để đối mặt với nỗi sợ của bản thân. Giúp bạn loại bỏ những hạn chế và khơi dậy cảm giác phiêu lưu. ',
        6: 'Sự yêu thương.\nKhi bước qua năm này, bạn cần tập trung năng lượng yêu thương cho gia đình và các mối quan hệ cá nhân nhiều hơn. Bạn cần quay về tập trung thể hiện tình cảm với gia đình của mình.\nTrong năm nay, bạn sẽ cần cân bằng giữa sự nghiệp và trách nhiệm trong gia đình. Và tìm ra điểm trung gian giữa việc thể hiện sự quan tâm cho người khác và tôn vinh chính bạn.\nĐây cũng là thời điểm vô cùng thuận lợi để những người độc thân tìm kiếm sự lãng mạn vì tình yêu sẽ đến với bạn. Đây cũng là một năm để tập trung vào sức khỏe của bạn. Thực hiện cam kết, kết hôn hoặc bắt đầu một gia đình.\nBằng cách tôn trọng trách nhiệm của bạn và ở đó cho những người cần bạn có thể biến điều này thành một năm rất hiệu quả. ',
        7: 'Nội tâm, suy ngẫm.\nĐây là năm thứ 2 trong chu kỳ 9 năm thần số học rơi vào điểm trũng sau năm số 4. Đây cũng là giai đoạn gần kết thúc chu kỳ 9 năm của đời người. Chính vì thế giai đoạn này bạn không thể tập trung vào công việc hay đạt được những thành tựu gì về tài chính.\nNăm này được xem là thời điểm thích hợp để bạn phát triển tâm linh, chiêm nghiệm. Bạn sẽ cảm thấy đây là thời điểm mà niềm tin và sự tin tưởng của mình đang được thử thách.\nNăm số 7 được xem là năm trũng, giống như năm số 4. Bạn cần tập trung vào bản thân nhiều hơn, phát triển bản thân. Không nên hướng ra ngoài và có những sự thay đổi quá lớn.\nNăm này đầy rẫy việc buông bỏ và mất mát. Có thể là các vấn đề về sức khỏe, tình cảm hay sự kiện khác. ',
        8: 'Trí tuệ và quyền lực.\nBước qua được năm trũng cuối cùng trong chu kỳ. Đây sẽ là năm mang lại cơ hội cho những người mong muốn gặt hái được thành quả trong 7 năm qua. Sau khoảng thời gian phát triển bản thân, đã đến lúc bạn bước ra ngoài và gặt hái thành quả.\nNăm số 8 là năm tốt nhất cho sự nghiệp kinh doanh cũng như tài chính cá nhân của bạn. Bạn sẽ đạt đến đỉnh cao trong sự nghiệp của mình với nhiều lời mời và cơ hội cực kỳ hấp dẫn. Có thể xem đây là năm phản ánh lại kết quả mà bạn đã trải qua. ',
        9: 'Kết thúc chu kỳ.\nĐây là năm cuối của chu kỳ 9 năm thần số học khép lại một chu kỳ cũ và mở ra một chu kỳ mới. Thời điểm này bạn có thể đưa ra một quyết định nào đó cho một công việc hoặc một mối quan hệ.\nNhững thay đổi này rất đa dạng có thể như chuyển nhà, thay đổi môi trường sống. Thay đổi công việc, hoặc ngay cả việc kết thúc một mối quan hệ. Không phải kết thúc lúc nào cũng buồn.\nNăm thứ 9 là năm của kết thúc, của sự hoàn tất mọi việc. Đây là lúc để bạn nhìn lại và hiểu rằng tất cả mọi chu kỳ đều có điểm bắt đầu và điểm kết thúc. Và nó sẽ bắt đầu một chu kỳ mới.\nNhững níu kéo sẽ không còn có ý nghĩa gì nữa khi mọi thứ đã qua đi. Hãy đón nhận chu kỳ mới và biết ơn những cơ hội của bạn. '
    };

    // Lý giải ngày cá nhân
    const lyGiaiNgayCaNhan = {
        1: 'Đây là ngày của những ý tưởng tuyệt vời, là ngày để bắt đầu một điều gì đó. Tập trung vào bản thân, nhưng đừng ích kỷ hay bướng bỉnh. Đã đến lúc phải dứt khoát, tham vọng và tự tin hành động.',
        2: 'Hãy kiên nhẫn và tập trung vào chi tiết. Làm việc dựa trên các mối quan hệ và hợp tác. Đây là một ngày nhẹ nhàng. Bạn sẽ cảm thấy nhạy cảm và có thể có những giấc mơ sống động.',
        3: 'Hãy sáng tạo, dành thời gian cho bạn bè và giao tiếp. Chấp nhận bất kỳ lời mời nào bạn nhận được. Thực hành lòng biết ơn. Tránh hành vi đặc quyền. Đây là một ngày may mắn!',
        4: 'Học cách có tổ chức, quy củ. Chú trọng đến các khỏe. Tránh sự cứng nhắc, kín kẽ hoặc kiểm soát. Đừng trì hoãn. Tập trung vào chi tiết để tiến gần hơn đến mục tiêu của bạn. Làm theo các quy tắc nếu không bạn sẽ phải đối mặt với hậu quả.',
        5: 'Hãy thay đổi, mở rộng và thúc đẩy các mối quan hệ. Tránh hành xử quá bốc đồng. Tập trung năng lượng. Sẵn sàng đón nhận sự thay đổi, ngày của bạn có thể không diễn ra như kế hoạch.',
        6: 'Quan tâm đến gia đình, vật nuôi và ngôi nhà của bạn. Trang trí và làm đẹp xung quanh. Hãy lưu tâm đến ý kiến mạnh mẽ của riêng bạn. Tập trung vào các vấn đề trong nhà và trao đi năng lượng chăm sóc, nuôi dưỡng của mình. Gặp bác sĩ trị liệu, làm tóc, học thêm điều gì đó mới.',
        7: 'Đây là thời gian cho sự yên tĩnh. Nghỉ ngơi và nhìn nhận lại mọi thứ. Suy ngẫm. Dành thời gian ở ngoài trời, gần với thiên nhiên hoặc đọc sách. Bạn có thể cảm thấy muốn ở một mình. Hãy tiên chăm sóc bản thân trong ngày này.',
        8: 'Quản lý tiền của bạn, yêu cầu tăng lương, thu nợ, thanh toán hóa đơn, trả phí. Hãy cẩn thận để không lặp lại bài học hoặc sai lầm. Chú tâm đến công việc để tiến bộ và thành công. Không có bài học Nghiệp trong ngày này. Bạn có thể gặp vấn đề với chính quyền.',
        9: 'Kết thúc mọi thứ. Hãy giải phóng và bao dung. Thực hiện những việc làm tử tế ngẫu nhiên. Cho đi một thứ gì đó. Hoàn thiện các dự án và hoàn tất các chi tiết dang dở.'
    };

    // Lý giải Số Đường Đời
    const lyGiaiSoDuongdoi = {
        1: '<p><em><strong>THỦ LĨNH</strong></em></p><p>Người C&oacute; Con Số Đường Đời 1 l&agrave; người năng động, tự lập v&agrave; cần mẫn. Họ muốn ho&agrave;n th&agrave;nh mọi việc một c&aacute;ch tốt nhất, v&agrave; hầu như lu&ocirc;n th&agrave;nh c&ocirc;ng.</p><p>Người số 1 kh&ocirc;ng th&iacute;ch nhờ sự trợ gi&uacute;p, bởi họ lu&ocirc;n muốn tự m&igrave;nh thực hiện c&ocirc;ng việc. Khi họ đ&atilde; quyết định th&igrave; rất kh&oacute; c&oacute; thể l&agrave;m họ thay đổi.</p><p>Họ c&oacute; thể trở th&agrave;nh doanh nh&acirc;n hay nh&agrave; cải c&aacute;ch xuất sắc nhờ v&agrave;o long đam m&ecirc; của m&igrave;nh. Họ cũng c&oacute; thể l&agrave; b&aacute;c sĩ, nh&acirc;n vi&ecirc;n chăm s&oacute;c người bệnh hay nh&agrave; văn, chủ nh&agrave; h&agrave;ng&hellip;</p>',
        2: '<p><em><strong>NGƯỜI HO&Agrave; GIẢI</strong></em></p><p>Con Số Đường đời 2 ứng với những người đang t&igrave;m kiếm sự tổng h&ograve;a trong cuộc sống. Họ c&oacute; mặt ở đ&acirc;y để y&ecirc;u v&agrave; được y&ecirc;u. Như &acirc;m nhạc mang đến hiệu ứng nhẹ nh&agrave;ng, họ l&agrave; người khoan dung.</p><p>Nếu bạn cần ai đ&oacute; đồng cảm, h&atilde;y t&igrave;m đến số &ldquo;2&rdquo;, v&igrave; họ th&iacute;ch những c&aacute;i &ocirc;m v&agrave; những nụ h&ocirc;n. Họ cần v&agrave; sẵn l&ograve;ng trao cho nhau t&igrave;nh y&ecirc;u v&agrave; cảm x&uacute;c. Đến với họ khi ng&atilde; l&ograve;ng, v&igrave; y&ecirc;u thương trọn vẹn l&agrave; lẽ sống tự nhi&ecirc;n của họ.</p><p>Người c&oacute; Chỉ S&ocirc; Đường Đời &ldquo;2&rdquo; l&agrave; người h&ograve;a giải, họ giỏi giải quyết c&aacute;c xung đột v&agrave; họ sẽ l&agrave;m hết sức để tr&aacute;nh ch&uacute;ng.</p>',
        3: '<p><em><strong>NGƯỜI TRUYỀN ĐẠT</strong></em></p><p>Khi Shakespeare viết rằng, &ldquo;Thế giới l&agrave; tấn tr&ograve; đời&rdquo;, tức l&agrave; &ocirc;ng dang mi&ecirc;u tả về số Đường Đời 3, người lu&ocirc;n lu&ocirc;n thể hiện m&igrave;nh tr&ecirc;n s&acirc;n khấu ch&iacute;nh. Số &ldquo;3&rdquo; th&iacute;ch sự s&aacute;ng tạo, giao thiệp, v&agrave; kết nối mọi người. Họ l&agrave; nghệ sĩ bẩm sinh. Họ th&iacute;ch được lắng nghe, v&igrave; thế bạn sẽ thường kiếm được họ tr&ecirc;n danh bạ!</p><p>Trong c&aacute;c mối quan hệ c&aacute; nh&acirc;n, số &ldquo;3&rdquo; thuộc tu&yacute;p người l&atilde;ng mạn. Họ rất chung thủy v&agrave; kh&oacute; l&ograve;ng qu&ecirc;n được những h&igrave;nh b&oacute;ng cũ. Thậm ch&iacute; khi mọi chuyện đ&atilde; kết th&uacute;c, họ vẫn kh&ocirc;ng thể từ bỏ.</p>',
        4: '<p><em><strong>NGƯỜI THẦY</strong></em></p><p>Số Đường Đời 4 l&agrave; con số của tr&iacute; tuệ. Họ th&iacute;ch t&igrave;m t&ograve;i v&agrave; sinh ra đ&atilde; l&agrave; người thầy. Họ thường đeo cặp k&iacute;nh tri thức m&agrave; t&ocirc;i gọi họ l&agrave; &ldquo;cỗ m&aacute;y con người&rdquo; &ndash; tỷ như Bill Gates c&oacute; l&agrave; số &ldquo;4&rdquo; th&igrave; cũng kh&ocirc;ng lạ g&igrave;. Cuộc sống của họ l&agrave; một phương tr&igrave;nh logic: A cộng B phải bằng c.</p>',
        5: '<p><em><strong>LỮ KH&Aacute;CH</strong></em></p>        <p>Số Đườ** đời 5 y&ecirc;u tự do, vui vẻ v&agrave; phi&ecirc;u lưu. Họ th&iacute;ch sự đa dạng; họ c&oacute; thể thay đổi lề th&oacute;i l&agrave;m việc h&agrave;ng ng&agrave;y v&igrave; họ rất mau ch&aacute;n. Loại rung động n&agrave;y cần sự k&iacute;ch th&iacute;ch bền vững. Họ sống trong đ** m&ecirc;. &ldquo;*** qu&ecirc;n sầu&rdquo; l&agrave; tr&ograve; chơi của số &ldquo;5&rdquo;.</p>        <p>Số &ldquo;5&rdquo; của ch&uacute;ng ** cũng l&agrave; nhữ** th&aacute;m tử bẩm sinh. Họ th&iacute;ch t&igrave;m hiểu chuyện g&igrave; thực sự đ&atilde; xảy ra. Nếu họ nghĩ ai đ&oacute; thiếu trung thực, họ sẽ t&igrave;m kiếm manh mối để vạch trần. Họ kh&ocirc;ng th&iacute;ch cảm gi&aacute;c bị qua mặt.</p>',
        6: '<p><em><strong>NGƯỜI MẸ</strong></em></p><p>Số Đường đời 6 l&agrave; những phụ ***** bẩm sinh, người lu&ocirc;n quan t&acirc;m đến người kh&aacute;c dưới c&aacute;i nh&igrave;n của bậc l&agrave;m cha l&agrave;m mẹ. Số &ldquo;6&rdquo; quan niệm rằng: T&igrave;nh y&ecirc;u v&agrave; h&ocirc;n nh&acirc;n l&agrave; kh&ocirc;ng thể t&aacute;ch rời.</p>',
        7: '<p><strong><em>NGƯỜI T&Igrave;M KIẾM ĐỨC TIN</em></strong></p><p>Số Đườ** đời 7 c&oacute; đức tin từ nhỏ. Nếu số &ldquo;7&rdquo; kh&ocirc;ng c&oacute; đức tin, họ thấy cuộc đời m&igrave;** kh&ocirc;ng thật sự hạnh ph&uacute;c. Điều n&agrave;y kh&ocirc;ng c&oacute; nghĩa l&agrave; họ sẽ đặt niềm tin v&agrave;o một t&ocirc;n gi&aacute;o n&agrave;o đ&atilde; định sẵn &ndash; m&agrave; niềm tin đến từ những thứ kh&aacute;c.</p><p>Nhưng kh&ocirc;ng thể phủ nhận c&oacute; một nguồn năng lượng t&acirc;m linh to&aacute;t ra từ họ. Nếu như *** bạn thuộc số &ldquo;7&rdquo;, khi thằng b&eacute; (hay con b&eacute;) ngủ, tr&ocirc;ng n&oacute; như một thi&ecirc;n thần vậy.</p><p>Thật l&agrave; may mắn cho ch&uacute;ng ta nếu được như thế, v&igrave; lũ trẻ, thậm ch&iacute; khi lớn, vẫn giữ m&atilde;i thứ t&acirc;m hồn tuyệt vời n&agrave;y.</p>',
        8: '<p><em><strong>NGƯỜI ĐIỀU H&Agrave;NH</strong></em></p><p>Số Đường Đời 8 xuất sắc với khả năng điều h&agrave;nh, v&agrave; cũng l&agrave; con số của những ch&iacute;nh kh&aacute;ch. N&oacute; l&agrave; con số quyền lực, điều n&agrave;y cũng c&oacute; nghĩa l&agrave;, khi số 8 muốn kiểm so&aacute;t, họ sẽ l&agrave;m mọi thứ với hy vọng tạo ** sự kh&aacute;c biệt t&iacute;ch cực đến to&agrave;n thế giới.</p>',
        9: '<p><em><strong>NGƯỜI THEO CHỦ NGHĨA NH&Acirc;N ĐẠO</strong></em></p><p>Số Đường Đời 9 l&agrave; số tiến h&oacute;a cao nhất trong Thần số học, v&agrave; được coi như l&agrave; một ***** những rung động mạnh mẽ nhất, bởi v&igrave; n&oacute; chứa đự** những tinh t&uacute;y của tất cả c&aacute;c con số kh&aacute;c.</p><p>*** số &ldquo;9&rdquo; c&oacute; được nền tảng tinh thần mạnh mẽ, họ trở th&agrave;nh nguồn s&aacute;ng của cả thế giới. Thật vậy, số &ldquo;9&rdquo; l&agrave; người c&oacute; l&ograve;ng vị tha.</p><p>Đ&acirc;y cũng l&agrave; những rung động đơn c&oacute; sự quyết t&acirc;m *** nhất. Loại Đường đời n&agrave;y c&oacute; &yacute; ch&iacute; mạnh mẽ để **** đuổi đến c&ugrave;ng, bằng tham vọng v&agrave; nghị lực phi thường, những g&igrave; m&igrave;nh tin tưởng.</p><p>Những con số Đường đời dạy cho ch&uacute;ng ta nhiều thứ. Ch&uacute;ng chỉ ra ưu cũng như khuyết điểm của mỗi ch&uacute;ng ta. Như** nếu khi bạn xem nhữ** m&ocirc; tả về m&igrave;nh v&agrave; nghĩ &ldquo;Điều đ&oacute; sao c&oacute; vẻ chả giống m&igrave;nh?&rdquo;, th&igrave; liệu Thần số học l&agrave; c&oacute; thứ kh&ocirc;** d&agrave;nh cho bạn? Ho&agrave;n to&agrave;n kh&ocirc;ng phải thế.</p><p>Bạn n&ecirc;n biết rằng c&ograve;n c&oacute; đến 4 loại số kh&aacute;c, cộng th&ecirc;m cả con số Th&aacute;i độ nữa. Để ch&iacute;nh x&aacute;c, việc xem x&eacute;t c&aacute;c con số **** hồn, Nh&acirc;n c&aacute;ch, T&ecirc;n ri&ecirc;ng, Ng&agrave;y sinh sẽ gi&uacute;p bạn hiểu th&ecirc;m những g&igrave; c&ograve;n thiếu nhất qu&aacute;n từ số Đườ** đời của bạn.</p>'
    };

    // const sampleResult = {
    //     1: 'Sample 1',
    //     2: 'Sample 2',
    //     3: 'Sample 3',
    //     4: 'Sample 4',
    //     5: 'Sample 5',
    //     6: 'Sample 6',
    //     7: 'Sample 7',
    //     8: 'Sample 8',
    //     9: 'Sample 9'
    // };

    const lyGiaiSoLinhHon = {
        1: 'Bạn có nhu cầu sâu sắc về việc phải trở thành số 1 trong mọi việc bạn làm. Bạn luôn muốn độc lập, phát huy cá tính của mình, dẫn đầu và đạt được bất cứ điều gì mình đặt ra. Bạn muốn trở thành người giỏi nhất trong mọi việc bạn làm, bạn đặt ra những tiêu chuẩn cao về bản thân cũng như mong đợi điều tương tự từ người khác. Bạn là người có trí thông minh tuyệt vời, có sự hiểu biết sâu sắc, luôn sáng tạo và đổi mới. Bạn chính là ví dụ sống cho việc làm hết sức chơi hết mình.',
        2: 'Bạn có nhu cầu yêu và được yêu một cách sâu sắc. Bạn luôn muốn tạo ra sự hài hòa, cân bằng, hợp tác và yêu thương mọi lúc mọi nơi, trong bất cứ công việc gì bạn làm, với bất cứ ai bạn gặp. Tình yêu chính là nền tảng cho ước muốn của trái tim bạn. Việc tìm kiếm một người bạn đời hoàn hảo là việc rất quan trọng với bạn. Bạn là một người giỏi thích nghi, có tính kiên nhẫn và tập trung cao. Bạn phát triển mạnh mẽ khi có bạn đồng hành hay làm việc theo nhóm.',
        3: 'Bạn có nhu cầu giao tiếp sâu sắc để truyền cảm hứng, động lực, chữa lành và nâng cao tinh thần cho mọi người. Bạn luôn mong muốn được thể hiện khả năng của bản thân mình. Tuy nhiên, bạn luôn che giấu cảm xúc thật của mình bằng sự hài hước và nói liên tục. Bạn sẽ luôn cảm thấy tràn đầy cảm xúc, và tâm trạng của bạn đôi khi giống như một chiếc tàu lượn siêu tốc. ',
        4: 'Bạn có nhu cầu sâu sắc để tạo ra thứ gì đó có giá trị cho mọi người xung quanh. Bạn là người ổn định, an toàn, chăm chỉ và luôn mong muốn tạo ra những giá trị lâu dài, bền vững. Bạn là một người thực tế và có trật tự. Đôi khi bạn khá cứng nhắc và bướng bỉnh. Mặc dù là người có thể hi sinh quên mình nhưng bạn thường tỏ ra là người lạnh lùng, xa cách. Bạn tiếp cận mọi thứ với một thái độ thực tế, kể cả là tình yêu, bởi vậy mà nhiều người cho rằng bạn là một người kém lãng mạn.',
        5: 'Bạn có nhu cầu sâu sắc tạo ra sự thay đổi, nắm lấy tự do và phiêu lưu. Tự do chính là động lực trong cuộc sống của bạn. Bạn luôn tìm kiếm cảm giác không bị gò bó, giới hạn trong bất cứ việc gì, dù là công việc hay mối quan hệ. Bạn là người nhiệt tình, dễ sàng kết bạn, thú vị và thường có mong muốn giải cứu thế giới. Bạn thích sự bí ẩn và bản thân bạn cũng là một người bí ẩn.',
        6: 'Bạn có nhu cầu sâu sắc trong việc yêu thương, nuôi dưỡng và chăm sóc những người thân yêu. Bạn sinh ra đã mang tố chất của một nhà cố vấn, bạn có thể nhìn thấy bức tranh toàn cảnh trong khi những người khác không thể. Bạn cũng là một người theo chủ nghĩa lý tưởng. Bạn có xu hướng muốn làm hài lòng mọi người xung quanh, bạn muốn có được cảm giác người khác cần bạn nhưng lại bực bội khi người khác dựa dẫm vào bạn quá nhiều.',
        7: 'Bạn có nhu cầu sâu sắc trong việc phát triển niềm tin và đi tìm câu trả lời cho riêng mình về ý nghĩa của cuộc sống. Bạn có nhu cầu cháy bỏng là tìm kiếm kiến thức và tri thức. Bạn muốn đào sâu và chiêm nghiệm. Bạn thích nghiên cứu và bạn dành cả cuộc đời để đi tìm con người thật của mình. Mong muốn từ trái tim của bạn dẫn bạn vào một cuộc hành trình rất "nội tâm". Bạn cần nhiều thời gian riêng tư ở một mình hơn những người khác.',
        8: 'Bạn có nhu cầu sâu sắc về việc đạt được sự tự do tài chính và tạo ra sự khác biệt. Mong muốn sâu thẳm của bạn là đạt được thành công. Bạn làm việc không ngừng nghỉ và luôn sử dụng tất cả khả năng của mình để theo đuổi sự dư dả về tài chính. Bạn có ước mơ lớn và không ngại vất vả, khó khăn. Bạn có tiềm năng đáng kinh ngạc trong việc cải thiện cuộc sống của rất nhiều người. Bạn là một nhà lãnh đạo bậc thầy và có thể tạo ra được sự thành công về vật chất. Tuy nhiên, cho đi một cách hào phóng từ trái tim mình cũng là sứ mệnh của bạn.        ',
        9: 'Bạn có nhu cầu sâu sắc để đạt được trạng thái ý thức cao hơn. Bạn ở đây để yêu thương người khác vô điều kiện. Bạn sống có lý tưởng và dễ cảm thấy bị thất vọng khi mọi người không thể đáp ứng được kỳ vọng của bạn. Bạn cũng là một người nhạy cảm, vị tha, có trực giác mạnh mẽ. Bạn chu đáo và sống theo cảm xúc nhiều hơn lý trí. Bạn luôn có cảm giác bản thân có trách nhiệm với hạnh phúc của mọi người.'
    };

    const lygiaiSoNhanCach = {
        1: 'Nếu bạn có số nhân cách 1 thì bạn là người có ý chí mạnh mẽ và rất kiên định. Ở bạn luôn toát ra một nguồn năng lượng tích cực, năng động nhưng cũng đầy tham vọng. Bạn luôn biết cách kiểm soát tình hình và có khả năng đạt được bất kì điều gì mình đặt ra. Tuy nhiên, một điều mà bạn cần lưu ý, đó là hãy cảnh giác với việc bị mọi người coi là người tự cao tự đại và thiếu hiểu biết.',
        2: 'Người có số nhân cách 2 là những người rất tốt bụng, thân thiện, ấm áp. Ngoài ra, còn là những người rất khiêm tốn. Bạn rất giỏi trong việc giao tiếp, luôn cởi mở và giúp đỡ những người xung quanh. Cũng vì vậy mà mọi người thường tìm đến bạn để nhờ giúp đỡ. Cũng có đôi khi, bạn bị coi là người thiếu quyết đoán và hay thúc ép người khác.',
        3: 'Nếu có số nhân cách 3 thì bạn là người có khả năng sáng tạo cao và đặc biệt rất quyến rũ. Bạn cũng là người khá hóm hỉnh và hài hước. Với tính cách hướng ngoại, luôn lạc quan và mang trong mình nguồn năng lượng sống tích cực nên bạn thường hấp dẫn người khác phái hơn những người khác. Đôi khi bạn hơi phóng đại quá mức và tỏ ra hời hợt với một số người.',
        4: 'Số nhân cách này thường là người rất đáng tin cậy và ổn định. Bạn sống có lập trường vững vàng, không bị ảnh hưởng bởi lời nói của người khác. Bên cạnh đó, đây cũng là người có khả năng phán đoán và phân tích tình hình tốt, bạn luôn hoàn thành tốt những công việc được giao, đặc biệt luôn đưa ra được quyết định đúng đắn trong những tình huống khó khăn hay khẩn cấp. Tuy nhiên, người này có thể đôi khi quá tiết kiệm và quá nghiêm túc.',
        5: 'Người có số nhân cách 5 thường là người ưa thích mạo hiểm, và thích cảm giác mạnh, kích thích. Họ cũng là những người vui vẻ, có cá tính và thích phiêu lưu. Chính những đặc điểm này của bạn khiến người khác ghen tị. Ngoài ra, người này cũng là người có sức ảnh hưởng đến mọi người xung quanh. Tuy nhiên, vẻ ngoài xa cách của bạn có thể khiến mọi người nghĩ bạn là người không đáng tin và vô tâm.',
        6: 'Số nhân cách 6 thường là những người ấm áp, tốt bụng, luôn quan tâm và giúp đỡ người khác. Mọi người thường tìm đến bạn để chia sẻ hoặc tâm sự vì cảm thấy bạn là chỗ dựa vững chắc của họ. Tuy nhiên đây cũng là nhược điểm của bạn vì bạn dễ dàng bị lợi dụng hơn.',
        7: 'Những người có số nhân cách là 7 thường rất nghiêm túc, luôn tỏ ra bí mật và có tính cách hướng nội. Vì bạn thường thu mình lại nên mọi người xung quanh khó có thể biết được con người thật của bạn. Bạn cũng là người rất thông minh và độc lập nên được mọi người tin tưởng và tôn trọng. Tuy vậy, đôi khi bạn trở thành người cố chấp và kiêu ngạo trong mắt người khác.',
        8: 'Người có số nhân cách 8 thường mang rất nhiều tham vọng và thích cạnh tranh. Bạn có năng lực nên cũng rất tự tin vào bản thân mình. Trong mắt mọi người bạn là người giỏi giang, cầu toàn, quyết đoán và có óc kinh doanh tốt. Tuy nhiên, đôi khi bạn tỏ ra khá ích kỷ và tham lam.',
        9: 'Nếu bạn có số nhân cách 9, thì bạn là người có vẻ ngoài lôi cuốn và quý phái. Bạn thường là người truyền cảm hứng và có ảnh hưởng sâu sắc đến mọi người xung quanh. Cũng vì nhận được nhiều sự theo dõi và ngưỡng mộ của người khác nên đôi khi bạn tỏ ra kiêu ngạo và điều này khiến mọi người thực sự không muốn lại gần.'
    };

    const lygiaiSoThaiDo = {
        1: '<p>Bạn kh&ocirc;ng th&iacute;ch nhờ người kh&aacute;c gi&uacute;p đỡ.</p><p>Bạn tự chủ ho&agrave;n to&agrave;n.</p><p>Bạn thường c&oacute; vấn đề về l&ograve;ng tự trọng v&igrave; nghĩ rằng m&igrave;nh kh&ocirc;ng đủ giỏi.</p><p>V&igrave; vậy bạn cần được khen ngợi, nếu kh&ocirc;ng được tin tưởng bạn sẽ nổi loạn.</p>',
        2: '<p>Bạn nhẹ d&agrave;ng, c&oacute; xu hướng trở th&agrave;nh người quan s&aacute;t.</p><p>Bạn l&atilde;ng mạn v&agrave; t&igrave;nh y&ecirc;u quan trọng với bạn.</p><p>Bạn bị l&ocirc;i cuốn với những năng lực huyền b&iacute;.</p><p>Bạn c&oacute; thể chạm đến trực gi&aacute;c v&agrave; kh&iacute;a cạnh si&ecirc;u h&igrave;nh.</p><p>Bạn c&oacute; l&ograve;ng trắc ẩn v&agrave; th&iacute;ch chuyện của người kh&aacute;c.</p>',
        3: '<p>Bạn hay pha tr&ograve;, c&oacute; khiếu h&agrave;i hước v&agrave; uy t&iacute;n.</p><p>Bạn c&oacute; thể t&aacute;c động l&ecirc;n người kh&aacute;c bằng ch&iacute;nh năng lượng của m&igrave;nh.</p><p>Khi bạn vui bạn sẽ tr&ograve; chuyện với nụ cười rạng rỡ, &aacute;nh mắt long lanh.</p><p>Khi bạn kh&ocirc;ng vui th&igrave; ai b&ecirc;n bạn cũng thấy kh&ocirc;ng vui.</p>',
        4: '<p>Bạn l&agrave; người giữ sổ.</p><p>Nhiều l&uacute;c bạn trở n&ecirc;n trầm mặc v&agrave; kh&oacute; ai hiểu bạn.</p><p>Bạn hiểu rất r&otilde; những g&igrave; đang diễn ra.</p><p>Bạn h&ograve;a m&igrave;nh c&ugrave;ng thi&ecirc;n nhi&ecirc;n v&agrave; l&agrave;m việc li&ecirc;n quan đến sự x&acirc;y dựng.</p><p>Bạn dạy dỗ mọi người v&agrave; l&agrave; chuy&ecirc;n gia trong lĩnh vực bạn l&agrave;m.</p><p>Bạn phủ quyết để thấy được mọi mặt của vấn đề.</p><p>V&agrave; nếu bạn thấy ai đang thiếu trung thực bạn sẽ vạch trần họ.</p>',
        5: '<p>Bạn ham vui v&agrave; ngộ nghĩnh.</p><p>Bạn cần đi lại v&agrave; kh&aacute;m ph&aacute; thế giới.</p><p>Nếu sống nơi buồn tẻ bạn sẽ tự đọa đ&agrave;y m&igrave;nh.</p><p>V&igrave; thế bạn cần chủ động bước ra v&agrave; tạo niềm vui cho ch&iacute;nh m&igrave;nh.</p><p>Mọi thứ cần sự mạo hiểm v&agrave; s&ocirc;i nổi.</p>',
        6: '<p>Bạn l&agrave; người nu&ocirc;i dưỡng, th&iacute;ch săn s&oacute;c người kh&aacute;c.</p><p>Bạn thấy m&igrave;nh hữu &iacute;ch nhất khi mọi thứ đang mất kiểm so&aacute;t v&agrave; bạn đang sửa chữa ch&uacute;ng.</p><p>C&ograve;n khi mọi thứ y&ecirc;n ổn bạn lại thấy m&igrave;nh thừa th&atilde;i.</p><p>Bạn c&oacute; sự l&ocirc;i cuốn mạnh mẽ l&agrave;m người kh&aacute;c c&oacute; cảm gi&aacute;c như thi&ecirc;u th&acirc;n lao v&agrave;o &aacute;nh lửa của bạn vậy.</p>',
        7: '<p>Bạn chứa chất nỗi niềm v&agrave; sống nội t&acirc;m.</p><p>Bạn phải li&ecirc;n tục theo đuổi việc t&igrave;m kiếm c&acirc;u trả lời cho những c&acirc;u hỏi trong cuộc đời bạn.</p><p>Bạn chỉ tiết lộ bản th&acirc;n một c&aacute;ch &uacute;p mở v&agrave; c&oacute; thể im lặng l&agrave;m người kh&aacute;c hiểu nhầm.</p><p>Đằng sau sự thể hiện đ&oacute; l&agrave; bởi v&igrave; bạn c&oacute; năng lực quan s&aacute;t mạnh mẽ v&agrave; kh&ocirc;ng muốn bỏ lỡ điều g&igrave;.</p>',
        8: '<p>Bạn sẵn s&agrave;ng bộc bạch t&acirc;m sự m&agrave; chẳng giấu diếm.</p><p>Bạn trăn trở nhiều đến việc cải thiện v&agrave; n&acirc;ng tầm chất lượng cuộc sống cũng như đảm bảo sự an to&agrave;n về t&agrave;i ch&iacute;nh.</p><p>Khi bạn c&oacute; gia đ&igrave;nh bạn l&agrave; người cấp dưỡng tốt, mặt ti&ecirc;u cực l&agrave; bạn kiểm so&aacute;t tiền bạc.</p><p>Bạn cần xem mỗi ng&agrave;y l&agrave; một cơ hội v&agrave; buộc phải rũ bỏ qu&aacute; khứ để kh&ocirc;ng bị những suy nghĩ ti&ecirc;u cực từ qu&aacute; khứ cản trở con đường hạnh ph&uacute;c của bạn.</p>',
        9: '<p>Bạn l&agrave; thủ lĩnh. Bạn kh&ocirc;ng chỉ l&agrave;m việc của m&igrave;nh m&agrave; c&ograve;n l&agrave;m cả việc của người kh&aacute;c.</p><p>Bất cứ nơi n&agrave;o bạn đến, người kh&aacute;c đều tr&ocirc;ng chờ bạn đảm đương nhiệm vụ.</p><p>Quy tắc sống cơ bản của bạn l&agrave; &ldquo;H&atilde;y chỉ t&ocirc;i rồi để t&ocirc;i tự l&agrave;m&rdquo;.</p><p>Nếu c&oacute; vết thương l&ograve;ng từ b&eacute; bạ cần để gi&oacute; cuốn đi nếu kh&ocirc;ng bạn sẽ muộn phiền.</p><p>Bạn nhiệt t&acirc;m gi&uacute;p người kh&aacute;c nhưng phải học c&aacute;ch bảo vệ sức khỏe của m&igrave;nh tr&aacute;nh bị kiệt sức.</p>'
    };

    const lygiaiSoNgaySinh = {
        1: 'Bạn ở đây để dẫn đầu. Bạn là người có tham vọng và luôn mong muốn có được những thành công, đạt được những thành tựu trong cuộc đời. Bạn có khả năng trở thành một nhà cải cách, một doanh nhân thành đạt, một người khởi xướng. Bạn có óc sáng tạo, có khả năng kinh doanh tuyệt vời và có được sự chủ động trong cuộc sống, vì thế mà bạn có thể đạt được những điều tuyệt vời về vật chất. Bạn cũng là một người có tầm nhìn xa rộng và có thể thực hiện được những ý tưởng táo bạo.',
        2: 'Bạn là một người nhạy cảm, có trực giác và có tài ngoại giao. Bạn rất giỏi trong các mối quan hệ cá nhân và cũng rất giỏi đàm phán. Bạn là người có năng khiếu nghệ thuật. Bạn biết cách hợp tác với người khác và có thể làm việc theo nhóm rất hiệu quả. Bên cạnh đó bạn cũng là một người ấm áp, tình cảm. Bạn luôn hướng tới tình yêu và sự an toàn. ',
        3: 'Bạn là người sáng tạo và có tố chất của một nghệ sĩ. Bạn có tài năng trong việc giao tiếp, viết lách, biểu diễn... bất kể lĩnh vực gì liên quan đến việc thể hiện bản thân một cách sáng tạo thông qua cảm xúc. Bạn vui vẻ, dí dỏm và quyến rũ. Đồng thời, bạn cũng là người thân thiện, hòa đồng và sẵn sàng dành thời gian cho người khác.',
        4: 'Bạn là một người chăm chỉ, cần cù, đáng tin cậy và trung thực. Bạn là người mà mọi người thường tìm đến khi cần. Bạn có tính kỷ luật cao, sống có tổ chức và có trách nhiệm với cuộc đời mình. Bạn sẽ ở trong trạng thái tốt nhất khi mọi thứ đều an toàn, ổn định, chậm rãi. Bạn không phải là một người sẵn sàng chấp nhận rủi ro, cũng không phải là một người mơ mộng hão huyền. Bạn kiên trì và có xu hướng trở thành một người thầy trong những lĩnh vực mà bạn theo đuổi.',
        5: 'Bạn là người thích được đi du lịch, phiêu lưu và khám phá những thứ mới mẻ. Sự thay đổi không khiến bạn sợ hãi, ngược lại nó còn khiến bạn vô cùng phấn khích. Bạn có khả năng thích nghi tốt trước mọi hoàn cảnh và đồng thời nhờ những môi trường mới lạ mà bạn có thể tiến bộ và phát triển hơn. Bạn tò mò, hoạt bát và có tính xã hội cao. Đầu óc bạn cũng rất nhanh nhạy và thích vận động. Bạn là người có khả năng thu hút người khác, bất kể là ở tầng lớp nào, và bạn thích được trải nghiệm những điều kỳ lạ.',
        6: 'Bạn là người luôn hướng về gia đình. Bạn sống có trách nhiệm và thích được nuôi dưỡng, chăm sóc người khác. Bạn thường cố gắng mang đến những điều tốt nhất cho mọi người xung quanh. Trọng tâm cuộc đời của bạn chính là những mối quan hệ thân thiết. Trẻ em và động vật thường bị thu hút một cách tự nhiên với năng lượng của bạn. Bạn cũng là người có thể nhìn thấy bức tranh lớn và có xu hướng sống theo chủ nghĩa lý tưởng.',
        7: 'Bạn mang trong mình một trí óc phân tích và logic. Bạn có năng khiếu về việc phân tích dữ liệu, nghiên cứu chuyên sâu và tìm kiếm câu trả lời cho những câu hỏi lớn trong cuộc sống. Bạn sẽ phát huy được hết khả năng của mình trong việc nghiên cứu và phát triển một thứ gì đó. Bạn có trực giác cao và thích dành thời gian ở một mình. ',
        8: 'Tham vọng, thực tế và nhiều tài năng chính là những từ để mô tả bạn. Thế giới vật chất chính là trọng tâm của cuộc đời bạn. Bạn có năng khiếu về quản lý và tổ chức, phát triển, lãnh đạo. Bạn là người có định hướng mục tiêu rõ ràng và thích được đối mặt với những thử thách. Tự do tài chính là động lực của bạn trong cuộc sống.',
        9: 'Bạn là người sáng tạo, nhân ái và bao dung. Bạn có khả năng kết nối với người khác và thường nhìn được mọi thứ một cách bao quát. Bạn biết rằng mình là người có sức hút và có thể tạo ra bất cứ điều gì nếu tập trung vào nó. Bạn sống có lý tưởng và luôn theo đuổi điều đó. '
    };

    const lygiaiSoSuMenh = {
        1: '<p>Sứ mệnh của bạn trong cuộc đời n&agrave;y l&agrave; trau dồi bản th&acirc;n v&agrave; trở th&agrave;nh một người l&atilde;nh đạo. Mục đ&iacute;ch cuộc đời bạn l&agrave; ki&ecirc;n cường, độc lập, ti&ecirc;n phong, ph&aacute;t kiến v&agrave; đưa vai g&aacute;nh v&aacute;c mọi việc &ndash; tất cả l&agrave; để ph&aacute;t triển &yacute; thức về bản ng&atilde;, &yacute; ch&iacute; v&agrave; sự quyết t&acirc;m của bạn.</p>        <p>Học c&aacute;ch tự lập, suy nghĩ cho ch&iacute;nh m&igrave;nh v&agrave; khiến m&igrave;nh trở n&ecirc;n c&aacute; t&iacute;nh cũng như những điều mới, những tư tưởng mới v&agrave; c&aacute;c hoạt động s&aacute;ng tạo mang đến những cơ hội lớn để bạn vươn tới sứ mệnh của m&igrave;nh.</p>        <p>Bạn sinh ra l&agrave; để l&atilde;nh đạo. H&atilde;y l&agrave; một người l&atilde;nh đạo v&agrave; dạy c&aacute;ch trở th&agrave;nh một người l&atilde;nh đạo.</p>',
        2: '<p>Sứ mệnh của bạn trong cuộc đời n&agrave;y l&agrave; tạo ra sự h&agrave;i h&ograve;a. Mục ti&ecirc;u của bạn l&agrave; t&igrave;m kiếm sự hợp t&aacute;c, c&acirc;n bằng v&agrave; l&agrave; một đối t&aacute;c ki&ecirc;n nhẫn &ndash; tất cả l&agrave; để ph&aacute;t triển &yacute; thức của bạn về mối quan hệ.</p>        <p>Bạn cần học về l&ograve;ng trắc ẩn v&agrave; tiếp nhận mọi thứ bằng cảm x&uacute;c. Khả năng th&iacute;ch nghi v&agrave; tạo sức thuyết phục sẽ đưa bạn đến gần sứ mệnh của m&igrave;nh hơn. Bạn sinh ra l&agrave; để x&acirc;y dựng h&ograve;a b&igrave;nh. H&atilde;y tiến l&ecirc;n v&agrave; chia sẻ về n&oacute;.</p>',
        3: '<p>Mục đ&iacute;ch của bạn trong cuộc đời n&agrave;y l&agrave; tiếp th&ecirc;m sinh lực v&agrave; sức mạnh. Mục đ&iacute;ch của bạn l&agrave; khuyến kh&iacute;ch người kh&aacute;c th&ocirc;ng qua những hi vọng v&agrave; niềm tin của bạn, sử dụng sự s&aacute;ng tạo đầy cảm hứng của bạn để gi&uacute;p người kh&aacute;c c&ugrave;ng trải nghiệm niềm vui.</p>        <p>Học c&aacute;ch thể hiện cảm x&uacute;c của bạn th&ocirc;ng qua t&agrave;i năng sử dụng từ ngữ v&agrave; sự s&ocirc;i nổi, nhiệt huyết v&agrave; th&ocirc;ng minh sẽ gi&uacute;p bạn tiến tới sứ mệnh của m&igrave;nh.</p>        <p>Bạn sinh ra l&agrave; để thể hiện bản th&acirc;n, h&atilde;y tr&ograve; chuyện, lu&ocirc;n t&iacute;ch cực v&agrave; khuyến kh&iacute;ch mọi người.</p>',
        4: '<p>Sứ mệnh của bạn trong cuộc đời n&agrave;y l&agrave; x&acirc;y dựng một c&aacute;i g&igrave; đ&oacute; c&oacute; gi&aacute; trị l&acirc;u d&agrave;i. Mục ti&ecirc;u của bạn l&agrave; trở n&ecirc;n thực tế, l&agrave;m việc chăm chỉ đồng thời giữ mọi thứ trật tự, ngăn nắp để đảm bảo nhu cầu được an to&agrave;n.</p>        <p>Học c&aacute;ch thể hiện những gi&aacute; trị truyền thống v&agrave; sự trung th&agrave;nh, ki&ecirc;n định sẽ gi&uacute;p bạn ho&agrave;n th&agrave;nh sứ mệnh của m&igrave;nh. Bạn sinh ra l&agrave; để quản l&yacute; v&agrave; thiết lập trật tự. H&atilde;y tạo dựng nền tảng v&agrave; ph&aacute;t triển mọi thứ từ đ&oacute;.</p>',
        5: '<p>Sứ mệnh của bạn trong cuộc đời n&agrave;y l&agrave; điều chỉnh, ph&aacute;t triển v&agrave; tiến bộ. Mục đ&iacute;ch của bạn l&agrave; nắm lấy c&aacute;c cơ hội v&agrave; quyền tự chủ, v&agrave; theo đuổi tr&iacute; t&ograve; m&ograve; v&ocirc; tận của m&igrave;nh, đồng thời vận dụng sự th&aacute;o v&aacute;t cũng như sự cuốn h&uacute;t để lu&ocirc;n tiến về ph&iacute;a trước.</p>        <p>Học c&aacute;ch thể hiện sự kh&eacute;o l&eacute;o v&agrave; trở th&agrave;nh một linh hồn tự do sẽ gi&uacute;p bạn tiến tới sứ mệnh của m&igrave;nh.</p>        <p>Bạn được sinh ra l&agrave; để được giải ph&oacute;ng v&agrave; tự do. H&atilde;y tiến về ph&iacute;a trước v&agrave; th&iacute;ch nghi uyển chuyển với mọi sự thay đổi.</p>',
        6: '<p>Sứ mệnh của bạn trong cuộc đời n&agrave;y l&agrave; phục vụ. Mục ti&ecirc;u của bạn l&agrave; chăm s&oacute;c gia đ&igrave;nh v&agrave; những người thương y&ecirc;u đồng thời sử dụng sự ngưỡng mộ v&agrave; y&ecirc;u mến của bạn đối với mọi người v&agrave; những điều tinh tế để thiết lập sự gần gũi, th&acirc;n thiết **** quanh bạn.</p>        <p>Học c&aacute;ch để b&agrave;y tỏ l&ograve;ng vị tha cũng như mang lại cho người kh&aacute;c sự thoải m&aacute;i, dễ chịu sẽ gi&uacute;p bạn tiến tới mục ti&ecirc;u của m&igrave;nh.</p>        <p>Bạn sinh ** l&agrave; để nu&ocirc;i dưỡng v&agrave; l&agrave;m đẹp. H&atilde;y y&ecirc;u thương bằng sự c&acirc;n bằng v&agrave; b&igrave;nh ổn.</p>',
        7: '<p>Sứ mệ** của bạn ***** cuộc đời n&agrave;y l&agrave; t&igrave;m t&ograve;i v&agrave; nghi&ecirc;n cứu. Mục đ&iacute;ch của bạn l&agrave; đ&agrave;o s&acirc;u vấn đề v&agrave; chi&ecirc;m nghiệm tất cả những g&igrave; xảy ra trong cuộc đời n&agrave;y. Sử dụng khả năng ph&acirc;n t&iacute;ch v&agrave; sự tỉ mỉ của m&igrave;nh để t&igrave;m kiếm tr&iacute; huệ.</p>        <p>Học c&aacute;ch thể hiện sự kỹ lưỡng sắc sảo của m&igrave;** cũng như sự chu đ&aacute;o v&agrave; s&aacute;ng suốt sẽ đưa bạn tới gần mục ti&ecirc;u của m&igrave;nh. Bạn sinh ra l&agrave; để khai mở thế giới. H&atilde;y tập trung v&agrave; r&egrave;n giũa sự th&ocirc;ng th&aacute;i của bạn.</p>',
        8: '<p>Sứ mệnh của bạn trong cuộc đời n&agrave;y l&agrave; c&oacute; được sự tự kiểm so&aacute;t bản th&acirc;n. Mục đ&iacute;ch của bạn l&agrave; tự ho&agrave;n thiện, sử dụ** khả năng của bạn trong kinh doanh v&agrave; tổ chức.</p>        <p>Học c&aacute;ch để thể hiện bản chất đ&iacute;ch thực, kh&aacute;m ph&aacute; sức mạnh của ch&iacute;nh m&igrave;nh v&agrave; tầm nh&igrave;n kho&aacute;ng đạt sẽ đưa bạn tiến gần đến sứ mệnh của m&igrave;nh.</p>        <p>Bạn sinh ra l&agrave; để c&oacute; được sự th&agrave;nh c&ocirc;ng v&agrave; gi&agrave;u c&oacute; vật chất. H&atilde;y nhận thức được điều n&agrave;y v&agrave; trở th&agrave;nh một nh&agrave; l&atilde;nh đạo kiệt xuất.</p>',
        9: '<p>Sứ mệnh của cuộc đời bạn l&agrave; vươn tới sự ho&agrave;n mỹ v&agrave; y&ecirc;u thương v&ocirc; điều kiện. Mục ti&ecirc;u của bạn l&agrave; vươn tới những linh hồn tiến h&oacute;a cao hơn trong vũ trụ n&agrave;y bằng sự nh&acirc;n đạo, l&ograve;ng thương cảm v&agrave; nghệ thuật chữa l&agrave;nh của m&igrave;nh.</p>        <p>Học c&aacute;ch chuyển h&oacute;a, chữa l&agrave;nh, sẵn s&agrave;** tiếp thu, lĩnh hội những &yacute; tưởng mới v&agrave; một tấm l&ograve;ng khoan dung độ lượng sẽ đưa bạn lại gần sứ mệ** của m&igrave;nh.</p>        <p>Bạn sinh ** l&agrave; để vươn tới những ch&acirc;n trời mới. H&atilde;y vươn tay ra để gi&uacute;p đỡ mọi người.</p>'
    };

    const result = [
        { title: 'Số Ngày Sinh', number: NS, details: lygiaiSoNgaySinh[NS] },
        { title: 'Số Thái Độ', number: TD, details: lygiaiSoThaiDo[TD] },
        { title: 'Số Đường Đời', number: DDCheck, details: lyGiaiSoDuongdoi[DDCheck] },
        { title: 'Số Linh Hồn', number: LH, details: lyGiaiSoLinhHon[LH] },
        { title: 'Số Nhân Cách', number: NC, details: lygiaiSoNhanCach[NC] },
        { title: 'Số Sứ Mệnh', number: SM, details: lygiaiSoSuMenh[SM] },
        { title: 'Năm Cá Nhân (' + currentYear + ')', number: namCaNhan, details: lyGiaiNamCaNhan[namCaNhan] },
        {
            title: 'Tháng Cá Nhân (' + currentMonth + '/' + currentYear + ')',
            number: thangCaNhan,
            details: lyGiaiThangCaNhan[thangCaNhan]
        },
        {
            title: 'Ngày Cá Nhân (' + currentMonth + '/' + currentDay + '/' + currentYear + ')',
            number: ngayCaNhan,
            details: lyGiaiNgayCaNhan[ngayCaNhan]
        }
    ];

    return result;
}
