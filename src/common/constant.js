import { Switch } from "react-router-dom"

export const HttpStatus = {
    OK : 200,
    BAD_REQUEST: 400,
    UNAUTHORIZED : 401,
    NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    EXPECTATION_FAILED: 417
}

export const HttpBodyContent = {
    //login
    INVALID_USERID: "Invalid UserId",
    INVALID_PW: "Invalid Password",
    INVALID_TOKEN: "Invalid Jwt Token",
    TOKEN_EXPIRED: "Token has expired",
    EMPTY_ID_PW: "Authentication failed : Username or Password not provided"
}

export const OrderStatus = {
    WAITING : "200",
    PREPARING : "201",
    COMPLETE : "202",
    USER_CANCELED : "203",
    STORE_CANCELED : "204",
    CALLED : "205",
    ADMIN_CANCELED : "206",
    ORDER_FAILED : "999"
}

export const MQTT = {
    SUBSCRIBE_TOPIC : "okimoki/order/store/#"
}

export const TextToken = {
    LANGUAGE_VERSION : "1.0"
}

export const RoleId = {
    EMPLOYEE_MANAGER : "employee_manager"
}

export const StoreOrderType = {
    TABLE : "T",
    SMART : "S",
    FOODCOURT : "F",
    TOGO : "G"
}

export const payType = [
    { code: "EMPLO", payType: "급여결제" },
    { code: "PCRED", payType: "신용결제" },
    { code: "ACTBK", payType: "개인장부결제" },
    { code: "TACCT", payType: "팀장부결제" },
    { code: "CASH_", payType: "현금결제" }
]

export const payCompany = [
    { code: "OKIMOKI", payCompany: "오키모키" },
    { code: "DRIMHIT", payCompany: "드림하이텍" }
]

export const transactionStatus = [
    { code: 199, status: "승인취소" },
    { code: 200, status: "정상승인" },
    { code: 201, status: "결제취소" }
]

export const resultMessage = [
    { code: "Cancel Approval Failed", message: "승인취소에 실패하였습니다." },
    { code: "SEND NOTI FAILED", message: "알림톡 발송에 실패했습니다." },
    { code: "NOT AVAILABLE CANCEL TYPE", message: "취소가능한 결제타입이 아닙니다." },
    { code: "해당거래 취소실패(기취소 거래)", message: "이미 취소된 거래내역입니다." }
]

export const timezone = 'Asia/Seoul';
export const dateTimeFormat = 'YYYY-MM-DDTHH:mm:ss';
export const dateTimeFormatForStartDate = 'YYYY-MM-DDT00:00:01';
export const dateTimeFormatForEndDate = 'YYYY-MM-DDT23:59:59';
export const dateTimeDisplayFormat = 'YYYY-MM-DD HH:mm:ss';
export const dateDisplayFormat = 'YYYY.MM.DD';

export const bankType = [
    { type: 'SHINHAN', code: "SHINH", bankName: "신한은행" },
    { type: 'KOOKMIN', code: "KOOKM", bankName: "국민은행" },
    { type: 'KAKAO', code: "KAKAO", bankName: "카카오뱅크" },
    //다른 곳에서 에러처리(값이 없을 경우의 처리)를 다 하기보다는 빈 값을 만들어 자연스럽게 공백이 화면에서 보여지도록 함.
    { type: '', code: null, bankName: "" }
]

export const responseCode = {
    SUCCESS : "200",
    FAIL    : "999"
}

export const dateTimeFormatForSearch = 'YYYY-MM-DD 00:00:00';
export const dateTimeFormatForNoTime = 'YYYY-MM-DDT00:00:00';

export const TogoItemState = {
    IDLE        : "IDLE_",  // 끼니와 연결되지 않은 상태
    IN_USE      : "INUSE",  // 끼니와 연결되었지만, 예약중이 아닌 상태
    ACTIVE      : "ACTIV",  // 예약중인 상태
    NOT_FOUND   : "NFOND"   // 메뉴가 존재하지 않음
}

export const ReservationStatus = {
    BEFORE_ORDER    : "BORDR",  // 예약 전
    TAKING_ORDER    : "ORDR_",  // 예약 중
    BEFORE_PICK_UP  : "BPICK",  // 예약 마감
    PICK_UP         : "PICK_",  // 픽업중
    COMPLETE        : "CMPL_",  // 픽업 마감
    EXHUSTED        : "EXHU_"   // 수량 소진
}

export const ReservationStatusToString = (status) => {
    switch(status){
        case ReservationStatus.BEFORE_ORDER:
            return "예약 전";
        case ReservationStatus.TAKING_ORDER:
            return "예약 중";
        case ReservationStatus.BEFORE_PICK_UP:
            return "예약 마감";
        case ReservationStatus.PICK_UP:
            return "픽업 중";
        case ReservationStatus.COMPLETE:
            return "픽업 종료";
        case ReservationStatus.EXHUSTED:
            return "수량 소진";
        default:
            return "예약 상태";
    }
}