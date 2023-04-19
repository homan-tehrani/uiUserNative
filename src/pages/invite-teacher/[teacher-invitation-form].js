import React,{useState} from "react";
import InputForTeacherInvitation from "@/components/InputForTeacherInvitation";
import SelectOptionForTeacherInvite from "@/components/SelectOptionForTeacherInvite";
import RadioButtonForTeacherInvitation from "@/components/RadioButtonForTeacherInvitation";
import QuestionRadioButton from "@/components/QuestionRadioButton";


export default function teacherIinvitationForm() {
    // const states = ["استان مرکزی" , "استان مازندران"]
    const[foucosTextArea , setFoucosTextArea]=useState(false)

    const states=[
      {
        "message": "لیست شهر ها با موفقیت بازگردانده شد .",
        "data": [
            {
                "id": 1,
                "countFile": 0,
                "county": [
                    {
                        "id": 2,
                        "countFile": 10,
                        "name": "آشتیان",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 4,
                        "countFile": 0,
                        "name": "خمین",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 6,
                        "countFile": 0,
                        "name": "تفرش",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 8,
                        "countFile": 0,
                        "name": "دلیجان",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 11,
                        "countFile": 0,
                        "name": "ساوه",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 16,
                        "countFile": 2,
                        "name": "شازند",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 22,
                        "countFile": 1,
                        "name": "محلات",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 25,
                        "countFile": 0,
                        "name": "زرندیه",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 31,
                        "countFile": 0,
                        "name": "کمیجان",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 34,
                        "countFile": 0,
                        "name": "خنداب",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 36,
                        "countFile": 0,
                        "name": "فراهان",
                        "weight": 1,
                        "parent_id": 1
                    },
                    {
                        "id": 39,
                        "countFile": 55,
                        "name": "اراک",
                        "weight": 1,
                        "parent_id": 1
                    }
                ],
                "name": "مرکزی",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 2,
                "countFile": 10,
                "county": [
                    {
                        "id": 3,
                        "countFile": 0,
                        "name": "آشتیان",
                        "weight": 1,
                        "parent_id": 2
                    }
                ],
                "name": "آشتیان",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 3,
                "countFile": 0,
                "county": [],
                "name": "آشتیان",
                "weight": 1,
                "parent_id": 2
            },
            {
                "id": 4,
                "countFile": 0,
                "county": [
                    {
                        "id": 5,
                        "countFile": 0,
                        "name": "قورچی باشی",
                        "weight": 1,
                        "parent_id": 4
                    }
                ],
                "name": "خمین",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 5,
                "countFile": 0,
                "county": [],
                "name": "قورچی باشی",
                "weight": 1,
                "parent_id": 4
            },
            {
                "id": 6,
                "countFile": 0,
                "county": [
                    {
                        "id": 7,
                        "countFile": 0,
                        "name": "تفرش",
                        "weight": 1,
                        "parent_id": 6
                    }
                ],
                "name": "تفرش",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 7,
                "countFile": 0,
                "county": [],
                "name": "تفرش",
                "weight": 1,
                "parent_id": 6
            },
            {
                "id": 8,
                "countFile": 0,
                "county": [
                    {
                        "id": 9,
                        "countFile": 0,
                        "name": "دلیجان",
                        "weight": 1,
                        "parent_id": 8
                    },
                    {
                        "id": 10,
                        "countFile": 0,
                        "name": "نراق",
                        "weight": 1,
                        "parent_id": 8
                    }
                ],
                "name": "دلیجان",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 9,
                "countFile": 0,
                "county": [],
                "name": "دلیجان",
                "weight": 1,
                "parent_id": 8
            },
            {
                "id": 10,
                "countFile": 0,
                "county": [],
                "name": "نراق",
                "weight": 1,
                "parent_id": 8
            },
            {
                "id": 11,
                "countFile": 0,
                "county": [
                    {
                        "id": 12,
                        "countFile": 0,
                        "name": "ساوه",
                        "weight": 1,
                        "parent_id": 11
                    },
                    {
                        "id": 13,
                        "countFile": 0,
                        "name": "آوه",
                        "weight": 1,
                        "parent_id": 11
                    },
                    {
                        "id": 14,
                        "countFile": 0,
                        "name": "غرق آباد",
                        "weight": 1,
                        "parent_id": 11
                    },
                    {
                        "id": 15,
                        "countFile": 0,
                        "name": "نوبران",
                        "weight": 1,
                        "parent_id": 11
                    }
                ],
                "name": "ساوه",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 12,
                "countFile": 0,
                "county": [],
                "name": "ساوه",
                "weight": 1,
                "parent_id": 11
            },
            {
                "id": 13,
                "countFile": 0,
                "county": [],
                "name": "آوه",
                "weight": 1,
                "parent_id": 11
            },
            {
                "id": 14,
                "countFile": 0,
                "county": [],
                "name": "غرق آباد",
                "weight": 1,
                "parent_id": 11
            },
            {
                "id": 15,
                "countFile": 0,
                "county": [],
                "name": "نوبران",
                "weight": 1,
                "parent_id": 11
            },
            {
                "id": 16,
                "countFile": 2,
                "county": [
                    {
                        "id": 17,
                        "countFile": 0,
                        "name": "آستانه",
                        "weight": 1,
                        "parent_id": 16
                    },
                    {
                        "id": 18,
                        "countFile": 0,
                        "name": "هندودر",
                        "weight": 1,
                        "parent_id": 16
                    },
                    {
                        "id": 19,
                        "countFile": 0,
                        "name": "مهاجران",
                        "weight": 1,
                        "parent_id": 16
                    },
                    {
                        "id": 20,
                        "countFile": 0,
                        "name": "توره",
                        "weight": 1,
                        "parent_id": 16
                    },
                    {
                        "id": 21,
                        "countFile": 0,
                        "name": "شهباز",
                        "weight": 1,
                        "parent_id": 16
                    }
                ],
                "name": "شازند",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 17,
                "countFile": 0,
                "county": [],
                "name": "آستانه",
                "weight": 1,
                "parent_id": 16
            },
            {
                "id": 18,
                "countFile": 0,
                "county": [],
                "name": "هندودر",
                "weight": 1,
                "parent_id": 16
            },
            {
                "id": 19,
                "countFile": 0,
                "county": [],
                "name": "مهاجران",
                "weight": 1,
                "parent_id": 16
            },
            {
                "id": 20,
                "countFile": 0,
                "county": [],
                "name": "توره",
                "weight": 1,
                "parent_id": 16
            },
            {
                "id": 21,
                "countFile": 0,
                "county": [],
                "name": "شهباز",
                "weight": 1,
                "parent_id": 16
            },
            {
                "id": 22,
                "countFile": 1,
                "county": [
                    {
                        "id": 23,
                        "countFile": 0,
                        "name": "محلات",
                        "weight": 1,
                        "parent_id": 22
                    },
                    {
                        "id": 24,
                        "countFile": 0,
                        "name": "نیمور",
                        "weight": 1,
                        "parent_id": 22
                    }
                ],
                "name": "محلات",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 23,
                "countFile": 0,
                "county": [],
                "name": "محلات",
                "weight": 1,
                "parent_id": 22
            },
            {
                "id": 24,
                "countFile": 0,
                "county": [],
                "name": "نیمور",
                "weight": 1,
                "parent_id": 22
            },
            {
                "id": 25,
                "countFile": 0,
                "county": [
                    {
                        "id": 26,
                        "countFile": 0,
                        "name": "رازقان",
                        "weight": 1,
                        "parent_id": 25
                    },
                    {
                        "id": 27,
                        "countFile": 0,
                        "name": "زاویه",
                        "weight": 1,
                        "parent_id": 25
                    },
                    {
                        "id": 28,
                        "countFile": 0,
                        "name": "مامونیه",
                        "weight": 1,
                        "parent_id": 25
                    },
                    {
                        "id": 29,
                        "countFile": 0,
                        "name": "خشکرود",
                        "weight": 1,
                        "parent_id": 25
                    },
                    {
                        "id": 30,
                        "countFile": 0,
                        "name": "پرندک",
                        "weight": 1,
                        "parent_id": 25
                    }
                ],
                "name": "زرندیه",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 26,
                "countFile": 0,
                "county": [],
                "name": "رازقان",
                "weight": 1,
                "parent_id": 25
            },
            {
                "id": 27,
                "countFile": 0,
                "county": [],
                "name": "زاویه",
                "weight": 1,
                "parent_id": 25
            },
            {
                "id": 28,
                "countFile": 0,
                "county": [],
                "name": "مامونیه",
                "weight": 1,
                "parent_id": 25
            },
            {
                "id": 29,
                "countFile": 0,
                "county": [],
                "name": "خشکرود",
                "weight": 1,
                "parent_id": 25
            },
            {
                "id": 30,
                "countFile": 0,
                "county": [],
                "name": "پرندک",
                "weight": 1,
                "parent_id": 25
            },
            {
                "id": 31,
                "countFile": 0,
                "county": [
                    {
                        "id": 32,
                        "countFile": 0,
                        "name": "کمیجان",
                        "weight": 1,
                        "parent_id": 31
                    },
                    {
                        "id": 33,
                        "countFile": 0,
                        "name": "میلاجرد",
                        "weight": 1,
                        "parent_id": 31
                    }
                ],
                "name": "کمیجان",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 32,
                "countFile": 0,
                "county": [],
                "name": "کمیجان",
                "weight": 1,
                "parent_id": 31
            },
            {
                "id": 33,
                "countFile": 0,
                "county": [],
                "name": "میلاجرد",
                "weight": 1,
                "parent_id": 31
            },
            {
                "id": 34,
                "countFile": 0,
                "county": [
                    {
                        "id": 35,
                        "countFile": 0,
                        "name": "جاورسیان",
                        "weight": 1,
                        "parent_id": 34
                    }
                ],
                "name": "خنداب",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 35,
                "countFile": 0,
                "county": [],
                "name": "جاورسیان",
                "weight": 1,
                "parent_id": 34
            },
            {
                "id": 36,
                "countFile": 0,
                "county": [
                    {
                        "id": 37,
                        "countFile": 0,
                        "name": "فرمهین",
                        "weight": 1,
                        "parent_id": 36
                    },
                    {
                        "id": 38,
                        "countFile": 46,
                        "name": "خنجین",
                        "weight": 1,
                        "parent_id": 36
                    }
                ],
                "name": "فراهان",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 37,
                "countFile": 0,
                "county": [],
                "name": "فرمهین",
                "weight": 1,
                "parent_id": 36
            },
            {
                "id": 38,
                "countFile": 46,
                "county": [],
                "name": "خنجین",
                "weight": 1,
                "parent_id": 36
            },
            {
                "id": 39,
                "countFile": 55,
                "county": [
                    {
                        "id": 40,
                        "countFile": 0,
                        "name": "اراک",
                        "weight": 1,
                        "parent_id": 39
                    },
                    {
                        "id": 41,
                        "countFile": 0,
                        "name": "داودآباد",
                        "weight": 1,
                        "parent_id": 39
                    },
                    {
                        "id": 42,
                        "countFile": 0,
                        "name": "ساروق",
                        "weight": 1,
                        "parent_id": 39
                    },
                    {
                        "id": 43,
                        "countFile": 0,
                        "name": "کارچان",
                        "weight": 1,
                        "parent_id": 39
                    }
                ],
                "name": "اراک",
                "weight": 1,
                "parent_id": 1
            },
            {
                "id": 40,
                "countFile": 0,
                "county": [],
                "name": "اراک",
                "weight": 1,
                "parent_id": 39
            },
            {
                "id": 41,
                "countFile": 0,
                "county": [],
                "name": "داودآباد",
                "weight": 1,
                "parent_id": 39
            },
            {
                "id": 42,
                "countFile": 0,
                "county": [],
                "name": "ساروق",
                "weight": 1,
                "parent_id": 39
            },
            {
                "id": 43,
                "countFile": 0,
                "county": [],
                "name": "کارچان",
                "weight": 1,
                "parent_id": 39
            },
            {
                "id": 44,
                "countFile": 0,
                "county": [
                    {
                        "id": 45,
                        "countFile": 0,
                        "name": "آستارا",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 48,
                        "countFile": 0,
                        "name": "آستانه اشرفیه",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 50,
                        "countFile": 0,
                        "name": "بندرانزلی",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 52,
                        "countFile": 0,
                        "name": "رشت",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 54,
                        "countFile": 0,
                        "name": "لاهیجان",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 57,
                        "countFile": 0,
                        "name": "رودسر",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 59,
                        "countFile": 0,
                        "name": "طوالش",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 70,
                        "countFile": 0,
                        "name": "صومعه سرا",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 75,
                        "countFile": 0,
                        "name": "رودبار",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 81,
                        "countFile": 0,
                        "name": "رضوانشهر",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 83,
                        "countFile": 0,
                        "name": "املش",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 89,
                        "countFile": 0,
                        "name": "فومن",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 93,
                        "countFile": 0,
                        "name": "شفت",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 95,
                        "countFile": 0,
                        "name": "ماسال",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 101,
                        "countFile": 0,
                        "name": "لنگرود",
                        "weight": 1,
                        "parent_id": 44
                    },
                    {
                        "id": 107,
                        "countFile": 0,
                        "name": "سیاهکل",
                        "weight": 1,
                        "parent_id": 44
                    }
                ],
                "name": "گیلان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 45,
                "countFile": 0,
                "county": [
                    {
                        "id": 46,
                        "countFile": 0,
                        "name": "آستارا",
                        "weight": 1,
                        "parent_id": 45
                    },
                    {
                        "id": 47,
                        "countFile": 0,
                        "name": "لوندویل",
                        "weight": 1,
                        "parent_id": 45
                    }
                ],
                "name": "آستارا",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 46,
                "countFile": 0,
                "county": [],
                "name": "آستارا",
                "weight": 1,
                "parent_id": 45
            },
            {
                "id": 47,
                "countFile": 0,
                "county": [],
                "name": "لوندویل",
                "weight": 1,
                "parent_id": 45
            },
            {
                "id": 48,
                "countFile": 0,
                "county": [
                    {
                        "id": 49,
                        "countFile": 0,
                        "name": "کیاشهر",
                        "weight": 1,
                        "parent_id": 48
                    }
                ],
                "name": "آستانه اشرفیه",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 49,
                "countFile": 0,
                "county": [],
                "name": "کیاشهر",
                "weight": 1,
                "parent_id": 48
            },
            {
                "id": 50,
                "countFile": 0,
                "county": [
                    {
                        "id": 51,
                        "countFile": 0,
                        "name": "بندرانزلی",
                        "weight": 1,
                        "parent_id": 50
                    }
                ],
                "name": "بندرانزلی",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 51,
                "countFile": 0,
                "county": [],
                "name": "بندرانزلی",
                "weight": 1,
                "parent_id": 50
            },
            {
                "id": 52,
                "countFile": 0,
                "county": [
                    {
                        "id": 53,
                        "countFile": 0,
                        "name": "خمام",
                        "weight": 1,
                        "parent_id": 52
                    },
                    {
                        "id": 62,
                        "countFile": 0,
                        "name": "خشکبیجار",
                        "weight": 1,
                        "parent_id": 52
                    },
                    {
                        "id": 63,
                        "countFile": 0,
                        "name": "سنگر",
                        "weight": 1,
                        "parent_id": 52
                    },
                    {
                        "id": 64,
                        "countFile": 0,
                        "name": "کوچصفهان",
                        "weight": 1,
                        "parent_id": 52
                    },
                    {
                        "id": 65,
                        "countFile": 0,
                        "name": "لولمان",
                        "weight": 1,
                        "parent_id": 52
                    },
                    {
                        "id": 66,
                        "countFile": 0,
                        "name": "لشت نشاء",
                        "weight": 1,
                        "parent_id": 52
                    }
                ],
                "name": "رشت",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 53,
                "countFile": 0,
                "county": [],
                "name": "خمام",
                "weight": 1,
                "parent_id": 52
            },
            {
                "id": 54,
                "countFile": 0,
                "county": [
                    {
                        "id": 55,
                        "countFile": 0,
                        "name": "لاهیجان",
                        "weight": 1,
                        "parent_id": 54
                    },
                    {
                        "id": 56,
                        "countFile": 0,
                        "name": "رودبنه",
                        "weight": 1,
                        "parent_id": 54
                    }
                ],
                "name": "لاهیجان",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 55,
                "countFile": 0,
                "county": [],
                "name": "لاهیجان",
                "weight": 1,
                "parent_id": 54
            },
            {
                "id": 56,
                "countFile": 0,
                "county": [],
                "name": "رودبنه",
                "weight": 1,
                "parent_id": 54
            },
            {
                "id": 57,
                "countFile": 0,
                "county": [
                    {
                        "id": 58,
                        "countFile": 0,
                        "name": "رودسر",
                        "weight": 1,
                        "parent_id": 57
                    },
                    {
                        "id": 67,
                        "countFile": 0,
                        "name": "چابکسر",
                        "weight": 1,
                        "parent_id": 57
                    },
                    {
                        "id": 68,
                        "countFile": 0,
                        "name": "کلاچای",
                        "weight": 1,
                        "parent_id": 57
                    },
                    {
                        "id": 69,
                        "countFile": 0,
                        "name": "واجارگاه",
                        "weight": 1,
                        "parent_id": 57
                    },
                    {
                        "id": 86,
                        "countFile": 0,
                        "name": "رحیم آباد",
                        "weight": 1,
                        "parent_id": 57
                    }
                ],
                "name": "رودسر",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 58,
                "countFile": 0,
                "county": [],
                "name": "رودسر",
                "weight": 1,
                "parent_id": 57
            },
            {
                "id": 59,
                "countFile": 0,
                "county": [
                    {
                        "id": 60,
                        "countFile": 0,
                        "name": "حویق",
                        "weight": 1,
                        "parent_id": 59
                    },
                    {
                        "id": 61,
                        "countFile": 0,
                        "name": "چوبر",
                        "weight": 1,
                        "parent_id": 59
                    },
                    {
                        "id": 72,
                        "countFile": 0,
                        "name": "هشتپر (تالش)",
                        "weight": 1,
                        "parent_id": 59
                    },
                    {
                        "id": 73,
                        "countFile": 0,
                        "name": "لیسار",
                        "weight": 1,
                        "parent_id": 59
                    },
                    {
                        "id": 74,
                        "countFile": 0,
                        "name": "اسالم",
                        "weight": 1,
                        "parent_id": 59
                    }
                ],
                "name": "طوالش",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 60,
                "countFile": 0,
                "county": [],
                "name": "حویق",
                "weight": 1,
                "parent_id": 59
            },
            {
                "id": 61,
                "countFile": 0,
                "county": [],
                "name": "چوبر",
                "weight": 1,
                "parent_id": 59
            },
            {
                "id": 62,
                "countFile": 0,
                "county": [],
                "name": "خشکبیجار",
                "weight": 1,
                "parent_id": 52
            },
            {
                "id": 63,
                "countFile": 0,
                "county": [],
                "name": "سنگر",
                "weight": 1,
                "parent_id": 52
            },
            {
                "id": 64,
                "countFile": 0,
                "county": [],
                "name": "کوچصفهان",
                "weight": 1,
                "parent_id": 52
            },
            {
                "id": 65,
                "countFile": 0,
                "county": [],
                "name": "لولمان",
                "weight": 1,
                "parent_id": 52
            },
            {
                "id": 66,
                "countFile": 0,
                "county": [],
                "name": "لشت نشاء",
                "weight": 1,
                "parent_id": 52
            },
            {
                "id": 67,
                "countFile": 0,
                "county": [],
                "name": "چابکسر",
                "weight": 1,
                "parent_id": 57
            },
            {
                "id": 68,
                "countFile": 0,
                "county": [],
                "name": "کلاچای",
                "weight": 1,
                "parent_id": 57
            },
            {
                "id": 69,
                "countFile": 0,
                "county": [],
                "name": "واجارگاه",
                "weight": 1,
                "parent_id": 57
            },
            {
                "id": 70,
                "countFile": 0,
                "county": [
                    {
                        "id": 71,
                        "countFile": 0,
                        "name": "مرجقل",
                        "weight": 1,
                        "parent_id": 70
                    },
                    {
                        "id": 88,
                        "countFile": 0,
                        "name": "گوراب زرمیخ",
                        "weight": 1,
                        "parent_id": 70
                    }
                ],
                "name": "صومعه سرا",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 71,
                "countFile": 0,
                "county": [],
                "name": "مرجقل",
                "weight": 1,
                "parent_id": 70
            },
            {
                "id": 72,
                "countFile": 0,
                "county": [],
                "name": "هشتپر (تالش)",
                "weight": 1,
                "parent_id": 59
            },
            {
                "id": 73,
                "countFile": 0,
                "county": [],
                "name": "لیسار",
                "weight": 1,
                "parent_id": 59
            },
            {
                "id": 74,
                "countFile": 0,
                "county": [],
                "name": "اسالم",
                "weight": 1,
                "parent_id": 59
            },
            {
                "id": 75,
                "countFile": 0,
                "county": [
                    {
                        "id": 76,
                        "countFile": 0,
                        "name": "توتکابن",
                        "weight": 1,
                        "parent_id": 75
                    },
                    {
                        "id": 77,
                        "countFile": 0,
                        "name": "جیرنده",
                        "weight": 1,
                        "parent_id": 75
                    },
                    {
                        "id": 78,
                        "countFile": 0,
                        "name": "لوشان",
                        "weight": 1,
                        "parent_id": 75
                    },
                    {
                        "id": 79,
                        "countFile": 0,
                        "name": "منجیل",
                        "weight": 1,
                        "parent_id": 75
                    },
                    {
                        "id": 80,
                        "countFile": 0,
                        "name": "رستم آباد",
                        "weight": 1,
                        "parent_id": 75
                    },
                    {
                        "id": 87,
                        "countFile": 0,
                        "name": "بره سر",
                        "weight": 1,
                        "parent_id": 75
                    }
                ],
                "name": "رودبار",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 76,
                "countFile": 0,
                "county": [],
                "name": "توتکابن",
                "weight": 1,
                "parent_id": 75
            },
            {
                "id": 77,
                "countFile": 0,
                "county": [],
                "name": "جیرنده",
                "weight": 1,
                "parent_id": 75
            },
            {
                "id": 78,
                "countFile": 0,
                "county": [],
                "name": "لوشان",
                "weight": 1,
                "parent_id": 75
            },
            {
                "id": 79,
                "countFile": 0,
                "county": [],
                "name": "منجیل",
                "weight": 1,
                "parent_id": 75
            },
            {
                "id": 80,
                "countFile": 0,
                "county": [],
                "name": "رستم آباد",
                "weight": 1,
                "parent_id": 75
            },
            {
                "id": 81,
                "countFile": 0,
                "county": [
                    {
                        "id": 82,
                        "countFile": 0,
                        "name": "رضوانشهر",
                        "weight": 1,
                        "parent_id": 81
                    },
                    {
                        "id": 85,
                        "countFile": 0,
                        "name": "پره سر",
                        "weight": 1,
                        "parent_id": 81
                    }
                ],
                "name": "رضوانشهر",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 82,
                "countFile": 0,
                "county": [],
                "name": "رضوانشهر",
                "weight": 1,
                "parent_id": 81
            },
            {
                "id": 83,
                "countFile": 0,
                "county": [
                    {
                        "id": 84,
                        "countFile": 0,
                        "name": "رانکوه",
                        "weight": 1,
                        "parent_id": 83
                    }
                ],
                "name": "املش",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 84,
                "countFile": 0,
                "county": [],
                "name": "رانکوه",
                "weight": 1,
                "parent_id": 83
            },
            {
                "id": 85,
                "countFile": 0,
                "county": [],
                "name": "پره سر",
                "weight": 1,
                "parent_id": 81
            },
            {
                "id": 86,
                "countFile": 0,
                "county": [],
                "name": "رحیم آباد",
                "weight": 1,
                "parent_id": 57
            },
            {
                "id": 87,
                "countFile": 0,
                "county": [],
                "name": "بره سر",
                "weight": 1,
                "parent_id": 75
            },
            {
                "id": 88,
                "countFile": 0,
                "county": [],
                "name": "گوراب زرمیخ",
                "weight": 1,
                "parent_id": 70
            },
            {
                "id": 89,
                "countFile": 0,
                "county": [
                    {
                        "id": 90,
                        "countFile": 0,
                        "name": "فومن",
                        "weight": 1,
                        "parent_id": 89
                    },
                    {
                        "id": 91,
                        "countFile": 0,
                        "name": "ماسوله",
                        "weight": 1,
                        "parent_id": 89
                    },
                    {
                        "id": 92,
                        "countFile": 0,
                        "name": "ماکلوان",
                        "weight": 1,
                        "parent_id": 89
                    }
                ],
                "name": "فومن",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 90,
                "countFile": 0,
                "county": [],
                "name": "فومن",
                "weight": 1,
                "parent_id": 89
            },
            {
                "id": 91,
                "countFile": 0,
                "county": [],
                "name": "ماسوله",
                "weight": 1,
                "parent_id": 89
            },
            {
                "id": 92,
                "countFile": 0,
                "county": [],
                "name": "ماکلوان",
                "weight": 1,
                "parent_id": 89
            },
            {
                "id": 93,
                "countFile": 0,
                "county": [
                    {
                        "id": 94,
                        "countFile": 0,
                        "name": "احمدسرگوراب",
                        "weight": 1,
                        "parent_id": 93
                    }
                ],
                "name": "شفت",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 94,
                "countFile": 0,
                "county": [],
                "name": "احمدسرگوراب",
                "weight": 1,
                "parent_id": 93
            },
            {
                "id": 95,
                "countFile": 0,
                "county": [
                    {
                        "id": 96,
                        "countFile": 0,
                        "name": "ماسال",
                        "weight": 1,
                        "parent_id": 95
                    },
                    {
                        "id": 111,
                        "countFile": 0,
                        "name": "بازار جمعه",
                        "weight": 1,
                        "parent_id": 95
                    }
                ],
                "name": "ماسال",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 96,
                "countFile": 0,
                "county": [],
                "name": "ماسال",
                "weight": 1,
                "parent_id": 95
            },
            {
                "id": 97,
                "countFile": 0,
                "county": [
                    {
                        "id": 98,
                        "countFile": 1,
                        "name": "آمل",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 109,
                        "countFile": 0,
                        "name": "تنکابن",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 114,
                        "countFile": 0,
                        "name": "بابل",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 121,
                        "countFile": 0,
                        "name": "بهشهر",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 127,
                        "countFile": 0,
                        "name": "سوادکوه",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 129,
                        "countFile": 0,
                        "name": "رامسر",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 132,
                        "countFile": 0,
                        "name": "ساری",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 138,
                        "countFile": 0,
                        "name": "نوشهر",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 141,
                        "countFile": 0,
                        "name": "قایم شهر",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 144,
                        "countFile": 0,
                        "name": "نور",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 149,
                        "countFile": 0,
                        "name": "بابلسر",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 153,
                        "countFile": 0,
                        "name": "چالوس",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 155,
                        "countFile": 0,
                        "name": "سوادکوه شمالی",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 157,
                        "countFile": 0,
                        "name": "محمودآباد",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 159,
                        "countFile": 0,
                        "name": "نکا",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 162,
                        "countFile": 0,
                        "name": "جویبار",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 164,
                        "countFile": 0,
                        "name": "سیمرغ",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 166,
                        "countFile": 0,
                        "name": "فریدونکنار",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 168,
                        "countFile": 0,
                        "name": "عباس آباد",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 172,
                        "countFile": 0,
                        "name": "میاندورود",
                        "weight": 1,
                        "parent_id": 97
                    },
                    {
                        "id": 174,
                        "countFile": 0,
                        "name": "کلاردشت",
                        "weight": 1,
                        "parent_id": 97
                    }
                ],
                "name": "مازندران",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 98,
                "countFile": 1,
                "county": [
                    {
                        "id": 99,
                        "countFile": 0,
                        "name": "آمل",
                        "weight": 1,
                        "parent_id": 98
                    },
                    {
                        "id": 100,
                        "countFile": 0,
                        "name": "گزنک",
                        "weight": 1,
                        "parent_id": 98
                    },
                    {
                        "id": 112,
                        "countFile": 0,
                        "name": "دابودشت",
                        "weight": 1,
                        "parent_id": 98
                    },
                    {
                        "id": 113,
                        "countFile": 0,
                        "name": "امامزاده عبدالله",
                        "weight": 1,
                        "parent_id": 98
                    },
                    {
                        "id": 1504,
                        "countFile": 0,
                        "name": "رینه",
                        "weight": 1,
                        "parent_id": 98
                    }
                ],
                "name": "آمل",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 99,
                "countFile": 0,
                "county": [],
                "name": "آمل",
                "weight": 1,
                "parent_id": 98
            },
            {
                "id": 100,
                "countFile": 0,
                "county": [],
                "name": "گزنک",
                "weight": 1,
                "parent_id": 98
            },
            {
                "id": 101,
                "countFile": 0,
                "county": [
                    {
                        "id": 102,
                        "countFile": 0,
                        "name": "لنگرود",
                        "weight": 1,
                        "parent_id": 101
                    },
                    {
                        "id": 103,
                        "countFile": 0,
                        "name": "چاف و چمخاله",
                        "weight": 1,
                        "parent_id": 101
                    },
                    {
                        "id": 104,
                        "countFile": 0,
                        "name": "اطاقور",
                        "weight": 1,
                        "parent_id": 101
                    },
                    {
                        "id": 105,
                        "countFile": 0,
                        "name": "کومله",
                        "weight": 1,
                        "parent_id": 101
                    },
                    {
                        "id": 106,
                        "countFile": 0,
                        "name": "شلمان",
                        "weight": 1,
                        "parent_id": 101
                    }
                ],
                "name": "لنگرود",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 102,
                "countFile": 0,
                "county": [],
                "name": "لنگرود",
                "weight": 1,
                "parent_id": 101
            },
            {
                "id": 103,
                "countFile": 0,
                "county": [],
                "name": "چاف و چمخاله",
                "weight": 1,
                "parent_id": 101
            },
            {
                "id": 104,
                "countFile": 0,
                "county": [],
                "name": "اطاقور",
                "weight": 1,
                "parent_id": 101
            },
            {
                "id": 105,
                "countFile": 0,
                "county": [],
                "name": "کومله",
                "weight": 1,
                "parent_id": 101
            },
            {
                "id": 106,
                "countFile": 0,
                "county": [],
                "name": "شلمان",
                "weight": 1,
                "parent_id": 101
            },
            {
                "id": 107,
                "countFile": 0,
                "county": [
                    {
                        "id": 108,
                        "countFile": 0,
                        "name": "دیلمان",
                        "weight": 1,
                        "parent_id": 107
                    }
                ],
                "name": "سیاهکل",
                "weight": 1,
                "parent_id": 44
            },
            {
                "id": 108,
                "countFile": 0,
                "county": [],
                "name": "دیلمان",
                "weight": 1,
                "parent_id": 107
            },
            {
                "id": 109,
                "countFile": 0,
                "county": [
                    {
                        "id": 110,
                        "countFile": 0,
                        "name": "شیرود",
                        "weight": 1,
                        "parent_id": 109
                    },
                    {
                        "id": 125,
                        "countFile": 0,
                        "name": "نشتارود",
                        "weight": 1,
                        "parent_id": 109
                    },
                    {
                        "id": 126,
                        "countFile": 0,
                        "name": "خرم آباد",
                        "weight": 1,
                        "parent_id": 109
                    }
                ],
                "name": "تنکابن",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 110,
                "countFile": 0,
                "county": [],
                "name": "شیرود",
                "weight": 1,
                "parent_id": 109
            },
            {
                "id": 111,
                "countFile": 0,
                "county": [],
                "name": "بازار جمعه",
                "weight": 1,
                "parent_id": 95
            },
            {
                "id": 112,
                "countFile": 0,
                "county": [],
                "name": "دابودشت",
                "weight": 1,
                "parent_id": 98
            },
            {
                "id": 113,
                "countFile": 0,
                "county": [],
                "name": "امامزاده عبدالله",
                "weight": 1,
                "parent_id": 98
            },
            {
                "id": 114,
                "countFile": 0,
                "county": [
                    {
                        "id": 115,
                        "countFile": 0,
                        "name": "خوش رودپی",
                        "weight": 1,
                        "parent_id": 114
                    },
                    {
                        "id": 116,
                        "countFile": 0,
                        "name": "امیرکلا",
                        "weight": 1,
                        "parent_id": 114
                    },
                    {
                        "id": 117,
                        "countFile": 0,
                        "name": "گلوگاه",
                        "weight": 1,
                        "parent_id": 114
                    },
                    {
                        "id": 118,
                        "countFile": 0,
                        "name": "مرزیکلا",
                        "weight": 1,
                        "parent_id": 114
                    },
                    {
                        "id": 119,
                        "countFile": 0,
                        "name": "زرگرمحله",
                        "weight": 1,
                        "parent_id": 114
                    },
                    {
                        "id": 120,
                        "countFile": 0,
                        "name": "گتاب",
                        "weight": 1,
                        "parent_id": 114
                    }
                ],
                "name": "بابل",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 115,
                "countFile": 0,
                "county": [],
                "name": "خوش رودپی",
                "weight": 1,
                "parent_id": 114
            },
            {
                "id": 116,
                "countFile": 0,
                "county": [],
                "name": "امیرکلا",
                "weight": 1,
                "parent_id": 114
            },
            {
                "id": 117,
                "countFile": 0,
                "county": [],
                "name": "گلوگاه",
                "weight": 1,
                "parent_id": 114
            },
            {
                "id": 118,
                "countFile": 0,
                "county": [],
                "name": "مرزیکلا",
                "weight": 1,
                "parent_id": 114
            },
            {
                "id": 119,
                "countFile": 0,
                "county": [],
                "name": "زرگرمحله",
                "weight": 1,
                "parent_id": 114
            },
            {
                "id": 120,
                "countFile": 0,
                "county": [],
                "name": "گتاب",
                "weight": 1,
                "parent_id": 114
            },
            {
                "id": 121,
                "countFile": 0,
                "county": [
                    {
                        "id": 122,
                        "countFile": 0,
                        "name": "بهشهر",
                        "weight": 1,
                        "parent_id": 121
                    },
                    {
                        "id": 123,
                        "countFile": 0,
                        "name": "رستمکلا",
                        "weight": 1,
                        "parent_id": 121
                    },
                    {
                        "id": 124,
                        "countFile": 0,
                        "name": "خلیل شهر",
                        "weight": 1,
                        "parent_id": 121
                    }
                ],
                "name": "بهشهر",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 122,
                "countFile": 0,
                "county": [],
                "name": "بهشهر",
                "weight": 1,
                "parent_id": 121
            },
            {
                "id": 123,
                "countFile": 0,
                "county": [],
                "name": "رستمکلا",
                "weight": 1,
                "parent_id": 121
            },
            {
                "id": 124,
                "countFile": 0,
                "county": [],
                "name": "خلیل شهر",
                "weight": 1,
                "parent_id": 121
            },
            {
                "id": 125,
                "countFile": 0,
                "county": [],
                "name": "نشتارود",
                "weight": 1,
                "parent_id": 109
            },
            {
                "id": 126,
                "countFile": 0,
                "county": [
                    {
                        "id": 1021,
                        "countFile": 0,
                        "name": "سپیددشت",
                        "weight": 1,
                        "parent_id": 126
                    },
                    {
                        "id": 1022,
                        "countFile": 0,
                        "name": "بیران شهر",
                        "weight": 1,
                        "parent_id": 126
                    },
                    {
                        "id": 1023,
                        "countFile": 0,
                        "name": "زاغه",
                        "weight": 1,
                        "parent_id": 126
                    }
                ],
                "name": "خرم آباد",
                "weight": 1,
                "parent_id": 109
            },
            {
                "id": 127,
                "countFile": 0,
                "county": [
                    {
                        "id": 128,
                        "countFile": 0,
                        "name": "زیرآب",
                        "weight": 1,
                        "parent_id": 127
                    },
                    {
                        "id": 136,
                        "countFile": 0,
                        "name": "آلاشت",
                        "weight": 1,
                        "parent_id": 127
                    },
                    {
                        "id": 137,
                        "countFile": 0,
                        "name": "پل سفید",
                        "weight": 1,
                        "parent_id": 127
                    }
                ],
                "name": "سوادکوه",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 128,
                "countFile": 0,
                "county": [],
                "name": "زیرآب",
                "weight": 1,
                "parent_id": 127
            },
            {
                "id": 129,
                "countFile": 0,
                "county": [
                    {
                        "id": 130,
                        "countFile": 0,
                        "name": "رامسر",
                        "weight": 1,
                        "parent_id": 129
                    },
                    {
                        "id": 131,
                        "countFile": 0,
                        "name": "کتالم وسادات شهر",
                        "weight": 1,
                        "parent_id": 129
                    }
                ],
                "name": "رامسر",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 130,
                "countFile": 0,
                "county": [],
                "name": "رامسر",
                "weight": 1,
                "parent_id": 129
            },
            {
                "id": 131,
                "countFile": 0,
                "county": [],
                "name": "کتالم وسادات شهر",
                "weight": 1,
                "parent_id": 129
            },
            {
                "id": 132,
                "countFile": 0,
                "county": [
                    {
                        "id": 133,
                        "countFile": 0,
                        "name": "کیاسر",
                        "weight": 1,
                        "parent_id": 132
                    },
                    {
                        "id": 134,
                        "countFile": 0,
                        "name": "فریم",
                        "weight": 1,
                        "parent_id": 132
                    },
                    {
                        "id": 135,
                        "countFile": 0,
                        "name": "پایین هولار",
                        "weight": 1,
                        "parent_id": 132
                    }
                ],
                "name": "ساری",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 133,
                "countFile": 0,
                "county": [],
                "name": "کیاسر",
                "weight": 1,
                "parent_id": 132
            },
            {
                "id": 134,
                "countFile": 0,
                "county": [],
                "name": "فریم",
                "weight": 1,
                "parent_id": 132
            },
            {
                "id": 135,
                "countFile": 0,
                "county": [],
                "name": "پایین هولار",
                "weight": 1,
                "parent_id": 132
            },
            {
                "id": 136,
                "countFile": 0,
                "county": [],
                "name": "آلاشت",
                "weight": 1,
                "parent_id": 127
            },
            {
                "id": 137,
                "countFile": 0,
                "county": [],
                "name": "پل سفید",
                "weight": 1,
                "parent_id": 127
            },
            {
                "id": 138,
                "countFile": 0,
                "county": [
                    {
                        "id": 139,
                        "countFile": 0,
                        "name": "پول",
                        "weight": 1,
                        "parent_id": 138
                    },
                    {
                        "id": 140,
                        "countFile": 0,
                        "name": "کجور",
                        "weight": 1,
                        "parent_id": 138
                    }
                ],
                "name": "نوشهر",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 139,
                "countFile": 0,
                "county": [],
                "name": "پول",
                "weight": 1,
                "parent_id": 138
            },
            {
                "id": 140,
                "countFile": 0,
                "county": [],
                "name": "کجور",
                "weight": 1,
                "parent_id": 138
            },
            {
                "id": 141,
                "countFile": 0,
                "county": [
                    {
                        "id": 142,
                        "countFile": 0,
                        "name": "قایم شهر",
                        "weight": 1,
                        "parent_id": 141
                    },
                    {
                        "id": 143,
                        "countFile": 0,
                        "name": "ارطه",
                        "weight": 1,
                        "parent_id": 141
                    }
                ],
                "name": "قایم شهر",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 142,
                "countFile": 0,
                "county": [],
                "name": "قایم شهر",
                "weight": 1,
                "parent_id": 141
            },
            {
                "id": 143,
                "countFile": 0,
                "county": [],
                "name": "ارطه",
                "weight": 1,
                "parent_id": 141
            },
            {
                "id": 144,
                "countFile": 0,
                "county": [
                    {
                        "id": 145,
                        "countFile": 0,
                        "name": "بلده",
                        "weight": 1,
                        "parent_id": 144
                    },
                    {
                        "id": 146,
                        "countFile": 0,
                        "name": "چمستان",
                        "weight": 1,
                        "parent_id": 144
                    },
                    {
                        "id": 147,
                        "countFile": 0,
                        "name": "رویان",
                        "weight": 1,
                        "parent_id": 144
                    },
                    {
                        "id": 148,
                        "countFile": 0,
                        "name": "ایزدشهر",
                        "weight": 1,
                        "parent_id": 144
                    }
                ],
                "name": "نور",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 145,
                "countFile": 0,
                "county": [],
                "name": "بلده",
                "weight": 1,
                "parent_id": 144
            },
            {
                "id": 146,
                "countFile": 0,
                "county": [],
                "name": "چمستان",
                "weight": 1,
                "parent_id": 144
            },
            {
                "id": 147,
                "countFile": 0,
                "county": [],
                "name": "رویان",
                "weight": 1,
                "parent_id": 144
            },
            {
                "id": 148,
                "countFile": 0,
                "county": [],
                "name": "ایزدشهر",
                "weight": 1,
                "parent_id": 144
            },
            {
                "id": 149,
                "countFile": 0,
                "county": [
                    {
                        "id": 150,
                        "countFile": 0,
                        "name": "بابلسر",
                        "weight": 1,
                        "parent_id": 149
                    },
                    {
                        "id": 151,
                        "countFile": 0,
                        "name": "بهنمیر",
                        "weight": 1,
                        "parent_id": 149
                    },
                    {
                        "id": 152,
                        "countFile": 0,
                        "name": "هادی شهر",
                        "weight": 1,
                        "parent_id": 149
                    }
                ],
                "name": "بابلسر",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 150,
                "countFile": 0,
                "county": [],
                "name": "بابلسر",
                "weight": 1,
                "parent_id": 149
            },
            {
                "id": 151,
                "countFile": 0,
                "county": [],
                "name": "بهنمیر",
                "weight": 1,
                "parent_id": 149
            },
            {
                "id": 152,
                "countFile": 0,
                "county": [],
                "name": "هادی شهر",
                "weight": 1,
                "parent_id": 149
            },
            {
                "id": 153,
                "countFile": 0,
                "county": [
                    {
                        "id": 154,
                        "countFile": 0,
                        "name": "مرزن آباد",
                        "weight": 1,
                        "parent_id": 153
                    },
                    {
                        "id": 161,
                        "countFile": 0,
                        "name": "هچیرود",
                        "weight": 1,
                        "parent_id": 153
                    }
                ],
                "name": "چالوس",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 154,
                "countFile": 0,
                "county": [],
                "name": "مرزن آباد",
                "weight": 1,
                "parent_id": 153
            },
            {
                "id": 155,
                "countFile": 0,
                "county": [
                    {
                        "id": 156,
                        "countFile": 0,
                        "name": "شیرگاه",
                        "weight": 1,
                        "parent_id": 155
                    }
                ],
                "name": "سوادکوه شمالی",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 156,
                "countFile": 0,
                "county": [],
                "name": "شیرگاه",
                "weight": 1,
                "parent_id": 155
            },
            {
                "id": 157,
                "countFile": 0,
                "county": [
                    {
                        "id": 158,
                        "countFile": 0,
                        "name": "سرخرود",
                        "weight": 1,
                        "parent_id": 157
                    }
                ],
                "name": "محمودآباد",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 158,
                "countFile": 0,
                "county": [],
                "name": "سرخرود",
                "weight": 1,
                "parent_id": 157
            },
            {
                "id": 159,
                "countFile": 0,
                "county": [
                    {
                        "id": 160,
                        "countFile": 0,
                        "name": "نکا",
                        "weight": 1,
                        "parent_id": 159
                    }
                ],
                "name": "نکا",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 160,
                "countFile": 0,
                "county": [],
                "name": "نکا",
                "weight": 1,
                "parent_id": 159
            },
            {
                "id": 161,
                "countFile": 0,
                "county": [],
                "name": "هچیرود",
                "weight": 1,
                "parent_id": 153
            },
            {
                "id": 162,
                "countFile": 0,
                "county": [
                    {
                        "id": 163,
                        "countFile": 0,
                        "name": "کوهی خیل",
                        "weight": 1,
                        "parent_id": 162
                    }
                ],
                "name": "جویبار",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 163,
                "countFile": 0,
                "county": [],
                "name": "کوهی خیل",
                "weight": 1,
                "parent_id": 162
            },
            {
                "id": 164,
                "countFile": 0,
                "county": [
                    {
                        "id": 165,
                        "countFile": 0,
                        "name": "کیاکلا",
                        "weight": 1,
                        "parent_id": 164
                    }
                ],
                "name": "سیمرغ",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 165,
                "countFile": 0,
                "county": [],
                "name": "کیاکلا",
                "weight": 1,
                "parent_id": 164
            },
            {
                "id": 166,
                "countFile": 0,
                "county": [
                    {
                        "id": 167,
                        "countFile": 0,
                        "name": "فریدونکنار",
                        "weight": 1,
                        "parent_id": 166
                    }
                ],
                "name": "فریدونکنار",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 167,
                "countFile": 0,
                "county": [],
                "name": "فریدونکنار",
                "weight": 1,
                "parent_id": 166
            },
            {
                "id": 168,
                "countFile": 0,
                "county": [
                    {
                        "id": 169,
                        "countFile": 0,
                        "name": "عباس اباد",
                        "weight": 1,
                        "parent_id": 168
                    },
                    {
                        "id": 170,
                        "countFile": 0,
                        "name": "سلمان شهر",
                        "weight": 1,
                        "parent_id": 168
                    },
                    {
                        "id": 171,
                        "countFile": 0,
                        "name": "کلارآباد",
                        "weight": 1,
                        "parent_id": 168
                    }
                ],
                "name": "عباس آباد",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 169,
                "countFile": 0,
                "county": [],
                "name": "عباس اباد",
                "weight": 1,
                "parent_id": 168
            },
            {
                "id": 170,
                "countFile": 0,
                "county": [],
                "name": "سلمان شهر",
                "weight": 1,
                "parent_id": 168
            },
            {
                "id": 171,
                "countFile": 0,
                "county": [],
                "name": "کلارآباد",
                "weight": 1,
                "parent_id": 168
            },
            {
                "id": 172,
                "countFile": 0,
                "county": [
                    {
                        "id": 173,
                        "countFile": 0,
                        "name": "سورک",
                        "weight": 1,
                        "parent_id": 172
                    }
                ],
                "name": "میاندورود",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 173,
                "countFile": 0,
                "county": [],
                "name": "سورک",
                "weight": 1,
                "parent_id": 172
            },
            {
                "id": 174,
                "countFile": 0,
                "county": [
                    {
                        "id": 175,
                        "countFile": 0,
                        "name": "کلاردشت",
                        "weight": 1,
                        "parent_id": 174
                    }
                ],
                "name": "کلاردشت",
                "weight": 1,
                "parent_id": 97
            },
            {
                "id": 175,
                "countFile": 0,
                "county": [],
                "name": "کلاردشت",
                "weight": 1,
                "parent_id": 174
            },
            {
                "id": 176,
                "countFile": 0,
                "county": [
                    {
                        "id": 177,
                        "countFile": 0,
                        "name": "اهر",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 180,
                        "countFile": 0,
                        "name": "سراب",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 185,
                        "countFile": 0,
                        "name": "مراغه",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 187,
                        "countFile": 0,
                        "name": "تبریز",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 192,
                        "countFile": 0,
                        "name": "مرند",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 197,
                        "countFile": 0,
                        "name": "میانه",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 202,
                        "countFile": 0,
                        "name": "هشترود",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 205,
                        "countFile": 0,
                        "name": "بناب",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 207,
                        "countFile": 0,
                        "name": "بستان آباد",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 209,
                        "countFile": 0,
                        "name": "شبستر",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 218,
                        "countFile": 0,
                        "name": "کلیبر",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 221,
                        "countFile": 0,
                        "name": "هریس",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 226,
                        "countFile": 0,
                        "name": "جلفا",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 229,
                        "countFile": 0,
                        "name": "ملکان",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 232,
                        "countFile": 0,
                        "name": "آذرشهر",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 236,
                        "countFile": 0,
                        "name": "خداآفرین",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 238,
                        "countFile": 0,
                        "name": "ورزقان",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 240,
                        "countFile": 0,
                        "name": "عجب شیر",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 242,
                        "countFile": 0,
                        "name": "اسکو",
                        "weight": 1,
                        "parent_id": 176
                    },
                    {
                        "id": 245,
                        "countFile": 0,
                        "name": "چاراویماق",
                        "weight": 1,
                        "parent_id": 176
                    }
                ],
                "name": "آذربایجان شرقی",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 177,
                "countFile": 0,
                "county": [
                    {
                        "id": 178,
                        "countFile": 0,
                        "name": "اهر",
                        "weight": 1,
                        "parent_id": 177
                    },
                    {
                        "id": 179,
                        "countFile": 0,
                        "name": "هوراند",
                        "weight": 1,
                        "parent_id": 177
                    }
                ],
                "name": "اهر",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 178,
                "countFile": 0,
                "county": [],
                "name": "اهر",
                "weight": 1,
                "parent_id": 177
            },
            {
                "id": 179,
                "countFile": 0,
                "county": [],
                "name": "هوراند",
                "weight": 1,
                "parent_id": 177
            },
            {
                "id": 180,
                "countFile": 0,
                "county": [
                    {
                        "id": 181,
                        "countFile": 0,
                        "name": "سراب",
                        "weight": 1,
                        "parent_id": 180
                    },
                    {
                        "id": 182,
                        "countFile": 0,
                        "name": "مهربان",
                        "weight": 1,
                        "parent_id": 180
                    },
                    {
                        "id": 183,
                        "countFile": 0,
                        "name": "شربیان",
                        "weight": 1,
                        "parent_id": 180
                    },
                    {
                        "id": 184,
                        "countFile": 0,
                        "name": "دوزدوزان",
                        "weight": 1,
                        "parent_id": 180
                    }
                ],
                "name": "سراب",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 181,
                "countFile": 0,
                "county": [],
                "name": "سراب",
                "weight": 1,
                "parent_id": 180
            },
            {
                "id": 182,
                "countFile": 0,
                "county": [],
                "name": "مهربان",
                "weight": 1,
                "parent_id": 180
            },
            {
                "id": 183,
                "countFile": 0,
                "county": [],
                "name": "شربیان",
                "weight": 1,
                "parent_id": 180
            },
            {
                "id": 184,
                "countFile": 0,
                "county": [],
                "name": "دوزدوزان",
                "weight": 1,
                "parent_id": 180
            },
            {
                "id": 185,
                "countFile": 0,
                "county": [
                    {
                        "id": 186,
                        "countFile": 0,
                        "name": "مراغه",
                        "weight": 1,
                        "parent_id": 185
                    },
                    {
                        "id": 191,
                        "countFile": 0,
                        "name": "خداجو(خراجو)",
                        "weight": 1,
                        "parent_id": 185
                    }
                ],
                "name": "مراغه",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 186,
                "countFile": 0,
                "county": [],
                "name": "مراغه",
                "weight": 1,
                "parent_id": 185
            },
            {
                "id": 187,
                "countFile": 0,
                "county": [
                    {
                        "id": 188,
                        "countFile": 0,
                        "name": "باسمنج",
                        "weight": 1,
                        "parent_id": 187
                    },
                    {
                        "id": 189,
                        "countFile": 0,
                        "name": "سردرود",
                        "weight": 1,
                        "parent_id": 187
                    },
                    {
                        "id": 190,
                        "countFile": 0,
                        "name": "خسروشاه",
                        "weight": 1,
                        "parent_id": 187
                    }
                ],
                "name": "تبریز",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 188,
                "countFile": 0,
                "county": [],
                "name": "باسمنج",
                "weight": 1,
                "parent_id": 187
            },
            {
                "id": 189,
                "countFile": 0,
                "county": [],
                "name": "سردرود",
                "weight": 1,
                "parent_id": 187
            },
            {
                "id": 190,
                "countFile": 0,
                "county": [],
                "name": "خسروشاه",
                "weight": 1,
                "parent_id": 187
            },
            {
                "id": 191,
                "countFile": 0,
                "county": [],
                "name": "خداجو(خراجو)",
                "weight": 1,
                "parent_id": 185
            },
            {
                "id": 192,
                "countFile": 0,
                "county": [
                    {
                        "id": 193,
                        "countFile": 0,
                        "name": "زنوز",
                        "weight": 1,
                        "parent_id": 192
                    },
                    {
                        "id": 194,
                        "countFile": 0,
                        "name": "کشکسرای",
                        "weight": 1,
                        "parent_id": 192
                    },
                    {
                        "id": 195,
                        "countFile": 0,
                        "name": "بناب مرند",
                        "weight": 1,
                        "parent_id": 192
                    },
                    {
                        "id": 196,
                        "countFile": 0,
                        "name": "یامچی",
                        "weight": 1,
                        "parent_id": 192
                    }
                ],
                "name": "مرند",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 193,
                "countFile": 0,
                "county": [],
                "name": "زنوز",
                "weight": 1,
                "parent_id": 192
            },
            {
                "id": 194,
                "countFile": 0,
                "county": [],
                "name": "کشکسرای",
                "weight": 1,
                "parent_id": 192
            },
            {
                "id": 195,
                "countFile": 0,
                "county": [],
                "name": "بناب مرند",
                "weight": 1,
                "parent_id": 192
            },
            {
                "id": 196,
                "countFile": 0,
                "county": [],
                "name": "یامچی",
                "weight": 1,
                "parent_id": 192
            },
            {
                "id": 197,
                "countFile": 0,
                "county": [
                    {
                        "id": 198,
                        "countFile": 0,
                        "name": "ترکمانچای",
                        "weight": 1,
                        "parent_id": 197
                    },
                    {
                        "id": 199,
                        "countFile": 0,
                        "name": "آقکند",
                        "weight": 1,
                        "parent_id": 197
                    },
                    {
                        "id": 200,
                        "countFile": 0,
                        "name": "ترک",
                        "weight": 1,
                        "parent_id": 197
                    },
                    {
                        "id": 201,
                        "countFile": 0,
                        "name": "اچاچی",
                        "weight": 1,
                        "parent_id": 197
                    }
                ],
                "name": "میانه",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 198,
                "countFile": 0,
                "county": [],
                "name": "ترکمانچای",
                "weight": 1,
                "parent_id": 197
            },
            {
                "id": 199,
                "countFile": 0,
                "county": [],
                "name": "آقکند",
                "weight": 1,
                "parent_id": 197
            },
            {
                "id": 200,
                "countFile": 0,
                "county": [],
                "name": "ترک",
                "weight": 1,
                "parent_id": 197
            },
            {
                "id": 201,
                "countFile": 0,
                "county": [],
                "name": "اچاچی",
                "weight": 1,
                "parent_id": 197
            },
            {
                "id": 202,
                "countFile": 0,
                "county": [
                    {
                        "id": 203,
                        "countFile": 0,
                        "name": "هشترود",
                        "weight": 1,
                        "parent_id": 202
                    },
                    {
                        "id": 204,
                        "countFile": 0,
                        "name": "نظرکهریزی",
                        "weight": 1,
                        "parent_id": 202
                    }
                ],
                "name": "هشترود",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 203,
                "countFile": 0,
                "county": [],
                "name": "هشترود",
                "weight": 1,
                "parent_id": 202
            },
            {
                "id": 204,
                "countFile": 0,
                "county": [],
                "name": "نظرکهریزی",
                "weight": 1,
                "parent_id": 202
            },
            {
                "id": 205,
                "countFile": 0,
                "county": [
                    {
                        "id": 206,
                        "countFile": 0,
                        "name": "بناب",
                        "weight": 1,
                        "parent_id": 205
                    }
                ],
                "name": "بناب",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 206,
                "countFile": 0,
                "county": [],
                "name": "بناب",
                "weight": 1,
                "parent_id": 205
            },
            {
                "id": 207,
                "countFile": 0,
                "county": [
                    {
                        "id": 208,
                        "countFile": 0,
                        "name": "تیکمه داش",
                        "weight": 1,
                        "parent_id": 207
                    }
                ],
                "name": "بستان آباد",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 208,
                "countFile": 0,
                "county": [],
                "name": "تیکمه داش",
                "weight": 1,
                "parent_id": 207
            },
            {
                "id": 209,
                "countFile": 0,
                "county": [
                    {
                        "id": 210,
                        "countFile": 0,
                        "name": "صوفیان",
                        "weight": 1,
                        "parent_id": 209
                    },
                    {
                        "id": 211,
                        "countFile": 0,
                        "name": "خامنه",
                        "weight": 1,
                        "parent_id": 209
                    },
                    {
                        "id": 212,
                        "countFile": 0,
                        "name": "شرفخانه",
                        "weight": 1,
                        "parent_id": 209
                    },
                    {
                        "id": 213,
                        "countFile": 0,
                        "name": "شندآباد",
                        "weight": 1,
                        "parent_id": 209
                    },
                    {
                        "id": 214,
                        "countFile": 0,
                        "name": "سیس",
                        "weight": 1,
                        "parent_id": 209
                    },
                    {
                        "id": 215,
                        "countFile": 0,
                        "name": "وایقان",
                        "weight": 1,
                        "parent_id": 209
                    },
                    {
                        "id": 216,
                        "countFile": 0,
                        "name": "کوزه کنان",
                        "weight": 1,
                        "parent_id": 209
                    },
                    {
                        "id": 217,
                        "countFile": 0,
                        "name": "تسوج",
                        "weight": 1,
                        "parent_id": 209
                    }
                ],
                "name": "شبستر",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 210,
                "countFile": 0,
                "county": [],
                "name": "صوفیان",
                "weight": 1,
                "parent_id": 209
            },
            {
                "id": 211,
                "countFile": 0,
                "county": [],
                "name": "خامنه",
                "weight": 1,
                "parent_id": 209
            },
            {
                "id": 212,
                "countFile": 0,
                "county": [],
                "name": "شرفخانه",
                "weight": 1,
                "parent_id": 209
            },
            {
                "id": 213,
                "countFile": 0,
                "county": [],
                "name": "شندآباد",
                "weight": 1,
                "parent_id": 209
            },
            {
                "id": 214,
                "countFile": 0,
                "county": [],
                "name": "سیس",
                "weight": 1,
                "parent_id": 209
            },
            {
                "id": 215,
                "countFile": 0,
                "county": [],
                "name": "وایقان",
                "weight": 1,
                "parent_id": 209
            },
            {
                "id": 216,
                "countFile": 0,
                "county": [],
                "name": "کوزه کنان",
                "weight": 1,
                "parent_id": 209
            },
            {
                "id": 217,
                "countFile": 0,
                "county": [],
                "name": "تسوج",
                "weight": 1,
                "parent_id": 209
            },
            {
                "id": 218,
                "countFile": 0,
                "county": [
                    {
                        "id": 219,
                        "countFile": 0,
                        "name": "کلیبر",
                        "weight": 1,
                        "parent_id": 218
                    },
                    {
                        "id": 220,
                        "countFile": 0,
                        "name": "آبش احمد",
                        "weight": 1,
                        "parent_id": 218
                    }
                ],
                "name": "کلیبر",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 219,
                "countFile": 0,
                "county": [],
                "name": "کلیبر",
                "weight": 1,
                "parent_id": 218
            },
            {
                "id": 220,
                "countFile": 0,
                "county": [],
                "name": "آبش احمد",
                "weight": 1,
                "parent_id": 218
            },
            {
                "id": 221,
                "countFile": 0,
                "county": [
                    {
                        "id": 222,
                        "countFile": 0,
                        "name": "خواجه",
                        "weight": 1,
                        "parent_id": 221
                    },
                    {
                        "id": 223,
                        "countFile": 0,
                        "name": "زرنق",
                        "weight": 1,
                        "parent_id": 221
                    },
                    {
                        "id": 224,
                        "countFile": 0,
                        "name": "بخشایش",
                        "weight": 1,
                        "parent_id": 221
                    },
                    {
                        "id": 225,
                        "countFile": 0,
                        "name": "کلوانق",
                        "weight": 1,
                        "parent_id": 221
                    }
                ],
                "name": "هریس",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 222,
                "countFile": 0,
                "county": [],
                "name": "خواجه",
                "weight": 1,
                "parent_id": 221
            },
            {
                "id": 223,
                "countFile": 0,
                "county": [],
                "name": "زرنق",
                "weight": 1,
                "parent_id": 221
            },
            {
                "id": 224,
                "countFile": 0,
                "county": [],
                "name": "بخشایش",
                "weight": 1,
                "parent_id": 221
            },
            {
                "id": 225,
                "countFile": 0,
                "county": [],
                "name": "کلوانق",
                "weight": 1,
                "parent_id": 221
            },
            {
                "id": 226,
                "countFile": 0,
                "county": [
                    {
                        "id": 227,
                        "countFile": 0,
                        "name": "سیه رود",
                        "weight": 1,
                        "parent_id": 226
                    },
                    {
                        "id": 228,
                        "countFile": 0,
                        "name": "هادیشهر",
                        "weight": 1,
                        "parent_id": 226
                    }
                ],
                "name": "جلفا",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 227,
                "countFile": 0,
                "county": [],
                "name": "سیه رود",
                "weight": 1,
                "parent_id": 226
            },
            {
                "id": 228,
                "countFile": 0,
                "county": [],
                "name": "هادیشهر",
                "weight": 1,
                "parent_id": 226
            },
            {
                "id": 229,
                "countFile": 0,
                "county": [
                    {
                        "id": 230,
                        "countFile": 0,
                        "name": "لیلان",
                        "weight": 1,
                        "parent_id": 229
                    },
                    {
                        "id": 231,
                        "countFile": 0,
                        "name": "مبارک شهر",
                        "weight": 1,
                        "parent_id": 229
                    }
                ],
                "name": "ملکان",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 230,
                "countFile": 0,
                "county": [],
                "name": "لیلان",
                "weight": 1,
                "parent_id": 229
            },
            {
                "id": 231,
                "countFile": 0,
                "county": [],
                "name": "مبارک شهر",
                "weight": 1,
                "parent_id": 229
            },
            {
                "id": 232,
                "countFile": 0,
                "county": [
                    {
                        "id": 233,
                        "countFile": 0,
                        "name": "گوگان",
                        "weight": 1,
                        "parent_id": 232
                    },
                    {
                        "id": 234,
                        "countFile": 0,
                        "name": "تیمورلو",
                        "weight": 1,
                        "parent_id": 232
                    },
                    {
                        "id": 235,
                        "countFile": 0,
                        "name": "ممقان",
                        "weight": 1,
                        "parent_id": 232
                    }
                ],
                "name": "آذرشهر",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 233,
                "countFile": 0,
                "county": [],
                "name": "گوگان",
                "weight": 1,
                "parent_id": 232
            },
            {
                "id": 234,
                "countFile": 0,
                "county": [],
                "name": "تیمورلو",
                "weight": 1,
                "parent_id": 232
            },
            {
                "id": 235,
                "countFile": 0,
                "county": [],
                "name": "ممقان",
                "weight": 1,
                "parent_id": 232
            },
            {
                "id": 236,
                "countFile": 0,
                "county": [
                    {
                        "id": 237,
                        "countFile": 0,
                        "name": "خمارلو",
                        "weight": 1,
                        "parent_id": 236
                    }
                ],
                "name": "خداآفرین",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 237,
                "countFile": 0,
                "county": [],
                "name": "خمارلو",
                "weight": 1,
                "parent_id": 236
            },
            {
                "id": 238,
                "countFile": 0,
                "county": [
                    {
                        "id": 239,
                        "countFile": 0,
                        "name": "ورزقان",
                        "weight": 1,
                        "parent_id": 238
                    },
                    {
                        "id": 247,
                        "countFile": 0,
                        "name": "خاروانا",
                        "weight": 1,
                        "parent_id": 238
                    }
                ],
                "name": "ورزقان",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 239,
                "countFile": 0,
                "county": [],
                "name": "ورزقان",
                "weight": 1,
                "parent_id": 238
            },
            {
                "id": 240,
                "countFile": 0,
                "county": [
                    {
                        "id": 241,
                        "countFile": 0,
                        "name": "جوان قلعه",
                        "weight": 1,
                        "parent_id": 240
                    }
                ],
                "name": "عجب شیر",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 241,
                "countFile": 0,
                "county": [],
                "name": "جوان قلعه",
                "weight": 1,
                "parent_id": 240
            },
            {
                "id": 242,
                "countFile": 0,
                "county": [
                    {
                        "id": 243,
                        "countFile": 0,
                        "name": "ایلخچی",
                        "weight": 1,
                        "parent_id": 242
                    },
                    {
                        "id": 244,
                        "countFile": 0,
                        "name": "سهند",
                        "weight": 1,
                        "parent_id": 242
                    }
                ],
                "name": "اسکو",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 243,
                "countFile": 0,
                "county": [],
                "name": "ایلخچی",
                "weight": 1,
                "parent_id": 242
            },
            {
                "id": 244,
                "countFile": 0,
                "county": [],
                "name": "سهند",
                "weight": 1,
                "parent_id": 242
            },
            {
                "id": 245,
                "countFile": 0,
                "county": [
                    {
                        "id": 246,
                        "countFile": 0,
                        "name": "قره آغاج",
                        "weight": 1,
                        "parent_id": 245
                    }
                ],
                "name": "چاراویماق",
                "weight": 1,
                "parent_id": 176
            },
            {
                "id": 246,
                "countFile": 0,
                "county": [],
                "name": "قره آغاج",
                "weight": 1,
                "parent_id": 245
            },
            {
                "id": 247,
                "countFile": 0,
                "county": [],
                "name": "خاروانا",
                "weight": 1,
                "parent_id": 238
            },
            {
                "id": 248,
                "countFile": 0,
                "county": [
                    {
                        "id": 249,
                        "countFile": 0,
                        "name": "ارومیه",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 254,
                        "countFile": 0,
                        "name": "پیرانشهر",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 257,
                        "countFile": 0,
                        "name": "خوی",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 264,
                        "countFile": 0,
                        "name": "سردشت",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 267,
                        "countFile": 0,
                        "name": "ماکو",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 270,
                        "countFile": 0,
                        "name": "سلماس",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 273,
                        "countFile": 0,
                        "name": "میاندوآب",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 277,
                        "countFile": 0,
                        "name": "نقده",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 279,
                        "countFile": 0,
                        "name": "مهاباد",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 282,
                        "countFile": 0,
                        "name": "تکاب",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 285,
                        "countFile": 0,
                        "name": "بوکان",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 287,
                        "countFile": 0,
                        "name": "اشنویه",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 289,
                        "countFile": 0,
                        "name": "شاهین دژ",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 292,
                        "countFile": 0,
                        "name": "چایپاره",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 294,
                        "countFile": 0,
                        "name": "چالدران",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 297,
                        "countFile": 0,
                        "name": "پلدشت",
                        "weight": 1,
                        "parent_id": 248
                    },
                    {
                        "id": 299,
                        "countFile": 0,
                        "name": "شوط",
                        "weight": 1,
                        "parent_id": 248
                    }
                ],
                "name": "آذربایجان غربی",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 249,
                "countFile": 0,
                "county": [
                    {
                        "id": 250,
                        "countFile": 0,
                        "name": "ارومیه",
                        "weight": 1,
                        "parent_id": 249
                    },
                    {
                        "id": 251,
                        "countFile": 0,
                        "name": "سیلوانه",
                        "weight": 1,
                        "parent_id": 249
                    },
                    {
                        "id": 252,
                        "countFile": 0,
                        "name": "سرو",
                        "weight": 1,
                        "parent_id": 249
                    },
                    {
                        "id": 253,
                        "countFile": 0,
                        "name": "نوشین",
                        "weight": 1,
                        "parent_id": 249
                    },
                    {
                        "id": 1505,
                        "countFile": 0,
                        "name": "قوشچی",
                        "weight": 1,
                        "parent_id": 249
                    }
                ],
                "name": "ارومیه",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 250,
                "countFile": 0,
                "county": [],
                "name": "ارومیه",
                "weight": 1,
                "parent_id": 249
            },
            {
                "id": 251,
                "countFile": 0,
                "county": [],
                "name": "سیلوانه",
                "weight": 1,
                "parent_id": 249
            },
            {
                "id": 252,
                "countFile": 0,
                "county": [],
                "name": "سرو",
                "weight": 1,
                "parent_id": 249
            },
            {
                "id": 253,
                "countFile": 0,
                "county": [],
                "name": "نوشین",
                "weight": 1,
                "parent_id": 249
            },
            {
                "id": 254,
                "countFile": 0,
                "county": [
                    {
                        "id": 255,
                        "countFile": 0,
                        "name": "پیرانشهر",
                        "weight": 1,
                        "parent_id": 254
                    },
                    {
                        "id": 256,
                        "countFile": 0,
                        "name": "گردکشانه",
                        "weight": 1,
                        "parent_id": 254
                    }
                ],
                "name": "پیرانشهر",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 255,
                "countFile": 0,
                "county": [],
                "name": "پیرانشهر",
                "weight": 1,
                "parent_id": 254
            },
            {
                "id": 256,
                "countFile": 0,
                "county": [],
                "name": "گردکشانه",
                "weight": 1,
                "parent_id": 254
            },
            {
                "id": 257,
                "countFile": 0,
                "county": [
                    {
                        "id": 258,
                        "countFile": 0,
                        "name": "خوی",
                        "weight": 1,
                        "parent_id": 257
                    },
                    {
                        "id": 259,
                        "countFile": 0,
                        "name": "فیرورق",
                        "weight": 1,
                        "parent_id": 257
                    },
                    {
                        "id": 260,
                        "countFile": 0,
                        "name": "دیزج دیز",
                        "weight": 1,
                        "parent_id": 257
                    },
                    {
                        "id": 261,
                        "countFile": 0,
                        "name": "زرآباد",
                        "weight": 1,
                        "parent_id": 257
                    },
                    {
                        "id": 262,
                        "countFile": 0,
                        "name": "ایواوغلی",
                        "weight": 1,
                        "parent_id": 257
                    },
                    {
                        "id": 263,
                        "countFile": 0,
                        "name": "قطور",
                        "weight": 1,
                        "parent_id": 257
                    }
                ],
                "name": "خوی",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 258,
                "countFile": 0,
                "county": [],
                "name": "خوی",
                "weight": 1,
                "parent_id": 257
            },
            {
                "id": 259,
                "countFile": 0,
                "county": [],
                "name": "فیرورق",
                "weight": 1,
                "parent_id": 257
            },
            {
                "id": 260,
                "countFile": 0,
                "county": [],
                "name": "دیزج دیز",
                "weight": 1,
                "parent_id": 257
            },
            {
                "id": 261,
                "countFile": 0,
                "county": [],
                "name": "زرآباد",
                "weight": 1,
                "parent_id": 257
            },
            {
                "id": 262,
                "countFile": 0,
                "county": [],
                "name": "ایواوغلی",
                "weight": 1,
                "parent_id": 257
            },
            {
                "id": 263,
                "countFile": 0,
                "county": [],
                "name": "قطور",
                "weight": 1,
                "parent_id": 257
            },
            {
                "id": 264,
                "countFile": 0,
                "county": [
                    {
                        "id": 265,
                        "countFile": 0,
                        "name": "سردشت",
                        "weight": 1,
                        "parent_id": 264
                    },
                    {
                        "id": 266,
                        "countFile": 0,
                        "name": "ربط",
                        "weight": 1,
                        "parent_id": 264
                    },
                    {
                        "id": 269,
                        "countFile": 0,
                        "name": "میرآباد",
                        "weight": 1,
                        "parent_id": 264
                    }
                ],
                "name": "سردشت",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 265,
                "countFile": 0,
                "county": [],
                "name": "سردشت",
                "weight": 1,
                "parent_id": 264
            },
            {
                "id": 266,
                "countFile": 0,
                "county": [],
                "name": "ربط",
                "weight": 1,
                "parent_id": 264
            },
            {
                "id": 267,
                "countFile": 0,
                "county": [
                    {
                        "id": 268,
                        "countFile": 0,
                        "name": "ماکو",
                        "weight": 1,
                        "parent_id": 267
                    },
                    {
                        "id": 272,
                        "countFile": 0,
                        "name": "بازرگان",
                        "weight": 1,
                        "parent_id": 267
                    }
                ],
                "name": "ماکو",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 268,
                "countFile": 0,
                "county": [],
                "name": "ماکو",
                "weight": 1,
                "parent_id": 267
            },
            {
                "id": 269,
                "countFile": 0,
                "county": [],
                "name": "میرآباد",
                "weight": 1,
                "parent_id": 264
            },
            {
                "id": 270,
                "countFile": 0,
                "county": [
                    {
                        "id": 271,
                        "countFile": 0,
                        "name": "تازه شهر",
                        "weight": 1,
                        "parent_id": 270
                    }
                ],
                "name": "سلماس",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 271,
                "countFile": 0,
                "county": [],
                "name": "تازه شهر",
                "weight": 1,
                "parent_id": 270
            },
            {
                "id": 272,
                "countFile": 0,
                "county": [],
                "name": "بازرگان",
                "weight": 1,
                "parent_id": 267
            },
            {
                "id": 273,
                "countFile": 0,
                "county": [
                    {
                        "id": 274,
                        "countFile": 0,
                        "name": "میاندوآب",
                        "weight": 1,
                        "parent_id": 273
                    },
                    {
                        "id": 275,
                        "countFile": 0,
                        "name": "چهاربرج",
                        "weight": 1,
                        "parent_id": 273
                    },
                    {
                        "id": 276,
                        "countFile": 0,
                        "name": "باروق",
                        "weight": 1,
                        "parent_id": 273
                    }
                ],
                "name": "میاندوآب",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 274,
                "countFile": 0,
                "county": [],
                "name": "میاندوآب",
                "weight": 1,
                "parent_id": 273
            },
            {
                "id": 275,
                "countFile": 0,
                "county": [],
                "name": "چهاربرج",
                "weight": 1,
                "parent_id": 273
            },
            {
                "id": 276,
                "countFile": 0,
                "county": [],
                "name": "باروق",
                "weight": 1,
                "parent_id": 273
            },
            {
                "id": 277,
                "countFile": 0,
                "county": [
                    {
                        "id": 278,
                        "countFile": 0,
                        "name": "نقده",
                        "weight": 1,
                        "parent_id": 277
                    },
                    {
                        "id": 284,
                        "countFile": 0,
                        "name": "محمدیار",
                        "weight": 1,
                        "parent_id": 277
                    }
                ],
                "name": "نقده",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 278,
                "countFile": 0,
                "county": [],
                "name": "نقده",
                "weight": 1,
                "parent_id": 277
            },
            {
                "id": 279,
                "countFile": 0,
                "county": [
                    {
                        "id": 280,
                        "countFile": 0,
                        "name": "خلیفان",
                        "weight": 1,
                        "parent_id": 279
                    },
                    {
                        "id": 281,
                        "countFile": 0,
                        "name": "گوگ تپه",
                        "weight": 1,
                        "parent_id": 279
                    }
                ],
                "name": "مهاباد",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 280,
                "countFile": 0,
                "county": [],
                "name": "خلیفان",
                "weight": 1,
                "parent_id": 279
            },
            {
                "id": 281,
                "countFile": 0,
                "county": [],
                "name": "گوگ تپه",
                "weight": 1,
                "parent_id": 279
            },
            {
                "id": 282,
                "countFile": 0,
                "county": [
                    {
                        "id": 283,
                        "countFile": 0,
                        "name": "تکاب",
                        "weight": 1,
                        "parent_id": 282
                    }
                ],
                "name": "تکاب",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 283,
                "countFile": 0,
                "county": [],
                "name": "تکاب",
                "weight": 1,
                "parent_id": 282
            },
            {
                "id": 284,
                "countFile": 0,
                "county": [],
                "name": "محمدیار",
                "weight": 1,
                "parent_id": 277
            },
            {
                "id": 285,
                "countFile": 0,
                "county": [
                    {
                        "id": 286,
                        "countFile": 0,
                        "name": "سیمینه",
                        "weight": 1,
                        "parent_id": 285
                    }
                ],
                "name": "بوکان",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 286,
                "countFile": 0,
                "county": [],
                "name": "سیمینه",
                "weight": 1,
                "parent_id": 285
            },
            {
                "id": 287,
                "countFile": 0,
                "county": [
                    {
                        "id": 288,
                        "countFile": 0,
                        "name": "نالوس",
                        "weight": 1,
                        "parent_id": 287
                    }
                ],
                "name": "اشنویه",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 288,
                "countFile": 0,
                "county": [],
                "name": "نالوس",
                "weight": 1,
                "parent_id": 287
            },
            {
                "id": 289,
                "countFile": 0,
                "county": [
                    {
                        "id": 290,
                        "countFile": 0,
                        "name": "شاهین دژ",
                        "weight": 1,
                        "parent_id": 289
                    },
                    {
                        "id": 291,
                        "countFile": 0,
                        "name": "کشاورز",
                        "weight": 1,
                        "parent_id": 289
                    }
                ],
                "name": "شاهین دژ",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 290,
                "countFile": 0,
                "county": [],
                "name": "شاهین دژ",
                "weight": 1,
                "parent_id": 289
            },
            {
                "id": 291,
                "countFile": 0,
                "county": [],
                "name": "کشاورز",
                "weight": 1,
                "parent_id": 289
            },
            {
                "id": 292,
                "countFile": 0,
                "county": [
                    {
                        "id": 293,
                        "countFile": 0,
                        "name": "قره ضیاءالدین",
                        "weight": 1,
                        "parent_id": 292
                    }
                ],
                "name": "چایپاره",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 293,
                "countFile": 0,
                "county": [],
                "name": "قره ضیاءالدین",
                "weight": 1,
                "parent_id": 292
            },
            {
                "id": 294,
                "countFile": 0,
                "county": [
                    {
                        "id": 295,
                        "countFile": 0,
                        "name": "آواجیق",
                        "weight": 1,
                        "parent_id": 294
                    },
                    {
                        "id": 296,
                        "countFile": 0,
                        "name": "سیه چشمه",
                        "weight": 1,
                        "parent_id": 294
                    }
                ],
                "name": "چالدران",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 295,
                "countFile": 0,
                "county": [],
                "name": "آواجیق",
                "weight": 1,
                "parent_id": 294
            },
            {
                "id": 296,
                "countFile": 0,
                "county": [],
                "name": "سیه چشمه",
                "weight": 1,
                "parent_id": 294
            },
            {
                "id": 297,
                "countFile": 0,
                "county": [
                    {
                        "id": 298,
                        "countFile": 0,
                        "name": "نازک علیا",
                        "weight": 1,
                        "parent_id": 297
                    }
                ],
                "name": "پلدشت",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 298,
                "countFile": 0,
                "county": [],
                "name": "نازک علیا",
                "weight": 1,
                "parent_id": 297
            },
            {
                "id": 299,
                "countFile": 0,
                "county": [
                    {
                        "id": 300,
                        "countFile": 0,
                        "name": "مرگنلر",
                        "weight": 1,
                        "parent_id": 299
                    }
                ],
                "name": "شوط",
                "weight": 1,
                "parent_id": 248
            },
            {
                "id": 300,
                "countFile": 0,
                "county": [],
                "name": "مرگنلر",
                "weight": 1,
                "parent_id": 299
            },
            {
                "id": 301,
                "countFile": 0,
                "county": [
                    {
                        "id": 302,
                        "countFile": 0,
                        "name": "کرمانشاه",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 304,
                        "countFile": 0,
                        "name": "اسلام آبادغرب",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 306,
                        "countFile": 0,
                        "name": "رباط",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 307,
                        "countFile": 0,
                        "name": "کوزران",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 308,
                        "countFile": 0,
                        "name": "پاوه",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 313,
                        "countFile": 0,
                        "name": "سرپل ذهاب",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 315,
                        "countFile": 0,
                        "name": "سنقر",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 318,
                        "countFile": 0,
                        "name": "قصرشیرین",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 320,
                        "countFile": 0,
                        "name": "کنگاور",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 323,
                        "countFile": 0,
                        "name": "گیلانغرب",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 326,
                        "countFile": 0,
                        "name": "جوانرود",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 328,
                        "countFile": 0,
                        "name": "صحنه",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 330,
                        "countFile": 0,
                        "name": "هرسین",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 332,
                        "countFile": 0,
                        "name": "ثلاث باباجانی",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 335,
                        "countFile": 0,
                        "name": "دالاهو",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 339,
                        "countFile": 0,
                        "name": "روانسر",
                        "weight": 1,
                        "parent_id": 301
                    },
                    {
                        "id": 1506,
                        "countFile": 0,
                        "name": "هلشی",
                        "weight": 1,
                        "parent_id": 301
                    }
                ],
                "name": "کرمانشاه",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 302,
                "countFile": 0,
                "county": [
                    {
                        "id": 303,
                        "countFile": 0,
                        "name": "کرمانشاه",
                        "weight": 1,
                        "parent_id": 302
                    }
                ],
                "name": "کرمانشاه",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 303,
                "countFile": 0,
                "county": [],
                "name": "کرمانشاه",
                "weight": 1,
                "parent_id": 302
            },
            {
                "id": 304,
                "countFile": 0,
                "county": [
                    {
                        "id": 305,
                        "countFile": 0,
                        "name": "حمیل",
                        "weight": 1,
                        "parent_id": 304
                    }
                ],
                "name": "اسلام آبادغرب",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 305,
                "countFile": 0,
                "county": [],
                "name": "حمیل",
                "weight": 1,
                "parent_id": 304
            },
            {
                "id": 306,
                "countFile": 0,
                "county": [],
                "name": "رباط",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 307,
                "countFile": 0,
                "county": [],
                "name": "کوزران",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 308,
                "countFile": 0,
                "county": [
                    {
                        "id": 309,
                        "countFile": 0,
                        "name": "باینگان",
                        "weight": 1,
                        "parent_id": 308
                    },
                    {
                        "id": 310,
                        "countFile": 0,
                        "name": "بانوره",
                        "weight": 1,
                        "parent_id": 308
                    },
                    {
                        "id": 311,
                        "countFile": 0,
                        "name": "نودشه",
                        "weight": 1,
                        "parent_id": 308
                    },
                    {
                        "id": 312,
                        "countFile": 0,
                        "name": "نوسود",
                        "weight": 1,
                        "parent_id": 308
                    }
                ],
                "name": "پاوه",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 309,
                "countFile": 0,
                "county": [],
                "name": "باینگان",
                "weight": 1,
                "parent_id": 308
            },
            {
                "id": 310,
                "countFile": 0,
                "county": [],
                "name": "بانوره",
                "weight": 1,
                "parent_id": 308
            },
            {
                "id": 311,
                "countFile": 0,
                "county": [],
                "name": "نودشه",
                "weight": 1,
                "parent_id": 308
            },
            {
                "id": 312,
                "countFile": 0,
                "county": [],
                "name": "نوسود",
                "weight": 1,
                "parent_id": 308
            },
            {
                "id": 313,
                "countFile": 0,
                "county": [
                    {
                        "id": 314,
                        "countFile": 0,
                        "name": "سرپل ذهاب",
                        "weight": 1,
                        "parent_id": 313
                    }
                ],
                "name": "سرپل ذهاب",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 314,
                "countFile": 0,
                "county": [],
                "name": "سرپل ذهاب",
                "weight": 1,
                "parent_id": 313
            },
            {
                "id": 315,
                "countFile": 0,
                "county": [
                    {
                        "id": 316,
                        "countFile": 0,
                        "name": "سنقر",
                        "weight": 1,
                        "parent_id": 315
                    },
                    {
                        "id": 317,
                        "countFile": 0,
                        "name": "سطر",
                        "weight": 1,
                        "parent_id": 315
                    }
                ],
                "name": "سنقر",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 316,
                "countFile": 0,
                "county": [],
                "name": "سنقر",
                "weight": 1,
                "parent_id": 315
            },
            {
                "id": 317,
                "countFile": 0,
                "county": [],
                "name": "سطر",
                "weight": 1,
                "parent_id": 315
            },
            {
                "id": 318,
                "countFile": 0,
                "county": [
                    {
                        "id": 319,
                        "countFile": 0,
                        "name": "سومار",
                        "weight": 1,
                        "parent_id": 318
                    }
                ],
                "name": "قصرشیرین",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 319,
                "countFile": 0,
                "county": [],
                "name": "سومار",
                "weight": 1,
                "parent_id": 318
            },
            {
                "id": 320,
                "countFile": 0,
                "county": [
                    {
                        "id": 321,
                        "countFile": 0,
                        "name": "کنگاور",
                        "weight": 1,
                        "parent_id": 320
                    },
                    {
                        "id": 322,
                        "countFile": 0,
                        "name": "گودین",
                        "weight": 1,
                        "parent_id": 320
                    }
                ],
                "name": "کنگاور",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 321,
                "countFile": 0,
                "county": [],
                "name": "کنگاور",
                "weight": 1,
                "parent_id": 320
            },
            {
                "id": 322,
                "countFile": 0,
                "county": [],
                "name": "گودین",
                "weight": 1,
                "parent_id": 320
            },
            {
                "id": 323,
                "countFile": 0,
                "county": [
                    {
                        "id": 324,
                        "countFile": 0,
                        "name": "گیلانغرب",
                        "weight": 1,
                        "parent_id": 323
                    },
                    {
                        "id": 325,
                        "countFile": 0,
                        "name": "سرمست",
                        "weight": 1,
                        "parent_id": 323
                    }
                ],
                "name": "گیلانغرب",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 324,
                "countFile": 0,
                "county": [],
                "name": "گیلانغرب",
                "weight": 1,
                "parent_id": 323
            },
            {
                "id": 325,
                "countFile": 0,
                "county": [],
                "name": "سرمست",
                "weight": 1,
                "parent_id": 323
            },
            {
                "id": 326,
                "countFile": 0,
                "county": [
                    {
                        "id": 327,
                        "countFile": 0,
                        "name": "جوانرود",
                        "weight": 1,
                        "parent_id": 326
                    }
                ],
                "name": "جوانرود",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 327,
                "countFile": 0,
                "county": [],
                "name": "جوانرود",
                "weight": 1,
                "parent_id": 326
            },
            {
                "id": 328,
                "countFile": 0,
                "county": [
                    {
                        "id": 329,
                        "countFile": 0,
                        "name": "میان راهان",
                        "weight": 1,
                        "parent_id": 328
                    }
                ],
                "name": "صحنه",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 329,
                "countFile": 0,
                "county": [],
                "name": "میان راهان",
                "weight": 1,
                "parent_id": 328
            },
            {
                "id": 330,
                "countFile": 0,
                "county": [
                    {
                        "id": 331,
                        "countFile": 0,
                        "name": "بیستون",
                        "weight": 1,
                        "parent_id": 330
                    }
                ],
                "name": "هرسین",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 331,
                "countFile": 0,
                "county": [],
                "name": "بیستون",
                "weight": 1,
                "parent_id": 330
            },
            {
                "id": 332,
                "countFile": 0,
                "county": [
                    {
                        "id": 333,
                        "countFile": 0,
                        "name": "تازه آباد",
                        "weight": 1,
                        "parent_id": 332
                    },
                    {
                        "id": 334,
                        "countFile": 0,
                        "name": "ازگله",
                        "weight": 1,
                        "parent_id": 332
                    }
                ],
                "name": "ثلاث باباجانی",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 333,
                "countFile": 0,
                "county": [],
                "name": "تازه آباد",
                "weight": 1,
                "parent_id": 332
            },
            {
                "id": 334,
                "countFile": 0,
                "county": [],
                "name": "ازگله",
                "weight": 1,
                "parent_id": 332
            },
            {
                "id": 335,
                "countFile": 0,
                "county": [
                    {
                        "id": 336,
                        "countFile": 0,
                        "name": "گهواره",
                        "weight": 1,
                        "parent_id": 335
                    },
                    {
                        "id": 337,
                        "countFile": 0,
                        "name": "کرند",
                        "weight": 1,
                        "parent_id": 335
                    },
                    {
                        "id": 338,
                        "countFile": 0,
                        "name": "ریجاب",
                        "weight": 1,
                        "parent_id": 335
                    }
                ],
                "name": "دالاهو",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 336,
                "countFile": 0,
                "county": [],
                "name": "گهواره",
                "weight": 1,
                "parent_id": 335
            },
            {
                "id": 337,
                "countFile": 0,
                "county": [],
                "name": "کرند",
                "weight": 1,
                "parent_id": 335
            },
            {
                "id": 338,
                "countFile": 0,
                "county": [],
                "name": "ریجاب",
                "weight": 1,
                "parent_id": 335
            },
            {
                "id": 339,
                "countFile": 0,
                "county": [
                    {
                        "id": 340,
                        "countFile": 0,
                        "name": "شاهو",
                        "weight": 1,
                        "parent_id": 339
                    }
                ],
                "name": "روانسر",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 340,
                "countFile": 0,
                "county": [],
                "name": "شاهو",
                "weight": 1,
                "parent_id": 339
            },
            {
                "id": 341,
                "countFile": 0,
                "county": [
                    {
                        "id": 342,
                        "countFile": 0,
                        "name": "اندیمشک",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 346,
                        "countFile": 0,
                        "name": "اهواز",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 349,
                        "countFile": 0,
                        "name": "آبادان",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 354,
                        "countFile": 0,
                        "name": "ایذه",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 356,
                        "countFile": 0,
                        "name": "دزفول",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 362,
                        "countFile": 0,
                        "name": "بندرماهشهر",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 365,
                        "countFile": 0,
                        "name": "بهبهان",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 369,
                        "countFile": 0,
                        "name": "خرمشهر",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 373,
                        "countFile": 0,
                        "name": "دشت آزادگان",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 377,
                        "countFile": 0,
                        "name": "مسجدسلیمان",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 384,
                        "countFile": 0,
                        "name": "رامهرمز",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 386,
                        "countFile": 0,
                        "name": "شادگان",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 390,
                        "countFile": 0,
                        "name": "شوشتر",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 395,
                        "countFile": 0,
                        "name": "شوش",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 400,
                        "countFile": 0,
                        "name": "باغ ملک",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 405,
                        "countFile": 0,
                        "name": "امیدیه",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 407,
                        "countFile": 0,
                        "name": "لالی",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 409,
                        "countFile": 0,
                        "name": "هندیجان",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 412,
                        "countFile": 0,
                        "name": "اندیکا",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 414,
                        "countFile": 0,
                        "name": "هویزه",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 416,
                        "countFile": 0,
                        "name": "رامشیر",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 419,
                        "countFile": 0,
                        "name": "گتوند",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 425,
                        "countFile": 0,
                        "name": "هفتکل",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 427,
                        "countFile": 0,
                        "name": "باوی",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 431,
                        "countFile": 0,
                        "name": "حمیدیه",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 433,
                        "countFile": 0,
                        "name": "آغاجاری",
                        "weight": 1,
                        "parent_id": 341
                    },
                    {
                        "id": 435,
                        "countFile": 0,
                        "name": "کارون",
                        "weight": 1,
                        "parent_id": 341
                    }
                ],
                "name": "خوزستان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 342,
                "countFile": 0,
                "county": [
                    {
                        "id": 343,
                        "countFile": 0,
                        "name": "اندیمشک",
                        "weight": 1,
                        "parent_id": 342
                    },
                    {
                        "id": 344,
                        "countFile": 0,
                        "name": "آزادی",
                        "weight": 1,
                        "parent_id": 342
                    },
                    {
                        "id": 345,
                        "countFile": 0,
                        "name": "چم گلک",
                        "weight": 1,
                        "parent_id": 342
                    },
                    {
                        "id": 352,
                        "countFile": 0,
                        "name": "حسینیه",
                        "weight": 1,
                        "parent_id": 342
                    },
                    {
                        "id": 353,
                        "countFile": 0,
                        "name": "بیدروبه",
                        "weight": 1,
                        "parent_id": 342
                    }
                ],
                "name": "اندیمشک",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 343,
                "countFile": 0,
                "county": [],
                "name": "اندیمشک",
                "weight": 1,
                "parent_id": 342
            },
            {
                "id": 344,
                "countFile": 0,
                "county": [],
                "name": "آزادی",
                "weight": 1,
                "parent_id": 342
            },
            {
                "id": 345,
                "countFile": 0,
                "county": [],
                "name": "چم گلک",
                "weight": 1,
                "parent_id": 342
            },
            {
                "id": 346,
                "countFile": 0,
                "county": [
                    {
                        "id": 347,
                        "countFile": 0,
                        "name": "اهواز",
                        "weight": 1,
                        "parent_id": 346
                    },
                    {
                        "id": 348,
                        "countFile": 0,
                        "name": "الهایی",
                        "weight": 1,
                        "parent_id": 346
                    }
                ],
                "name": "اهواز",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 347,
                "countFile": 0,
                "county": [],
                "name": "اهواز",
                "weight": 1,
                "parent_id": 346
            },
            {
                "id": 348,
                "countFile": 0,
                "county": [],
                "name": "الهایی",
                "weight": 1,
                "parent_id": 346
            },
            {
                "id": 349,
                "countFile": 0,
                "county": [
                    {
                        "id": 350,
                        "countFile": 0,
                        "name": "اروندکنار",
                        "weight": 1,
                        "parent_id": 349
                    },
                    {
                        "id": 351,
                        "countFile": 0,
                        "name": "چویبده",
                        "weight": 1,
                        "parent_id": 349
                    }
                ],
                "name": "آبادان",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 350,
                "countFile": 0,
                "county": [],
                "name": "اروندکنار",
                "weight": 1,
                "parent_id": 349
            },
            {
                "id": 351,
                "countFile": 0,
                "county": [],
                "name": "چویبده",
                "weight": 1,
                "parent_id": 349
            },
            {
                "id": 352,
                "countFile": 0,
                "county": [],
                "name": "حسینیه",
                "weight": 1,
                "parent_id": 342
            },
            {
                "id": 353,
                "countFile": 0,
                "county": [],
                "name": "بیدروبه",
                "weight": 1,
                "parent_id": 342
            },
            {
                "id": 354,
                "countFile": 0,
                "county": [
                    {
                        "id": 355,
                        "countFile": 0,
                        "name": "دهدز",
                        "weight": 1,
                        "parent_id": 354
                    }
                ],
                "name": "ایذه",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 355,
                "countFile": 0,
                "county": [],
                "name": "دهدز",
                "weight": 1,
                "parent_id": 354
            },
            {
                "id": 356,
                "countFile": 0,
                "county": [
                    {
                        "id": 357,
                        "countFile": 0,
                        "name": "دزفول",
                        "weight": 1,
                        "parent_id": 356
                    },
                    {
                        "id": 358,
                        "countFile": 0,
                        "name": "شمس آباد",
                        "weight": 1,
                        "parent_id": 356
                    },
                    {
                        "id": 359,
                        "countFile": 0,
                        "name": "شهر امام",
                        "weight": 1,
                        "parent_id": 356
                    },
                    {
                        "id": 360,
                        "countFile": 0,
                        "name": "صفی آباد",
                        "weight": 1,
                        "parent_id": 356
                    },
                    {
                        "id": 361,
                        "countFile": 0,
                        "name": "میانرود",
                        "weight": 1,
                        "parent_id": 356
                    },
                    {
                        "id": 375,
                        "countFile": 0,
                        "name": "حمزه",
                        "weight": 1,
                        "parent_id": 356
                    },
                    {
                        "id": 376,
                        "countFile": 0,
                        "name": "سالند",
                        "weight": 1,
                        "parent_id": 356
                    },
                    {
                        "id": 379,
                        "countFile": 0,
                        "name": "سیاه منصور",
                        "weight": 1,
                        "parent_id": 356
                    },
                    {
                        "id": 380,
                        "countFile": 0,
                        "name": "چغامیش",
                        "weight": 1,
                        "parent_id": 356
                    }
                ],
                "name": "دزفول",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 357,
                "countFile": 0,
                "county": [],
                "name": "دزفول",
                "weight": 1,
                "parent_id": 356
            },
            {
                "id": 358,
                "countFile": 0,
                "county": [],
                "name": "شمس آباد",
                "weight": 1,
                "parent_id": 356
            },
            {
                "id": 359,
                "countFile": 0,
                "county": [],
                "name": "شهر امام",
                "weight": 1,
                "parent_id": 356
            },
            {
                "id": 360,
                "countFile": 0,
                "county": [],
                "name": "صفی آباد",
                "weight": 1,
                "parent_id": 356
            },
            {
                "id": 361,
                "countFile": 0,
                "county": [],
                "name": "میانرود",
                "weight": 1,
                "parent_id": 356
            },
            {
                "id": 362,
                "countFile": 0,
                "county": [
                    {
                        "id": 363,
                        "countFile": 0,
                        "name": "بندرامام خمینی",
                        "weight": 1,
                        "parent_id": 362
                    },
                    {
                        "id": 364,
                        "countFile": 0,
                        "name": "چمران",
                        "weight": 1,
                        "parent_id": 362
                    }
                ],
                "name": "بندرماهشهر",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 363,
                "countFile": 0,
                "county": [],
                "name": "بندرامام خمینی",
                "weight": 1,
                "parent_id": 362
            },
            {
                "id": 364,
                "countFile": 0,
                "county": [],
                "name": "چمران",
                "weight": 1,
                "parent_id": 362
            },
            {
                "id": 365,
                "countFile": 0,
                "county": [
                    {
                        "id": 366,
                        "countFile": 0,
                        "name": "بهبهان",
                        "weight": 1,
                        "parent_id": 365
                    },
                    {
                        "id": 367,
                        "countFile": 0,
                        "name": "منصوریه",
                        "weight": 1,
                        "parent_id": 365
                    },
                    {
                        "id": 368,
                        "countFile": 0,
                        "name": "تشان",
                        "weight": 1,
                        "parent_id": 365
                    }
                ],
                "name": "بهبهان",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 366,
                "countFile": 0,
                "county": [],
                "name": "بهبهان",
                "weight": 1,
                "parent_id": 365
            },
            {
                "id": 367,
                "countFile": 0,
                "county": [],
                "name": "منصوریه",
                "weight": 1,
                "parent_id": 365
            },
            {
                "id": 368,
                "countFile": 0,
                "county": [],
                "name": "تشان",
                "weight": 1,
                "parent_id": 365
            },
            {
                "id": 369,
                "countFile": 0,
                "county": [
                    {
                        "id": 370,
                        "countFile": 0,
                        "name": "خرمشهر",
                        "weight": 1,
                        "parent_id": 369
                    },
                    {
                        "id": 371,
                        "countFile": 0,
                        "name": "مقاومت",
                        "weight": 1,
                        "parent_id": 369
                    },
                    {
                        "id": 372,
                        "countFile": 0,
                        "name": "مینوشهر",
                        "weight": 1,
                        "parent_id": 369
                    }
                ],
                "name": "خرمشهر",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 370,
                "countFile": 0,
                "county": [],
                "name": "خرمشهر",
                "weight": 1,
                "parent_id": 369
            },
            {
                "id": 371,
                "countFile": 0,
                "county": [],
                "name": "مقاومت",
                "weight": 1,
                "parent_id": 369
            },
            {
                "id": 372,
                "countFile": 0,
                "county": [],
                "name": "مینوشهر",
                "weight": 1,
                "parent_id": 369
            },
            {
                "id": 373,
                "countFile": 0,
                "county": [
                    {
                        "id": 374,
                        "countFile": 0,
                        "name": "بستان",
                        "weight": 1,
                        "parent_id": 373
                    },
                    {
                        "id": 381,
                        "countFile": 0,
                        "name": "سوسنگرد",
                        "weight": 1,
                        "parent_id": 373
                    },
                    {
                        "id": 382,
                        "countFile": 0,
                        "name": "کوت سیدنعیم",
                        "weight": 1,
                        "parent_id": 373
                    },
                    {
                        "id": 383,
                        "countFile": 0,
                        "name": "ابوحمیظه",
                        "weight": 1,
                        "parent_id": 373
                    }
                ],
                "name": "دشت آزادگان",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 374,
                "countFile": 0,
                "county": [],
                "name": "بستان",
                "weight": 1,
                "parent_id": 373
            },
            {
                "id": 375,
                "countFile": 0,
                "county": [],
                "name": "حمزه",
                "weight": 1,
                "parent_id": 356
            },
            {
                "id": 376,
                "countFile": 0,
                "county": [],
                "name": "سالند",
                "weight": 1,
                "parent_id": 356
            },
            {
                "id": 377,
                "countFile": 0,
                "county": [
                    {
                        "id": 378,
                        "countFile": 0,
                        "name": "گلگیر",
                        "weight": 1,
                        "parent_id": 377
                    }
                ],
                "name": "مسجدسلیمان",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 378,
                "countFile": 0,
                "county": [],
                "name": "گلگیر",
                "weight": 1,
                "parent_id": 377
            },
            {
                "id": 379,
                "countFile": 0,
                "county": [],
                "name": "سیاه منصور",
                "weight": 1,
                "parent_id": 356
            },
            {
                "id": 380,
                "countFile": 0,
                "county": [],
                "name": "چغامیش",
                "weight": 1,
                "parent_id": 356
            },
            {
                "id": 381,
                "countFile": 0,
                "county": [],
                "name": "سوسنگرد",
                "weight": 1,
                "parent_id": 373
            },
            {
                "id": 382,
                "countFile": 0,
                "county": [],
                "name": "کوت سیدنعیم",
                "weight": 1,
                "parent_id": 373
            },
            {
                "id": 383,
                "countFile": 0,
                "county": [],
                "name": "ابوحمیظه",
                "weight": 1,
                "parent_id": 373
            },
            {
                "id": 384,
                "countFile": 0,
                "county": [
                    {
                        "id": 385,
                        "countFile": 0,
                        "name": "رامهرمز",
                        "weight": 1,
                        "parent_id": 384
                    }
                ],
                "name": "رامهرمز",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 385,
                "countFile": 0,
                "county": [],
                "name": "رامهرمز",
                "weight": 1,
                "parent_id": 384
            },
            {
                "id": 386,
                "countFile": 0,
                "county": [
                    {
                        "id": 387,
                        "countFile": 0,
                        "name": "شادگان",
                        "weight": 1,
                        "parent_id": 386
                    },
                    {
                        "id": 388,
                        "countFile": 0,
                        "name": "خنافره",
                        "weight": 1,
                        "parent_id": 386
                    },
                    {
                        "id": 389,
                        "countFile": 0,
                        "name": "دارخوین",
                        "weight": 1,
                        "parent_id": 386
                    }
                ],
                "name": "شادگان",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 387,
                "countFile": 0,
                "county": [],
                "name": "شادگان",
                "weight": 1,
                "parent_id": 386
            },
            {
                "id": 388,
                "countFile": 0,
                "county": [],
                "name": "خنافره",
                "weight": 1,
                "parent_id": 386
            },
            {
                "id": 389,
                "countFile": 0,
                "county": [],
                "name": "دارخوین",
                "weight": 1,
                "parent_id": 386
            },
            {
                "id": 390,
                "countFile": 0,
                "county": [
                    {
                        "id": 391,
                        "countFile": 0,
                        "name": "شوشتر",
                        "weight": 1,
                        "parent_id": 390
                    },
                    {
                        "id": 392,
                        "countFile": 0,
                        "name": "شرافت",
                        "weight": 1,
                        "parent_id": 390
                    },
                    {
                        "id": 393,
                        "countFile": 0,
                        "name": "سرداران",
                        "weight": 1,
                        "parent_id": 390
                    },
                    {
                        "id": 394,
                        "countFile": 0,
                        "name": "گوریه",
                        "weight": 1,
                        "parent_id": 390
                    }
                ],
                "name": "شوشتر",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 391,
                "countFile": 0,
                "county": [],
                "name": "شوشتر",
                "weight": 1,
                "parent_id": 390
            },
            {
                "id": 392,
                "countFile": 0,
                "county": [],
                "name": "شرافت",
                "weight": 1,
                "parent_id": 390
            },
            {
                "id": 393,
                "countFile": 0,
                "county": [],
                "name": "سرداران",
                "weight": 1,
                "parent_id": 390
            },
            {
                "id": 394,
                "countFile": 0,
                "county": [],
                "name": "گوریه",
                "weight": 1,
                "parent_id": 390
            },
            {
                "id": 395,
                "countFile": 0,
                "county": [
                    {
                        "id": 396,
                        "countFile": 0,
                        "name": "شاوور",
                        "weight": 1,
                        "parent_id": 395
                    },
                    {
                        "id": 397,
                        "countFile": 0,
                        "name": "الوان",
                        "weight": 1,
                        "parent_id": 395
                    },
                    {
                        "id": 398,
                        "countFile": 0,
                        "name": "حر",
                        "weight": 1,
                        "parent_id": 395
                    },
                    {
                        "id": 399,
                        "countFile": 0,
                        "name": "فتح المبین",
                        "weight": 1,
                        "parent_id": 395
                    }
                ],
                "name": "شوش",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 396,
                "countFile": 0,
                "county": [],
                "name": "شاوور",
                "weight": 1,
                "parent_id": 395
            },
            {
                "id": 397,
                "countFile": 0,
                "county": [],
                "name": "الوان",
                "weight": 1,
                "parent_id": 395
            },
            {
                "id": 398,
                "countFile": 0,
                "county": [],
                "name": "حر",
                "weight": 1,
                "parent_id": 395
            },
            {
                "id": 399,
                "countFile": 0,
                "county": [],
                "name": "فتح المبین",
                "weight": 1,
                "parent_id": 395
            },
            {
                "id": 400,
                "countFile": 0,
                "county": [
                    {
                        "id": 401,
                        "countFile": 0,
                        "name": "باغ ملک",
                        "weight": 1,
                        "parent_id": 400
                    },
                    {
                        "id": 402,
                        "countFile": 0,
                        "name": "قلعه تل",
                        "weight": 1,
                        "parent_id": 400
                    },
                    {
                        "id": 403,
                        "countFile": 0,
                        "name": "صیدون",
                        "weight": 1,
                        "parent_id": 400
                    },
                    {
                        "id": 404,
                        "countFile": 0,
                        "name": "میداود",
                        "weight": 1,
                        "parent_id": 400
                    }
                ],
                "name": "باغ ملک",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 401,
                "countFile": 0,
                "county": [],
                "name": "باغ ملک",
                "weight": 1,
                "parent_id": 400
            },
            {
                "id": 402,
                "countFile": 0,
                "county": [],
                "name": "قلعه تل",
                "weight": 1,
                "parent_id": 400
            },
            {
                "id": 403,
                "countFile": 0,
                "county": [],
                "name": "صیدون",
                "weight": 1,
                "parent_id": 400
            },
            {
                "id": 404,
                "countFile": 0,
                "county": [],
                "name": "میداود",
                "weight": 1,
                "parent_id": 400
            },
            {
                "id": 405,
                "countFile": 0,
                "county": [
                    {
                        "id": 406,
                        "countFile": 0,
                        "name": "جایزان",
                        "weight": 1,
                        "parent_id": 405
                    }
                ],
                "name": "امیدیه",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 406,
                "countFile": 0,
                "county": [],
                "name": "جایزان",
                "weight": 1,
                "parent_id": 405
            },
            {
                "id": 407,
                "countFile": 0,
                "county": [
                    {
                        "id": 408,
                        "countFile": 0,
                        "name": "لالی",
                        "weight": 1,
                        "parent_id": 407
                    }
                ],
                "name": "لالی",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 408,
                "countFile": 0,
                "county": [],
                "name": "لالی",
                "weight": 1,
                "parent_id": 407
            },
            {
                "id": 409,
                "countFile": 0,
                "county": [
                    {
                        "id": 410,
                        "countFile": 0,
                        "name": "هندیجان",
                        "weight": 1,
                        "parent_id": 409
                    },
                    {
                        "id": 411,
                        "countFile": 0,
                        "name": "زهره",
                        "weight": 1,
                        "parent_id": 409
                    }
                ],
                "name": "هندیجان",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 410,
                "countFile": 0,
                "county": [],
                "name": "هندیجان",
                "weight": 1,
                "parent_id": 409
            },
            {
                "id": 411,
                "countFile": 0,
                "county": [],
                "name": "زهره",
                "weight": 1,
                "parent_id": 409
            },
            {
                "id": 412,
                "countFile": 0,
                "county": [
                    {
                        "id": 413,
                        "countFile": 0,
                        "name": "قلعه خواجه",
                        "weight": 1,
                        "parent_id": 412
                    },
                    {
                        "id": 424,
                        "countFile": 0,
                        "name": "آبژدان",
                        "weight": 1,
                        "parent_id": 412
                    }
                ],
                "name": "اندیکا",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 413,
                "countFile": 0,
                "county": [],
                "name": "قلعه خواجه",
                "weight": 1,
                "parent_id": 412
            },
            {
                "id": 414,
                "countFile": 0,
                "county": [
                    {
                        "id": 415,
                        "countFile": 0,
                        "name": "رفیع",
                        "weight": 1,
                        "parent_id": 414
                    }
                ],
                "name": "هویزه",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 415,
                "countFile": 0,
                "county": [],
                "name": "رفیع",
                "weight": 1,
                "parent_id": 414
            },
            {
                "id": 416,
                "countFile": 0,
                "county": [
                    {
                        "id": 417,
                        "countFile": 0,
                        "name": "رامشیر",
                        "weight": 1,
                        "parent_id": 416
                    },
                    {
                        "id": 418,
                        "countFile": 0,
                        "name": "مشراگه",
                        "weight": 1,
                        "parent_id": 416
                    }
                ],
                "name": "رامشیر",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 417,
                "countFile": 0,
                "county": [],
                "name": "رامشیر",
                "weight": 1,
                "parent_id": 416
            },
            {
                "id": 418,
                "countFile": 0,
                "county": [],
                "name": "مشراگه",
                "weight": 1,
                "parent_id": 416
            },
            {
                "id": 419,
                "countFile": 0,
                "county": [
                    {
                        "id": 420,
                        "countFile": 0,
                        "name": "ترکالکی",
                        "weight": 1,
                        "parent_id": 419
                    },
                    {
                        "id": 421,
                        "countFile": 0,
                        "name": "سماله",
                        "weight": 1,
                        "parent_id": 419
                    },
                    {
                        "id": 422,
                        "countFile": 0,
                        "name": "صالح شهر",
                        "weight": 1,
                        "parent_id": 419
                    },
                    {
                        "id": 423,
                        "countFile": 0,
                        "name": "جنت مکان",
                        "weight": 1,
                        "parent_id": 419
                    }
                ],
                "name": "گتوند",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 420,
                "countFile": 0,
                "county": [],
                "name": "ترکالکی",
                "weight": 1,
                "parent_id": 419
            },
            {
                "id": 421,
                "countFile": 0,
                "county": [],
                "name": "سماله",
                "weight": 1,
                "parent_id": 419
            },
            {
                "id": 422,
                "countFile": 0,
                "county": [],
                "name": "صالح شهر",
                "weight": 1,
                "parent_id": 419
            },
            {
                "id": 423,
                "countFile": 0,
                "county": [],
                "name": "جنت مکان",
                "weight": 1,
                "parent_id": 419
            },
            {
                "id": 424,
                "countFile": 0,
                "county": [],
                "name": "آبژدان",
                "weight": 1,
                "parent_id": 412
            },
            {
                "id": 425,
                "countFile": 0,
                "county": [
                    {
                        "id": 426,
                        "countFile": 0,
                        "name": "هفتگل",
                        "weight": 1,
                        "parent_id": 425
                    }
                ],
                "name": "هفتکل",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 426,
                "countFile": 0,
                "county": [],
                "name": "هفتگل",
                "weight": 1,
                "parent_id": 425
            },
            {
                "id": 427,
                "countFile": 0,
                "county": [
                    {
                        "id": 428,
                        "countFile": 0,
                        "name": "ملاثانی",
                        "weight": 1,
                        "parent_id": 427
                    },
                    {
                        "id": 429,
                        "countFile": 0,
                        "name": "ویس",
                        "weight": 1,
                        "parent_id": 427
                    },
                    {
                        "id": 430,
                        "countFile": 0,
                        "name": "شیبان",
                        "weight": 1,
                        "parent_id": 427
                    }
                ],
                "name": "باوی",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 428,
                "countFile": 0,
                "county": [],
                "name": "ملاثانی",
                "weight": 1,
                "parent_id": 427
            },
            {
                "id": 429,
                "countFile": 0,
                "county": [],
                "name": "ویس",
                "weight": 1,
                "parent_id": 427
            },
            {
                "id": 430,
                "countFile": 0,
                "county": [],
                "name": "شیبان",
                "weight": 1,
                "parent_id": 427
            },
            {
                "id": 431,
                "countFile": 0,
                "county": [
                    {
                        "id": 432,
                        "countFile": 0,
                        "name": "حمیدیه",
                        "weight": 1,
                        "parent_id": 431
                    }
                ],
                "name": "حمیدیه",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 432,
                "countFile": 0,
                "county": [],
                "name": "حمیدیه",
                "weight": 1,
                "parent_id": 431
            },
            {
                "id": 433,
                "countFile": 0,
                "county": [
                    {
                        "id": 434,
                        "countFile": 0,
                        "name": "آغاجاری",
                        "weight": 1,
                        "parent_id": 433
                    }
                ],
                "name": "آغاجاری",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 434,
                "countFile": 0,
                "county": [],
                "name": "آغاجاری",
                "weight": 1,
                "parent_id": 433
            },
            {
                "id": 435,
                "countFile": 0,
                "county": [
                    {
                        "id": 436,
                        "countFile": 0,
                        "name": "کوت عبداله",
                        "weight": 1,
                        "parent_id": 435
                    }
                ],
                "name": "کارون",
                "weight": 1,
                "parent_id": 341
            },
            {
                "id": 436,
                "countFile": 0,
                "county": [],
                "name": "کوت عبداله",
                "weight": 1,
                "parent_id": 435
            },
            {
                "id": 437,
                "countFile": 0,
                "county": [
                    {
                        "id": 438,
                        "countFile": 0,
                        "name": "آباده",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 444,
                        "countFile": 0,
                        "name": "استهبان",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 447,
                        "countFile": 0,
                        "name": "اقلید",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 451,
                        "countFile": 0,
                        "name": "جهرم",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 456,
                        "countFile": 0,
                        "name": "شیراز",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 459,
                        "countFile": 0,
                        "name": "سپیدان",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 461,
                        "countFile": 0,
                        "name": "داراب",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 471,
                        "countFile": 0,
                        "name": "فسا",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 477,
                        "countFile": 0,
                        "name": "فیروزآباد",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 480,
                        "countFile": 0,
                        "name": "کازرون",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 486,
                        "countFile": 0,
                        "name": "لارستان",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 493,
                        "countFile": 0,
                        "name": "مرودشت",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 500,
                        "countFile": 0,
                        "name": "ممسنی",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 504,
                        "countFile": 0,
                        "name": "نی ریز",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 508,
                        "countFile": 0,
                        "name": "لامرد",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 513,
                        "countFile": 0,
                        "name": "بوانات",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 517,
                        "countFile": 0,
                        "name": "ارسنجان",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 519,
                        "countFile": 0,
                        "name": "خرم بید",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 522,
                        "countFile": 0,
                        "name": "زرین دشت",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 526,
                        "countFile": 0,
                        "name": "قیروکارزین",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 528,
                        "countFile": 0,
                        "name": "مهر",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 530,
                        "countFile": 0,
                        "name": "خنج",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 539,
                        "countFile": 0,
                        "name": "فراشبند",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 543,
                        "countFile": 0,
                        "name": "پاسارگاد",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 546,
                        "countFile": 0,
                        "name": "سروستان",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 548,
                        "countFile": 0,
                        "name": "رستم",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 551,
                        "countFile": 0,
                        "name": "گراش",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 553,
                        "countFile": 0,
                        "name": "کوار",
                        "weight": 1,
                        "parent_id": 437
                    },
                    {
                        "id": 555,
                        "countFile": 0,
                        "name": "خرامه",
                        "weight": 1,
                        "parent_id": 437
                    }
                ],
                "name": "فارس",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 438,
                "countFile": 0,
                "county": [
                    {
                        "id": 439,
                        "countFile": 0,
                        "name": "آباده",
                        "weight": 1,
                        "parent_id": 438
                    },
                    {
                        "id": 440,
                        "countFile": 0,
                        "name": "صغاد",
                        "weight": 1,
                        "parent_id": 438
                    },
                    {
                        "id": 441,
                        "countFile": 0,
                        "name": "بهمن",
                        "weight": 1,
                        "parent_id": 438
                    },
                    {
                        "id": 442,
                        "countFile": 0,
                        "name": "ایزدخواست",
                        "weight": 1,
                        "parent_id": 438
                    },
                    {
                        "id": 443,
                        "countFile": 0,
                        "name": "سورمق",
                        "weight": 1,
                        "parent_id": 438
                    }
                ],
                "name": "آباده",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 439,
                "countFile": 0,
                "county": [],
                "name": "آباده",
                "weight": 1,
                "parent_id": 438
            },
            {
                "id": 440,
                "countFile": 0,
                "county": [],
                "name": "صغاد",
                "weight": 1,
                "parent_id": 438
            },
            {
                "id": 441,
                "countFile": 0,
                "county": [],
                "name": "بهمن",
                "weight": 1,
                "parent_id": 438
            },
            {
                "id": 442,
                "countFile": 0,
                "county": [],
                "name": "ایزدخواست",
                "weight": 1,
                "parent_id": 438
            },
            {
                "id": 443,
                "countFile": 0,
                "county": [],
                "name": "سورمق",
                "weight": 1,
                "parent_id": 438
            },
            {
                "id": 444,
                "countFile": 0,
                "county": [
                    {
                        "id": 445,
                        "countFile": 0,
                        "name": "رونیز",
                        "weight": 1,
                        "parent_id": 444
                    },
                    {
                        "id": 446,
                        "countFile": 0,
                        "name": "ایج",
                        "weight": 1,
                        "parent_id": 444
                    }
                ],
                "name": "استهبان",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 445,
                "countFile": 0,
                "county": [],
                "name": "رونیز",
                "weight": 1,
                "parent_id": 444
            },
            {
                "id": 446,
                "countFile": 0,
                "county": [],
                "name": "ایج",
                "weight": 1,
                "parent_id": 444
            },
            {
                "id": 447,
                "countFile": 0,
                "county": [
                    {
                        "id": 448,
                        "countFile": 0,
                        "name": "دژکرد",
                        "weight": 1,
                        "parent_id": 447
                    },
                    {
                        "id": 449,
                        "countFile": 0,
                        "name": "سده",
                        "weight": 1,
                        "parent_id": 447
                    },
                    {
                        "id": 450,
                        "countFile": 0,
                        "name": "حسن اباد",
                        "weight": 1,
                        "parent_id": 447
                    }
                ],
                "name": "اقلید",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 448,
                "countFile": 0,
                "county": [],
                "name": "دژکرد",
                "weight": 1,
                "parent_id": 447
            },
            {
                "id": 449,
                "countFile": 0,
                "county": [],
                "name": "سده",
                "weight": 1,
                "parent_id": 447
            },
            {
                "id": 450,
                "countFile": 0,
                "county": [],
                "name": "حسن اباد",
                "weight": 1,
                "parent_id": 447
            },
            {
                "id": 451,
                "countFile": 0,
                "county": [
                    {
                        "id": 452,
                        "countFile": 0,
                        "name": "خاوران",
                        "weight": 1,
                        "parent_id": 451
                    },
                    {
                        "id": 453,
                        "countFile": 0,
                        "name": "باب انار",
                        "weight": 1,
                        "parent_id": 451
                    },
                    {
                        "id": 454,
                        "countFile": 0,
                        "name": "دوزه",
                        "weight": 1,
                        "parent_id": 451
                    },
                    {
                        "id": 455,
                        "countFile": 0,
                        "name": "قطب آباد",
                        "weight": 1,
                        "parent_id": 451
                    }
                ],
                "name": "جهرم",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 452,
                "countFile": 0,
                "county": [],
                "name": "خاوران",
                "weight": 1,
                "parent_id": 451
            },
            {
                "id": 453,
                "countFile": 0,
                "county": [],
                "name": "باب انار",
                "weight": 1,
                "parent_id": 451
            },
            {
                "id": 454,
                "countFile": 0,
                "county": [],
                "name": "دوزه",
                "weight": 1,
                "parent_id": 451
            },
            {
                "id": 455,
                "countFile": 0,
                "county": [],
                "name": "قطب آباد",
                "weight": 1,
                "parent_id": 451
            },
            {
                "id": 456,
                "countFile": 0,
                "county": [
                    {
                        "id": 457,
                        "countFile": 0,
                        "name": "زرقان",
                        "weight": 1,
                        "parent_id": 456
                    },
                    {
                        "id": 458,
                        "countFile": 0,
                        "name": "لپویی",
                        "weight": 1,
                        "parent_id": 456
                    },
                    {
                        "id": 468,
                        "countFile": 0,
                        "name": "شهرصدرا",
                        "weight": 1,
                        "parent_id": 456
                    },
                    {
                        "id": 469,
                        "countFile": 0,
                        "name": "داریان",
                        "weight": 1,
                        "parent_id": 456
                    },
                    {
                        "id": 470,
                        "countFile": 0,
                        "name": "خانه زنیان",
                        "weight": 1,
                        "parent_id": 456
                    }
                ],
                "name": "شیراز",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 457,
                "countFile": 0,
                "county": [],
                "name": "زرقان",
                "weight": 1,
                "parent_id": 456
            },
            {
                "id": 458,
                "countFile": 0,
                "county": [],
                "name": "لپویی",
                "weight": 1,
                "parent_id": 456
            },
            {
                "id": 459,
                "countFile": 0,
                "county": [
                    {
                        "id": 460,
                        "countFile": 0,
                        "name": "اردکان",
                        "weight": 1,
                        "parent_id": 459
                    },
                    {
                        "id": 466,
                        "countFile": 0,
                        "name": "بیضا",
                        "weight": 1,
                        "parent_id": 459
                    },
                    {
                        "id": 467,
                        "countFile": 0,
                        "name": "هماشهر",
                        "weight": 1,
                        "parent_id": 459
                    }
                ],
                "name": "سپیدان",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 460,
                "countFile": 0,
                "county": [
                    {
                        "id": 1201,
                        "countFile": 0,
                        "name": "احمدآباد",
                        "weight": 1,
                        "parent_id": 460
                    },
                    {
                        "id": 1517,
                        "countFile": 0,
                        "name": "عقدا",
                        "weight": 1,
                        "parent_id": 460
                    }
                ],
                "name": "اردکان",
                "weight": 1,
                "parent_id": 459
            },
            {
                "id": 461,
                "countFile": 0,
                "county": [
                    {
                        "id": 462,
                        "countFile": 0,
                        "name": "داراب",
                        "weight": 1,
                        "parent_id": 461
                    },
                    {
                        "id": 463,
                        "countFile": 0,
                        "name": "فدامی",
                        "weight": 1,
                        "parent_id": 461
                    },
                    {
                        "id": 464,
                        "countFile": 0,
                        "name": "دوبرجی",
                        "weight": 1,
                        "parent_id": 461
                    },
                    {
                        "id": 465,
                        "countFile": 0,
                        "name": "جنت شهر",
                        "weight": 1,
                        "parent_id": 461
                    }
                ],
                "name": "داراب",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 462,
                "countFile": 0,
                "county": [],
                "name": "داراب",
                "weight": 1,
                "parent_id": 461
            },
            {
                "id": 463,
                "countFile": 0,
                "county": [],
                "name": "فدامی",
                "weight": 1,
                "parent_id": 461
            },
            {
                "id": 464,
                "countFile": 0,
                "county": [],
                "name": "دوبرجی",
                "weight": 1,
                "parent_id": 461
            },
            {
                "id": 465,
                "countFile": 0,
                "county": [],
                "name": "جنت شهر",
                "weight": 1,
                "parent_id": 461
            },
            {
                "id": 466,
                "countFile": 0,
                "county": [],
                "name": "بیضا",
                "weight": 1,
                "parent_id": 459
            },
            {
                "id": 467,
                "countFile": 0,
                "county": [],
                "name": "هماشهر",
                "weight": 1,
                "parent_id": 459
            },
            {
                "id": 468,
                "countFile": 0,
                "county": [],
                "name": "شهرصدرا",
                "weight": 1,
                "parent_id": 456
            },
            {
                "id": 469,
                "countFile": 0,
                "county": [],
                "name": "داریان",
                "weight": 1,
                "parent_id": 456
            },
            {
                "id": 470,
                "countFile": 0,
                "county": [],
                "name": "خانه زنیان",
                "weight": 1,
                "parent_id": 456
            },
            {
                "id": 471,
                "countFile": 0,
                "county": [
                    {
                        "id": 472,
                        "countFile": 0,
                        "name": "ششده",
                        "weight": 1,
                        "parent_id": 471
                    },
                    {
                        "id": 473,
                        "countFile": 0,
                        "name": "قره بلاغ",
                        "weight": 1,
                        "parent_id": 471
                    },
                    {
                        "id": 474,
                        "countFile": 0,
                        "name": "زاهدشهر",
                        "weight": 1,
                        "parent_id": 471
                    },
                    {
                        "id": 475,
                        "countFile": 0,
                        "name": "میانشهر",
                        "weight": 1,
                        "parent_id": 471
                    },
                    {
                        "id": 476,
                        "countFile": 0,
                        "name": "نوبندگان",
                        "weight": 1,
                        "parent_id": 471
                    }
                ],
                "name": "فسا",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 472,
                "countFile": 0,
                "county": [],
                "name": "ششده",
                "weight": 1,
                "parent_id": 471
            },
            {
                "id": 473,
                "countFile": 0,
                "county": [],
                "name": "قره بلاغ",
                "weight": 1,
                "parent_id": 471
            },
            {
                "id": 474,
                "countFile": 0,
                "county": [],
                "name": "زاهدشهر",
                "weight": 1,
                "parent_id": 471
            },
            {
                "id": 475,
                "countFile": 0,
                "county": [],
                "name": "میانشهر",
                "weight": 1,
                "parent_id": 471
            },
            {
                "id": 476,
                "countFile": 0,
                "county": [],
                "name": "نوبندگان",
                "weight": 1,
                "parent_id": 471
            },
            {
                "id": 477,
                "countFile": 0,
                "county": [
                    {
                        "id": 478,
                        "countFile": 0,
                        "name": "فیروزآباد",
                        "weight": 1,
                        "parent_id": 477
                    },
                    {
                        "id": 479,
                        "countFile": 0,
                        "name": "میمند",
                        "weight": 1,
                        "parent_id": 477
                    }
                ],
                "name": "فیروزآباد",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 478,
                "countFile": 0,
                "county": [],
                "name": "فیروزآباد",
                "weight": 1,
                "parent_id": 477
            },
            {
                "id": 479,
                "countFile": 0,
                "county": [],
                "name": "میمند",
                "weight": 1,
                "parent_id": 477
            },
            {
                "id": 480,
                "countFile": 0,
                "county": [
                    {
                        "id": 481,
                        "countFile": 0,
                        "name": "بالاده",
                        "weight": 1,
                        "parent_id": 480
                    },
                    {
                        "id": 482,
                        "countFile": 0,
                        "name": "کنارتخته",
                        "weight": 1,
                        "parent_id": 480
                    },
                    {
                        "id": 483,
                        "countFile": 0,
                        "name": "نودان",
                        "weight": 1,
                        "parent_id": 480
                    },
                    {
                        "id": 484,
                        "countFile": 0,
                        "name": "قایمیه",
                        "weight": 1,
                        "parent_id": 480
                    },
                    {
                        "id": 485,
                        "countFile": 0,
                        "name": "خشت",
                        "weight": 1,
                        "parent_id": 480
                    }
                ],
                "name": "کازرون",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 481,
                "countFile": 0,
                "county": [],
                "name": "بالاده",
                "weight": 1,
                "parent_id": 480
            },
            {
                "id": 482,
                "countFile": 0,
                "county": [],
                "name": "کنارتخته",
                "weight": 1,
                "parent_id": 480
            },
            {
                "id": 483,
                "countFile": 0,
                "county": [],
                "name": "نودان",
                "weight": 1,
                "parent_id": 480
            },
            {
                "id": 484,
                "countFile": 0,
                "county": [],
                "name": "قایمیه",
                "weight": 1,
                "parent_id": 480
            },
            {
                "id": 485,
                "countFile": 0,
                "county": [],
                "name": "خشت",
                "weight": 1,
                "parent_id": 480
            },
            {
                "id": 486,
                "countFile": 0,
                "county": [
                    {
                        "id": 487,
                        "countFile": 0,
                        "name": "اوز",
                        "weight": 1,
                        "parent_id": 486
                    },
                    {
                        "id": 488,
                        "countFile": 0,
                        "name": "جویم",
                        "weight": 1,
                        "parent_id": 486
                    },
                    {
                        "id": 489,
                        "countFile": 0,
                        "name": "لار",
                        "weight": 1,
                        "parent_id": 486
                    },
                    {
                        "id": 490,
                        "countFile": 0,
                        "name": "لطیفی",
                        "weight": 1,
                        "parent_id": 486
                    },
                    {
                        "id": 491,
                        "countFile": 0,
                        "name": "خور",
                        "weight": 1,
                        "parent_id": 486
                    },
                    {
                        "id": 492,
                        "countFile": 0,
                        "name": "بیرم",
                        "weight": 1,
                        "parent_id": 486
                    },
                    {
                        "id": 496,
                        "countFile": 0,
                        "name": "بنارویه",
                        "weight": 1,
                        "parent_id": 486
                    },
                    {
                        "id": 497,
                        "countFile": 0,
                        "name": "عمادده",
                        "weight": 1,
                        "parent_id": 486
                    }
                ],
                "name": "لارستان",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 487,
                "countFile": 0,
                "county": [],
                "name": "اوز",
                "weight": 1,
                "parent_id": 486
            },
            {
                "id": 488,
                "countFile": 0,
                "county": [],
                "name": "جویم",
                "weight": 1,
                "parent_id": 486
            },
            {
                "id": 489,
                "countFile": 0,
                "county": [],
                "name": "لار",
                "weight": 1,
                "parent_id": 486
            },
            {
                "id": 490,
                "countFile": 0,
                "county": [],
                "name": "لطیفی",
                "weight": 1,
                "parent_id": 486
            },
            {
                "id": 491,
                "countFile": 0,
                "county": [],
                "name": "خور",
                "weight": 1,
                "parent_id": 486
            },
            {
                "id": 492,
                "countFile": 0,
                "county": [],
                "name": "بیرم",
                "weight": 1,
                "parent_id": 486
            },
            {
                "id": 493,
                "countFile": 0,
                "county": [
                    {
                        "id": 494,
                        "countFile": 0,
                        "name": "سیدان",
                        "weight": 1,
                        "parent_id": 493
                    },
                    {
                        "id": 495,
                        "countFile": 0,
                        "name": "خانیمن",
                        "weight": 1,
                        "parent_id": 493
                    },
                    {
                        "id": 498,
                        "countFile": 0,
                        "name": "کامفیروز",
                        "weight": 1,
                        "parent_id": 493
                    },
                    {
                        "id": 499,
                        "countFile": 0,
                        "name": "رامجرد",
                        "weight": 1,
                        "parent_id": 493
                    }
                ],
                "name": "مرودشت",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 494,
                "countFile": 0,
                "county": [],
                "name": "سیدان",
                "weight": 1,
                "parent_id": 493
            },
            {
                "id": 495,
                "countFile": 0,
                "county": [],
                "name": "خانیمن",
                "weight": 1,
                "parent_id": 493
            },
            {
                "id": 496,
                "countFile": 0,
                "county": [],
                "name": "بنارویه",
                "weight": 1,
                "parent_id": 486
            },
            {
                "id": 497,
                "countFile": 0,
                "county": [],
                "name": "عمادده",
                "weight": 1,
                "parent_id": 486
            },
            {
                "id": 498,
                "countFile": 0,
                "county": [],
                "name": "کامفیروز",
                "weight": 1,
                "parent_id": 493
            },
            {
                "id": 499,
                "countFile": 0,
                "county": [],
                "name": "رامجرد",
                "weight": 1,
                "parent_id": 493
            },
            {
                "id": 500,
                "countFile": 0,
                "county": [
                    {
                        "id": 501,
                        "countFile": 0,
                        "name": "بابامنیر",
                        "weight": 1,
                        "parent_id": 500
                    },
                    {
                        "id": 502,
                        "countFile": 0,
                        "name": "نورآباد",
                        "weight": 1,
                        "parent_id": 500
                    },
                    {
                        "id": 503,
                        "countFile": 0,
                        "name": "خومه زار",
                        "weight": 1,
                        "parent_id": 500
                    }
                ],
                "name": "ممسنی",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 501,
                "countFile": 0,
                "county": [],
                "name": "بابامنیر",
                "weight": 1,
                "parent_id": 500
            },
            {
                "id": 502,
                "countFile": 0,
                "county": [],
                "name": "نورآباد",
                "weight": 1,
                "parent_id": 500
            },
            {
                "id": 503,
                "countFile": 0,
                "county": [],
                "name": "خومه زار",
                "weight": 1,
                "parent_id": 500
            },
            {
                "id": 504,
                "countFile": 0,
                "county": [
                    {
                        "id": 505,
                        "countFile": 0,
                        "name": "آباده طشک",
                        "weight": 1,
                        "parent_id": 504
                    },
                    {
                        "id": 506,
                        "countFile": 0,
                        "name": "مشکان",
                        "weight": 1,
                        "parent_id": 504
                    },
                    {
                        "id": 507,
                        "countFile": 0,
                        "name": "قطرویه",
                        "weight": 1,
                        "parent_id": 504
                    }
                ],
                "name": "نی ریز",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 505,
                "countFile": 0,
                "county": [],
                "name": "آباده طشک",
                "weight": 1,
                "parent_id": 504
            },
            {
                "id": 506,
                "countFile": 0,
                "county": [],
                "name": "مشکان",
                "weight": 1,
                "parent_id": 504
            },
            {
                "id": 507,
                "countFile": 0,
                "county": [],
                "name": "قطرویه",
                "weight": 1,
                "parent_id": 504
            },
            {
                "id": 508,
                "countFile": 0,
                "county": [
                    {
                        "id": 509,
                        "countFile": 0,
                        "name": "لامرد",
                        "weight": 1,
                        "parent_id": 508
                    },
                    {
                        "id": 510,
                        "countFile": 0,
                        "name": "اشکنان",
                        "weight": 1,
                        "parent_id": 508
                    },
                    {
                        "id": 511,
                        "countFile": 0,
                        "name": "اهل",
                        "weight": 1,
                        "parent_id": 508
                    },
                    {
                        "id": 512,
                        "countFile": 0,
                        "name": "علامرودشت",
                        "weight": 1,
                        "parent_id": 508
                    }
                ],
                "name": "لامرد",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 509,
                "countFile": 0,
                "county": [],
                "name": "لامرد",
                "weight": 1,
                "parent_id": 508
            },
            {
                "id": 510,
                "countFile": 0,
                "county": [],
                "name": "اشکنان",
                "weight": 1,
                "parent_id": 508
            },
            {
                "id": 511,
                "countFile": 0,
                "county": [],
                "name": "اهل",
                "weight": 1,
                "parent_id": 508
            },
            {
                "id": 512,
                "countFile": 0,
                "county": [],
                "name": "علامرودشت",
                "weight": 1,
                "parent_id": 508
            },
            {
                "id": 513,
                "countFile": 0,
                "county": [
                    {
                        "id": 514,
                        "countFile": 0,
                        "name": "حسامی",
                        "weight": 1,
                        "parent_id": 513
                    },
                    {
                        "id": 515,
                        "countFile": 0,
                        "name": "کره ای",
                        "weight": 1,
                        "parent_id": 513
                    },
                    {
                        "id": 516,
                        "countFile": 0,
                        "name": "مزایجان",
                        "weight": 1,
                        "parent_id": 513
                    }
                ],
                "name": "بوانات",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 514,
                "countFile": 0,
                "county": [],
                "name": "حسامی",
                "weight": 1,
                "parent_id": 513
            },
            {
                "id": 515,
                "countFile": 0,
                "county": [],
                "name": "کره ای",
                "weight": 1,
                "parent_id": 513
            },
            {
                "id": 516,
                "countFile": 0,
                "county": [],
                "name": "مزایجان",
                "weight": 1,
                "parent_id": 513
            },
            {
                "id": 517,
                "countFile": 0,
                "county": [
                    {
                        "id": 518,
                        "countFile": 0,
                        "name": "ارسنجان",
                        "weight": 1,
                        "parent_id": 517
                    }
                ],
                "name": "ارسنجان",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 518,
                "countFile": 0,
                "county": [],
                "name": "ارسنجان",
                "weight": 1,
                "parent_id": 517
            },
            {
                "id": 519,
                "countFile": 0,
                "county": [
                    {
                        "id": 520,
                        "countFile": 0,
                        "name": "قادراباد",
                        "weight": 1,
                        "parent_id": 519
                    },
                    {
                        "id": 521,
                        "countFile": 0,
                        "name": "صفاشهر",
                        "weight": 1,
                        "parent_id": 519
                    }
                ],
                "name": "خرم بید",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 520,
                "countFile": 0,
                "county": [],
                "name": "قادراباد",
                "weight": 1,
                "parent_id": 519
            },
            {
                "id": 521,
                "countFile": 0,
                "county": [],
                "name": "صفاشهر",
                "weight": 1,
                "parent_id": 519
            },
            {
                "id": 522,
                "countFile": 0,
                "county": [
                    {
                        "id": 523,
                        "countFile": 0,
                        "name": "شهرپیر",
                        "weight": 1,
                        "parent_id": 522
                    },
                    {
                        "id": 524,
                        "countFile": 0,
                        "name": "حاجی آباد",
                        "weight": 1,
                        "parent_id": 522
                    },
                    {
                        "id": 525,
                        "countFile": 0,
                        "name": "دبیران",
                        "weight": 1,
                        "parent_id": 522
                    }
                ],
                "name": "زرین دشت",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 523,
                "countFile": 0,
                "county": [],
                "name": "شهرپیر",
                "weight": 1,
                "parent_id": 522
            },
            {
                "id": 524,
                "countFile": 0,
                "county": [],
                "name": "حاجی آباد",
                "weight": 1,
                "parent_id": 522
            },
            {
                "id": 525,
                "countFile": 0,
                "county": [],
                "name": "دبیران",
                "weight": 1,
                "parent_id": 522
            },
            {
                "id": 526,
                "countFile": 0,
                "county": [
                    {
                        "id": 527,
                        "countFile": 0,
                        "name": "افزر",
                        "weight": 1,
                        "parent_id": 526
                    },
                    {
                        "id": 532,
                        "countFile": 0,
                        "name": "قیر",
                        "weight": 1,
                        "parent_id": 526
                    },
                    {
                        "id": 533,
                        "countFile": 0,
                        "name": "امام شهر",
                        "weight": 1,
                        "parent_id": 526
                    },
                    {
                        "id": 534,
                        "countFile": 0,
                        "name": "مبارک آباددیز",
                        "weight": 1,
                        "parent_id": 526
                    },
                    {
                        "id": 535,
                        "countFile": 0,
                        "name": "کارزین (فتح آباد)",
                        "weight": 1,
                        "parent_id": 526
                    }
                ],
                "name": "قیروکارزین",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 527,
                "countFile": 0,
                "county": [],
                "name": "افزر",
                "weight": 1,
                "parent_id": 526
            },
            {
                "id": 528,
                "countFile": 0,
                "county": [
                    {
                        "id": 529,
                        "countFile": 0,
                        "name": "اسیر",
                        "weight": 1,
                        "parent_id": 528
                    },
                    {
                        "id": 536,
                        "countFile": 0,
                        "name": "گله دار",
                        "weight": 1,
                        "parent_id": 528
                    },
                    {
                        "id": 537,
                        "countFile": 0,
                        "name": "وراوی",
                        "weight": 1,
                        "parent_id": 528
                    },
                    {
                        "id": 538,
                        "countFile": 0,
                        "name": "خوزی",
                        "weight": 1,
                        "parent_id": 528
                    }
                ],
                "name": "مهر",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 529,
                "countFile": 0,
                "county": [],
                "name": "اسیر",
                "weight": 1,
                "parent_id": 528
            },
            {
                "id": 530,
                "countFile": 0,
                "county": [
                    {
                        "id": 531,
                        "countFile": 0,
                        "name": "خنج",
                        "weight": 1,
                        "parent_id": 530
                    }
                ],
                "name": "خنج",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 531,
                "countFile": 0,
                "county": [],
                "name": "خنج",
                "weight": 1,
                "parent_id": 530
            },
            {
                "id": 532,
                "countFile": 0,
                "county": [],
                "name": "قیر",
                "weight": 1,
                "parent_id": 526
            },
            {
                "id": 533,
                "countFile": 0,
                "county": [],
                "name": "امام شهر",
                "weight": 1,
                "parent_id": 526
            },
            {
                "id": 534,
                "countFile": 0,
                "county": [],
                "name": "مبارک آباددیز",
                "weight": 1,
                "parent_id": 526
            },
            {
                "id": 535,
                "countFile": 0,
                "county": [],
                "name": "کارزین (فتح آباد)",
                "weight": 1,
                "parent_id": 526
            },
            {
                "id": 536,
                "countFile": 0,
                "county": [],
                "name": "گله دار",
                "weight": 1,
                "parent_id": 528
            },
            {
                "id": 537,
                "countFile": 0,
                "county": [],
                "name": "وراوی",
                "weight": 1,
                "parent_id": 528
            },
            {
                "id": 538,
                "countFile": 0,
                "county": [],
                "name": "خوزی",
                "weight": 1,
                "parent_id": 528
            },
            {
                "id": 539,
                "countFile": 0,
                "county": [
                    {
                        "id": 540,
                        "countFile": 0,
                        "name": "فراشبند",
                        "weight": 1,
                        "parent_id": 539
                    },
                    {
                        "id": 541,
                        "countFile": 0,
                        "name": "نوجین",
                        "weight": 1,
                        "parent_id": 539
                    },
                    {
                        "id": 542,
                        "countFile": 0,
                        "name": "دهرم",
                        "weight": 1,
                        "parent_id": 539
                    }
                ],
                "name": "فراشبند",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 540,
                "countFile": 0,
                "county": [],
                "name": "فراشبند",
                "weight": 1,
                "parent_id": 539
            },
            {
                "id": 541,
                "countFile": 0,
                "county": [],
                "name": "نوجین",
                "weight": 1,
                "parent_id": 539
            },
            {
                "id": 542,
                "countFile": 0,
                "county": [],
                "name": "دهرم",
                "weight": 1,
                "parent_id": 539
            },
            {
                "id": 543,
                "countFile": 0,
                "county": [
                    {
                        "id": 544,
                        "countFile": 0,
                        "name": "سعادت شهر",
                        "weight": 1,
                        "parent_id": 543
                    },
                    {
                        "id": 545,
                        "countFile": 0,
                        "name": "مادرسلیمان",
                        "weight": 1,
                        "parent_id": 543
                    }
                ],
                "name": "پاسارگاد",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 544,
                "countFile": 0,
                "county": [],
                "name": "سعادت شهر",
                "weight": 1,
                "parent_id": 543
            },
            {
                "id": 545,
                "countFile": 0,
                "county": [],
                "name": "مادرسلیمان",
                "weight": 1,
                "parent_id": 543
            },
            {
                "id": 546,
                "countFile": 0,
                "county": [
                    {
                        "id": 547,
                        "countFile": 0,
                        "name": "کوهنجان",
                        "weight": 1,
                        "parent_id": 546
                    }
                ],
                "name": "سروستان",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 547,
                "countFile": 0,
                "county": [],
                "name": "کوهنجان",
                "weight": 1,
                "parent_id": 546
            },
            {
                "id": 548,
                "countFile": 0,
                "county": [
                    {
                        "id": 549,
                        "countFile": 0,
                        "name": "کوپن",
                        "weight": 1,
                        "parent_id": 548
                    },
                    {
                        "id": 550,
                        "countFile": 0,
                        "name": "مصیری",
                        "weight": 1,
                        "parent_id": 548
                    }
                ],
                "name": "رستم",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 549,
                "countFile": 0,
                "county": [],
                "name": "کوپن",
                "weight": 1,
                "parent_id": 548
            },
            {
                "id": 550,
                "countFile": 0,
                "county": [],
                "name": "مصیری",
                "weight": 1,
                "parent_id": 548
            },
            {
                "id": 551,
                "countFile": 0,
                "county": [
                    {
                        "id": 552,
                        "countFile": 0,
                        "name": "گراش",
                        "weight": 1,
                        "parent_id": 551
                    }
                ],
                "name": "گراش",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 552,
                "countFile": 0,
                "county": [],
                "name": "گراش",
                "weight": 1,
                "parent_id": 551
            },
            {
                "id": 553,
                "countFile": 0,
                "county": [
                    {
                        "id": 554,
                        "countFile": 0,
                        "name": "کوار",
                        "weight": 1,
                        "parent_id": 553
                    }
                ],
                "name": "کوار",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 554,
                "countFile": 0,
                "county": [],
                "name": "کوار",
                "weight": 1,
                "parent_id": 553
            },
            {
                "id": 555,
                "countFile": 0,
                "county": [
                    {
                        "id": 556,
                        "countFile": 0,
                        "name": "سلطان شهر",
                        "weight": 1,
                        "parent_id": 555
                    }
                ],
                "name": "خرامه",
                "weight": 1,
                "parent_id": 437
            },
            {
                "id": 556,
                "countFile": 0,
                "county": [],
                "name": "سلطان شهر",
                "weight": 1,
                "parent_id": 555
            },
            {
                "id": 557,
                "countFile": 0,
                "county": [
                    {
                        "id": 558,
                        "countFile": 0,
                        "name": "بم",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 560,
                        "countFile": 0,
                        "name": "بافت",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 563,
                        "countFile": 0,
                        "name": "جیرفت",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 567,
                        "countFile": 0,
                        "name": "رفسنجان",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 573,
                        "countFile": 0,
                        "name": "زرند",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 578,
                        "countFile": 0,
                        "name": "شهداد",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 579,
                        "countFile": 0,
                        "name": "اندوهجرد",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 580,
                        "countFile": 0,
                        "name": "سیرجان",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 587,
                        "countFile": 0,
                        "name": "گلباف",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 588,
                        "countFile": 0,
                        "name": "شهربابک",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 594,
                        "countFile": 0,
                        "name": "جوپار",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 595,
                        "countFile": 0,
                        "name": "ماهان",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 596,
                        "countFile": 0,
                        "name": "محی آباد",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 597,
                        "countFile": 0,
                        "name": "باغین",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 598,
                        "countFile": 0,
                        "name": "زنگی آباد",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 599,
                        "countFile": 0,
                        "name": "اختیارآباد",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 600,
                        "countFile": 0,
                        "name": "راین",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 601,
                        "countFile": 0,
                        "name": "چترود",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 602,
                        "countFile": 0,
                        "name": "کاظم آباد",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 603,
                        "countFile": 0,
                        "name": "کهنوج",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 605,
                        "countFile": 0,
                        "name": "بردسیر",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 611,
                        "countFile": 0,
                        "name": "راور",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 613,
                        "countFile": 0,
                        "name": "عنبرآباد",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 617,
                        "countFile": 0,
                        "name": "منوجان",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 620,
                        "countFile": 0,
                        "name": "کوهبنان",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 622,
                        "countFile": 0,
                        "name": "رودبارجنوب",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 624,
                        "countFile": 0,
                        "name": "قلعه گنج",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 626,
                        "countFile": 0,
                        "name": "ریگان",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 629,
                        "countFile": 0,
                        "name": "رابر",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 632,
                        "countFile": 0,
                        "name": "فهرج",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 634,
                        "countFile": 0,
                        "name": "انار",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 637,
                        "countFile": 0,
                        "name": "نرماشیر",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 640,
                        "countFile": 0,
                        "name": "فاریاب",
                        "weight": 1,
                        "parent_id": 557
                    },
                    {
                        "id": 642,
                        "countFile": 0,
                        "name": "ارزوییه",
                        "weight": 1,
                        "parent_id": 557
                    }
                ],
                "name": "کرمان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 558,
                "countFile": 0,
                "county": [
                    {
                        "id": 559,
                        "countFile": 0,
                        "name": "بم",
                        "weight": 1,
                        "parent_id": 558
                    },
                    {
                        "id": 1507,
                        "countFile": 0,
                        "name": "بروات",
                        "weight": 1,
                        "parent_id": 558
                    }
                ],
                "name": "بم",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 559,
                "countFile": 0,
                "county": [],
                "name": "بم",
                "weight": 1,
                "parent_id": 558
            },
            {
                "id": 560,
                "countFile": 0,
                "county": [
                    {
                        "id": 561,
                        "countFile": 0,
                        "name": "بافت",
                        "weight": 1,
                        "parent_id": 560
                    },
                    {
                        "id": 562,
                        "countFile": 0,
                        "name": "بزنجان",
                        "weight": 1,
                        "parent_id": 560
                    }
                ],
                "name": "بافت",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 561,
                "countFile": 0,
                "county": [],
                "name": "بافت",
                "weight": 1,
                "parent_id": 560
            },
            {
                "id": 562,
                "countFile": 0,
                "county": [],
                "name": "بزنجان",
                "weight": 1,
                "parent_id": 560
            },
            {
                "id": 563,
                "countFile": 0,
                "county": [
                    {
                        "id": 564,
                        "countFile": 0,
                        "name": "درب بهشت",
                        "weight": 1,
                        "parent_id": 563
                    },
                    {
                        "id": 565,
                        "countFile": 0,
                        "name": "جبالبارز",
                        "weight": 1,
                        "parent_id": 563
                    },
                    {
                        "id": 566,
                        "countFile": 0,
                        "name": "بلوک",
                        "weight": 1,
                        "parent_id": 563
                    }
                ],
                "name": "جیرفت",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 564,
                "countFile": 0,
                "county": [],
                "name": "درب بهشت",
                "weight": 1,
                "parent_id": 563
            },
            {
                "id": 565,
                "countFile": 0,
                "county": [],
                "name": "جبالبارز",
                "weight": 1,
                "parent_id": 563
            },
            {
                "id": 566,
                "countFile": 0,
                "county": [],
                "name": "بلوک",
                "weight": 1,
                "parent_id": 563
            },
            {
                "id": 567,
                "countFile": 0,
                "county": [
                    {
                        "id": 568,
                        "countFile": 0,
                        "name": "رفسنجان",
                        "weight": 1,
                        "parent_id": 567
                    },
                    {
                        "id": 569,
                        "countFile": 0,
                        "name": "مس سرچشمه",
                        "weight": 1,
                        "parent_id": 567
                    },
                    {
                        "id": 570,
                        "countFile": 0,
                        "name": "کشکوییه",
                        "weight": 1,
                        "parent_id": 567
                    },
                    {
                        "id": 571,
                        "countFile": 0,
                        "name": "بهرمان",
                        "weight": 1,
                        "parent_id": 567
                    },
                    {
                        "id": 572,
                        "countFile": 0,
                        "name": "صفاییه",
                        "weight": 1,
                        "parent_id": 567
                    }
                ],
                "name": "رفسنجان",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 568,
                "countFile": 0,
                "county": [],
                "name": "رفسنجان",
                "weight": 1,
                "parent_id": 567
            },
            {
                "id": 569,
                "countFile": 0,
                "county": [],
                "name": "مس سرچشمه",
                "weight": 1,
                "parent_id": 567
            },
            {
                "id": 570,
                "countFile": 0,
                "county": [],
                "name": "کشکوییه",
                "weight": 1,
                "parent_id": 567
            },
            {
                "id": 571,
                "countFile": 0,
                "county": [],
                "name": "بهرمان",
                "weight": 1,
                "parent_id": 567
            },
            {
                "id": 572,
                "countFile": 0,
                "county": [],
                "name": "صفاییه",
                "weight": 1,
                "parent_id": 567
            },
            {
                "id": 573,
                "countFile": 0,
                "county": [
                    {
                        "id": 574,
                        "countFile": 0,
                        "name": "زرند",
                        "weight": 1,
                        "parent_id": 573
                    },
                    {
                        "id": 575,
                        "countFile": 0,
                        "name": "خانوک",
                        "weight": 1,
                        "parent_id": 573
                    },
                    {
                        "id": 576,
                        "countFile": 0,
                        "name": "ریحان",
                        "weight": 1,
                        "parent_id": 573
                    },
                    {
                        "id": 577,
                        "countFile": 0,
                        "name": "یزدان شهر",
                        "weight": 1,
                        "parent_id": 573
                    }
                ],
                "name": "زرند",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 574,
                "countFile": 0,
                "county": [],
                "name": "زرند",
                "weight": 1,
                "parent_id": 573
            },
            {
                "id": 575,
                "countFile": 0,
                "county": [],
                "name": "خانوک",
                "weight": 1,
                "parent_id": 573
            },
            {
                "id": 576,
                "countFile": 0,
                "county": [],
                "name": "ریحان",
                "weight": 1,
                "parent_id": 573
            },
            {
                "id": 577,
                "countFile": 0,
                "county": [],
                "name": "یزدان شهر",
                "weight": 1,
                "parent_id": 573
            },
            {
                "id": 578,
                "countFile": 0,
                "county": [],
                "name": "شهداد",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 579,
                "countFile": 0,
                "county": [],
                "name": "اندوهجرد",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 580,
                "countFile": 0,
                "county": [
                    {
                        "id": 581,
                        "countFile": 0,
                        "name": "سیرجان",
                        "weight": 1,
                        "parent_id": 580
                    },
                    {
                        "id": 582,
                        "countFile": 0,
                        "name": "نجف شهر",
                        "weight": 1,
                        "parent_id": 580
                    },
                    {
                        "id": 583,
                        "countFile": 0,
                        "name": "پاریز",
                        "weight": 1,
                        "parent_id": 580
                    },
                    {
                        "id": 584,
                        "countFile": 0,
                        "name": "خواجو شهر",
                        "weight": 1,
                        "parent_id": 580
                    },
                    {
                        "id": 585,
                        "countFile": 0,
                        "name": "زیدآباد",
                        "weight": 1,
                        "parent_id": 580
                    },
                    {
                        "id": 586,
                        "countFile": 0,
                        "name": "بلورد",
                        "weight": 1,
                        "parent_id": 580
                    }
                ],
                "name": "سیرجان",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 581,
                "countFile": 0,
                "county": [],
                "name": "سیرجان",
                "weight": 1,
                "parent_id": 580
            },
            {
                "id": 582,
                "countFile": 0,
                "county": [],
                "name": "نجف شهر",
                "weight": 1,
                "parent_id": 580
            },
            {
                "id": 583,
                "countFile": 0,
                "county": [],
                "name": "پاریز",
                "weight": 1,
                "parent_id": 580
            },
            {
                "id": 584,
                "countFile": 0,
                "county": [],
                "name": "خواجو شهر",
                "weight": 1,
                "parent_id": 580
            },
            {
                "id": 585,
                "countFile": 0,
                "county": [],
                "name": "زیدآباد",
                "weight": 1,
                "parent_id": 580
            },
            {
                "id": 586,
                "countFile": 0,
                "county": [],
                "name": "بلورد",
                "weight": 1,
                "parent_id": 580
            },
            {
                "id": 587,
                "countFile": 0,
                "county": [],
                "name": "گلباف",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 588,
                "countFile": 0,
                "county": [
                    {
                        "id": 589,
                        "countFile": 0,
                        "name": "شهربابک",
                        "weight": 1,
                        "parent_id": 588
                    },
                    {
                        "id": 590,
                        "countFile": 0,
                        "name": "خورسند",
                        "weight": 1,
                        "parent_id": 588
                    },
                    {
                        "id": 591,
                        "countFile": 0,
                        "name": "خاتون اباد",
                        "weight": 1,
                        "parent_id": 588
                    },
                    {
                        "id": 592,
                        "countFile": 0,
                        "name": "جوزم",
                        "weight": 1,
                        "parent_id": 588
                    },
                    {
                        "id": 593,
                        "countFile": 0,
                        "name": "دهج",
                        "weight": 1,
                        "parent_id": 588
                    }
                ],
                "name": "شهربابک",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 589,
                "countFile": 0,
                "county": [],
                "name": "شهربابک",
                "weight": 1,
                "parent_id": 588
            },
            {
                "id": 590,
                "countFile": 0,
                "county": [],
                "name": "خورسند",
                "weight": 1,
                "parent_id": 588
            },
            {
                "id": 591,
                "countFile": 0,
                "county": [],
                "name": "خاتون اباد",
                "weight": 1,
                "parent_id": 588
            },
            {
                "id": 592,
                "countFile": 0,
                "county": [],
                "name": "جوزم",
                "weight": 1,
                "parent_id": 588
            },
            {
                "id": 593,
                "countFile": 0,
                "county": [],
                "name": "دهج",
                "weight": 1,
                "parent_id": 588
            },
            {
                "id": 594,
                "countFile": 0,
                "county": [],
                "name": "جوپار",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 595,
                "countFile": 0,
                "county": [],
                "name": "ماهان",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 596,
                "countFile": 0,
                "county": [],
                "name": "محی آباد",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 597,
                "countFile": 0,
                "county": [],
                "name": "باغین",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 598,
                "countFile": 0,
                "county": [],
                "name": "زنگی آباد",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 599,
                "countFile": 0,
                "county": [],
                "name": "اختیارآباد",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 600,
                "countFile": 0,
                "county": [],
                "name": "راین",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 601,
                "countFile": 0,
                "county": [],
                "name": "چترود",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 602,
                "countFile": 0,
                "county": [],
                "name": "کاظم آباد",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 603,
                "countFile": 0,
                "county": [
                    {
                        "id": 604,
                        "countFile": 0,
                        "name": "کهنوج",
                        "weight": 1,
                        "parent_id": 603
                    }
                ],
                "name": "کهنوج",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 604,
                "countFile": 0,
                "county": [],
                "name": "کهنوج",
                "weight": 1,
                "parent_id": 603
            },
            {
                "id": 605,
                "countFile": 0,
                "county": [
                    {
                        "id": 606,
                        "countFile": 0,
                        "name": "بردسیر",
                        "weight": 1,
                        "parent_id": 605
                    },
                    {
                        "id": 607,
                        "countFile": 0,
                        "name": "دشتکار",
                        "weight": 1,
                        "parent_id": 605
                    },
                    {
                        "id": 608,
                        "countFile": 0,
                        "name": "لاله زار",
                        "weight": 1,
                        "parent_id": 605
                    },
                    {
                        "id": 609,
                        "countFile": 0,
                        "name": "گلزار",
                        "weight": 1,
                        "parent_id": 605
                    },
                    {
                        "id": 610,
                        "countFile": 0,
                        "name": "نگار",
                        "weight": 1,
                        "parent_id": 605
                    }
                ],
                "name": "بردسیر",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 606,
                "countFile": 0,
                "county": [],
                "name": "بردسیر",
                "weight": 1,
                "parent_id": 605
            },
            {
                "id": 607,
                "countFile": 0,
                "county": [],
                "name": "دشتکار",
                "weight": 1,
                "parent_id": 605
            },
            {
                "id": 608,
                "countFile": 0,
                "county": [],
                "name": "لاله زار",
                "weight": 1,
                "parent_id": 605
            },
            {
                "id": 609,
                "countFile": 0,
                "county": [],
                "name": "گلزار",
                "weight": 1,
                "parent_id": 605
            },
            {
                "id": 610,
                "countFile": 0,
                "county": [],
                "name": "نگار",
                "weight": 1,
                "parent_id": 605
            },
            {
                "id": 611,
                "countFile": 0,
                "county": [
                    {
                        "id": 612,
                        "countFile": 0,
                        "name": "هجدک",
                        "weight": 1,
                        "parent_id": 611
                    }
                ],
                "name": "راور",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 612,
                "countFile": 0,
                "county": [],
                "name": "هجدک",
                "weight": 1,
                "parent_id": 611
            },
            {
                "id": 613,
                "countFile": 0,
                "county": [
                    {
                        "id": 614,
                        "countFile": 0,
                        "name": "عنبرآباد",
                        "weight": 1,
                        "parent_id": 613
                    },
                    {
                        "id": 615,
                        "countFile": 0,
                        "name": "دوساری",
                        "weight": 1,
                        "parent_id": 613
                    },
                    {
                        "id": 616,
                        "countFile": 0,
                        "name": "مردهک",
                        "weight": 1,
                        "parent_id": 613
                    }
                ],
                "name": "عنبرآباد",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 614,
                "countFile": 0,
                "county": [],
                "name": "عنبرآباد",
                "weight": 1,
                "parent_id": 613
            },
            {
                "id": 615,
                "countFile": 0,
                "county": [],
                "name": "دوساری",
                "weight": 1,
                "parent_id": 613
            },
            {
                "id": 616,
                "countFile": 0,
                "county": [],
                "name": "مردهک",
                "weight": 1,
                "parent_id": 613
            },
            {
                "id": 617,
                "countFile": 0,
                "county": [
                    {
                        "id": 618,
                        "countFile": 0,
                        "name": "منوجان",
                        "weight": 1,
                        "parent_id": 617
                    },
                    {
                        "id": 619,
                        "countFile": 0,
                        "name": "نودژ",
                        "weight": 1,
                        "parent_id": 617
                    }
                ],
                "name": "منوجان",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 618,
                "countFile": 0,
                "county": [],
                "name": "منوجان",
                "weight": 1,
                "parent_id": 617
            },
            {
                "id": 619,
                "countFile": 0,
                "county": [],
                "name": "نودژ",
                "weight": 1,
                "parent_id": 617
            },
            {
                "id": 620,
                "countFile": 0,
                "county": [
                    {
                        "id": 621,
                        "countFile": 0,
                        "name": "کیانشهر",
                        "weight": 1,
                        "parent_id": 620
                    }
                ],
                "name": "کوهبنان",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 621,
                "countFile": 0,
                "county": [],
                "name": "کیانشهر",
                "weight": 1,
                "parent_id": 620
            },
            {
                "id": 622,
                "countFile": 0,
                "county": [
                    {
                        "id": 623,
                        "countFile": 0,
                        "name": "زهکلوت",
                        "weight": 1,
                        "parent_id": 622
                    }
                ],
                "name": "رودبارجنوب",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 623,
                "countFile": 0,
                "county": [],
                "name": "زهکلوت",
                "weight": 1,
                "parent_id": 622
            },
            {
                "id": 624,
                "countFile": 0,
                "county": [
                    {
                        "id": 625,
                        "countFile": 0,
                        "name": "قلعه گنج",
                        "weight": 1,
                        "parent_id": 624
                    }
                ],
                "name": "قلعه گنج",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 625,
                "countFile": 0,
                "county": [],
                "name": "قلعه گنج",
                "weight": 1,
                "parent_id": 624
            },
            {
                "id": 626,
                "countFile": 0,
                "county": [
                    {
                        "id": 627,
                        "countFile": 0,
                        "name": "گنبکی",
                        "weight": 1,
                        "parent_id": 626
                    },
                    {
                        "id": 628,
                        "countFile": 0,
                        "name": "محمدآباد",
                        "weight": 1,
                        "parent_id": 626
                    }
                ],
                "name": "ریگان",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 627,
                "countFile": 0,
                "county": [],
                "name": "گنبکی",
                "weight": 1,
                "parent_id": 626
            },
            {
                "id": 628,
                "countFile": 0,
                "county": [],
                "name": "محمدآباد",
                "weight": 1,
                "parent_id": 626
            },
            {
                "id": 629,
                "countFile": 0,
                "county": [
                    {
                        "id": 630,
                        "countFile": 0,
                        "name": "رابر",
                        "weight": 1,
                        "parent_id": 629
                    },
                    {
                        "id": 631,
                        "countFile": 0,
                        "name": "هنزا",
                        "weight": 1,
                        "parent_id": 629
                    }
                ],
                "name": "رابر",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 630,
                "countFile": 0,
                "county": [],
                "name": "رابر",
                "weight": 1,
                "parent_id": 629
            },
            {
                "id": 631,
                "countFile": 0,
                "county": [],
                "name": "هنزا",
                "weight": 1,
                "parent_id": 629
            },
            {
                "id": 632,
                "countFile": 0,
                "county": [
                    {
                        "id": 633,
                        "countFile": 0,
                        "name": "فهرج",
                        "weight": 1,
                        "parent_id": 632
                    }
                ],
                "name": "فهرج",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 633,
                "countFile": 0,
                "county": [],
                "name": "فهرج",
                "weight": 1,
                "parent_id": 632
            },
            {
                "id": 634,
                "countFile": 0,
                "county": [
                    {
                        "id": 635,
                        "countFile": 0,
                        "name": "انار",
                        "weight": 1,
                        "parent_id": 634
                    },
                    {
                        "id": 636,
                        "countFile": 0,
                        "name": "امین شهر",
                        "weight": 1,
                        "parent_id": 634
                    }
                ],
                "name": "انار",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 635,
                "countFile": 0,
                "county": [],
                "name": "انار",
                "weight": 1,
                "parent_id": 634
            },
            {
                "id": 636,
                "countFile": 0,
                "county": [],
                "name": "امین شهر",
                "weight": 1,
                "parent_id": 634
            },
            {
                "id": 637,
                "countFile": 0,
                "county": [
                    {
                        "id": 638,
                        "countFile": 0,
                        "name": "نرماشیر",
                        "weight": 1,
                        "parent_id": 637
                    },
                    {
                        "id": 639,
                        "countFile": 0,
                        "name": "نظام شهر",
                        "weight": 1,
                        "parent_id": 637
                    }
                ],
                "name": "نرماشیر",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 638,
                "countFile": 0,
                "county": [],
                "name": "نرماشیر",
                "weight": 1,
                "parent_id": 637
            },
            {
                "id": 639,
                "countFile": 0,
                "county": [],
                "name": "نظام شهر",
                "weight": 1,
                "parent_id": 637
            },
            {
                "id": 640,
                "countFile": 0,
                "county": [
                    {
                        "id": 641,
                        "countFile": 0,
                        "name": "فاریاب",
                        "weight": 1,
                        "parent_id": 640
                    }
                ],
                "name": "فاریاب",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 641,
                "countFile": 0,
                "county": [],
                "name": "فاریاب",
                "weight": 1,
                "parent_id": 640
            },
            {
                "id": 642,
                "countFile": 0,
                "county": [
                    {
                        "id": 643,
                        "countFile": 0,
                        "name": "ارزوییه",
                        "weight": 1,
                        "parent_id": 642
                    }
                ],
                "name": "ارزوییه",
                "weight": 1,
                "parent_id": 557
            },
            {
                "id": 643,
                "countFile": 0,
                "county": [],
                "name": "ارزوییه",
                "weight": 1,
                "parent_id": 642
            },
            {
                "id": 644,
                "countFile": 0,
                "county": [
                    {
                        "id": 645,
                        "countFile": 0,
                        "name": "درگز",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 649,
                        "countFile": 0,
                        "name": "تایباد",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 653,
                        "countFile": 0,
                        "name": "تربت حیدریه",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 656,
                        "countFile": 0,
                        "name": "سبزوار",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 658,
                        "countFile": 0,
                        "name": "تربت جام",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 663,
                        "countFile": 0,
                        "name": "قوچان",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 669,
                        "countFile": 0,
                        "name": "کاشمر",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 671,
                        "countFile": 0,
                        "name": "گناباد",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 674,
                        "countFile": 0,
                        "name": "مشهد",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 678,
                        "countFile": 0,
                        "name": "نیشابور",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 685,
                        "countFile": 0,
                        "name": "چناران",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 688,
                        "countFile": 0,
                        "name": "خواف",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 691,
                        "countFile": 0,
                        "name": "سرخس",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 695,
                        "countFile": 0,
                        "name": "فریمان",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 700,
                        "countFile": 0,
                        "name": "بردسکن",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 703,
                        "countFile": 0,
                        "name": "رشتخوار",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 705,
                        "countFile": 0,
                        "name": "بینالود",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 707,
                        "countFile": 0,
                        "name": "خلیل آباد",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 709,
                        "countFile": 0,
                        "name": "کلات",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 711,
                        "countFile": 0,
                        "name": "مه ولات",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 714,
                        "countFile": 0,
                        "name": "بجستان",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 718,
                        "countFile": 0,
                        "name": "جغتای",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 720,
                        "countFile": 0,
                        "name": "فیروزه",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 723,
                        "countFile": 0,
                        "name": "زاوه",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 725,
                        "countFile": 0,
                        "name": "داورزن",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 727,
                        "countFile": 0,
                        "name": "خوشاب",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 729,
                        "countFile": 0,
                        "name": "جوین",
                        "weight": 1,
                        "parent_id": 644
                    },
                    {
                        "id": 731,
                        "countFile": 0,
                        "name": "باخرز",
                        "weight": 1,
                        "parent_id": 644
                    }
                ],
                "name": "خراسان رضوی",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 645,
                "countFile": 0,
                "county": [
                    {
                        "id": 646,
                        "countFile": 0,
                        "name": "درگز",
                        "weight": 1,
                        "parent_id": 645
                    },
                    {
                        "id": 647,
                        "countFile": 0,
                        "name": "لطف آباد",
                        "weight": 1,
                        "parent_id": 645
                    },
                    {
                        "id": 648,
                        "countFile": 0,
                        "name": "نوخندان",
                        "weight": 1,
                        "parent_id": 645
                    },
                    {
                        "id": 1508,
                        "countFile": 0,
                        "name": "چاپشلو",
                        "weight": 1,
                        "parent_id": 645
                    }
                ],
                "name": "درگز",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 646,
                "countFile": 0,
                "county": [],
                "name": "درگز",
                "weight": 1,
                "parent_id": 645
            },
            {
                "id": 647,
                "countFile": 0,
                "county": [],
                "name": "لطف آباد",
                "weight": 1,
                "parent_id": 645
            },
            {
                "id": 648,
                "countFile": 0,
                "county": [],
                "name": "نوخندان",
                "weight": 1,
                "parent_id": 645
            },
            {
                "id": 649,
                "countFile": 0,
                "county": [
                    {
                        "id": 650,
                        "countFile": 0,
                        "name": "تایباد",
                        "weight": 1,
                        "parent_id": 649
                    },
                    {
                        "id": 651,
                        "countFile": 0,
                        "name": "کاریز",
                        "weight": 1,
                        "parent_id": 649
                    },
                    {
                        "id": 652,
                        "countFile": 0,
                        "name": "مشهدریزه",
                        "weight": 1,
                        "parent_id": 649
                    }
                ],
                "name": "تایباد",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 650,
                "countFile": 0,
                "county": [],
                "name": "تایباد",
                "weight": 1,
                "parent_id": 649
            },
            {
                "id": 651,
                "countFile": 0,
                "county": [],
                "name": "کاریز",
                "weight": 1,
                "parent_id": 649
            },
            {
                "id": 652,
                "countFile": 0,
                "county": [],
                "name": "مشهدریزه",
                "weight": 1,
                "parent_id": 649
            },
            {
                "id": 653,
                "countFile": 0,
                "county": [
                    {
                        "id": 654,
                        "countFile": 0,
                        "name": "بایک",
                        "weight": 1,
                        "parent_id": 653
                    },
                    {
                        "id": 655,
                        "countFile": 0,
                        "name": "کدکن",
                        "weight": 1,
                        "parent_id": 653
                    },
                    {
                        "id": 660,
                        "countFile": 0,
                        "name": "رباط سنگ",
                        "weight": 1,
                        "parent_id": 653
                    }
                ],
                "name": "تربت حیدریه",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 654,
                "countFile": 0,
                "county": [],
                "name": "بایک",
                "weight": 1,
                "parent_id": 653
            },
            {
                "id": 655,
                "countFile": 0,
                "county": [],
                "name": "کدکن",
                "weight": 1,
                "parent_id": 653
            },
            {
                "id": 656,
                "countFile": 0,
                "county": [
                    {
                        "id": 657,
                        "countFile": 0,
                        "name": "روداب",
                        "weight": 1,
                        "parent_id": 656
                    },
                    {
                        "id": 667,
                        "countFile": 0,
                        "name": "ششتمد",
                        "weight": 1,
                        "parent_id": 656
                    }
                ],
                "name": "سبزوار",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 657,
                "countFile": 0,
                "county": [],
                "name": "روداب",
                "weight": 1,
                "parent_id": 656
            },
            {
                "id": 658,
                "countFile": 0,
                "county": [
                    {
                        "id": 659,
                        "countFile": 0,
                        "name": "تربت جام",
                        "weight": 1,
                        "parent_id": 658
                    },
                    {
                        "id": 661,
                        "countFile": 0,
                        "name": "صالح آباد",
                        "weight": 1,
                        "parent_id": 658
                    },
                    {
                        "id": 662,
                        "countFile": 0,
                        "name": "نصرآباد",
                        "weight": 1,
                        "parent_id": 658
                    },
                    {
                        "id": 665,
                        "countFile": 0,
                        "name": "احمدابادصولت",
                        "weight": 1,
                        "parent_id": 658
                    },
                    {
                        "id": 666,
                        "countFile": 0,
                        "name": "نیل شهر",
                        "weight": 1,
                        "parent_id": 658
                    }
                ],
                "name": "تربت جام",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 659,
                "countFile": 0,
                "county": [],
                "name": "تربت جام",
                "weight": 1,
                "parent_id": 658
            },
            {
                "id": 660,
                "countFile": 0,
                "county": [],
                "name": "رباط سنگ",
                "weight": 1,
                "parent_id": 653
            },
            {
                "id": 661,
                "countFile": 0,
                "county": [],
                "name": "صالح آباد",
                "weight": 1,
                "parent_id": 658
            },
            {
                "id": 662,
                "countFile": 0,
                "county": [],
                "name": "نصرآباد",
                "weight": 1,
                "parent_id": 658
            },
            {
                "id": 663,
                "countFile": 0,
                "county": [
                    {
                        "id": 664,
                        "countFile": 0,
                        "name": "قوچان",
                        "weight": 1,
                        "parent_id": 663
                    },
                    {
                        "id": 668,
                        "countFile": 0,
                        "name": "باجگیران",
                        "weight": 1,
                        "parent_id": 663
                    }
                ],
                "name": "قوچان",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 664,
                "countFile": 0,
                "county": [],
                "name": "قوچان",
                "weight": 1,
                "parent_id": 663
            },
            {
                "id": 665,
                "countFile": 0,
                "county": [],
                "name": "احمدابادصولت",
                "weight": 1,
                "parent_id": 658
            },
            {
                "id": 666,
                "countFile": 0,
                "county": [],
                "name": "نیل شهر",
                "weight": 1,
                "parent_id": 658
            },
            {
                "id": 667,
                "countFile": 0,
                "county": [],
                "name": "ششتمد",
                "weight": 1,
                "parent_id": 656
            },
            {
                "id": 668,
                "countFile": 0,
                "county": [],
                "name": "باجگیران",
                "weight": 1,
                "parent_id": 663
            },
            {
                "id": 669,
                "countFile": 0,
                "county": [
                    {
                        "id": 670,
                        "countFile": 0,
                        "name": "ریوش",
                        "weight": 1,
                        "parent_id": 669
                    }
                ],
                "name": "کاشمر",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 670,
                "countFile": 0,
                "county": [],
                "name": "ریوش",
                "weight": 1,
                "parent_id": 669
            },
            {
                "id": 671,
                "countFile": 0,
                "county": [
                    {
                        "id": 672,
                        "countFile": 0,
                        "name": "کاخک",
                        "weight": 1,
                        "parent_id": 671
                    },
                    {
                        "id": 673,
                        "countFile": 0,
                        "name": "بیدخت",
                        "weight": 1,
                        "parent_id": 671
                    }
                ],
                "name": "گناباد",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 672,
                "countFile": 0,
                "county": [],
                "name": "کاخک",
                "weight": 1,
                "parent_id": 671
            },
            {
                "id": 673,
                "countFile": 0,
                "county": [],
                "name": "بیدخت",
                "weight": 1,
                "parent_id": 671
            },
            {
                "id": 674,
                "countFile": 0,
                "county": [
                    {
                        "id": 675,
                        "countFile": 0,
                        "name": "ملک آباد",
                        "weight": 1,
                        "parent_id": 674
                    },
                    {
                        "id": 676,
                        "countFile": 0,
                        "name": "مشهد ثامن",
                        "weight": 1,
                        "parent_id": 674
                    },
                    {
                        "id": 677,
                        "countFile": 0,
                        "name": "رضویه",
                        "weight": 1,
                        "parent_id": 674
                    }
                ],
                "name": "مشهد",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 675,
                "countFile": 0,
                "county": [],
                "name": "ملک آباد",
                "weight": 1,
                "parent_id": 674
            },
            {
                "id": 676,
                "countFile": 0,
                "county": [],
                "name": "مشهد ثامن",
                "weight": 1,
                "parent_id": 674
            },
            {
                "id": 677,
                "countFile": 0,
                "county": [],
                "name": "رضویه",
                "weight": 1,
                "parent_id": 674
            },
            {
                "id": 678,
                "countFile": 0,
                "county": [
                    {
                        "id": 679,
                        "countFile": 0,
                        "name": "چکنه",
                        "weight": 1,
                        "parent_id": 678
                    },
                    {
                        "id": 680,
                        "countFile": 0,
                        "name": "درود",
                        "weight": 1,
                        "parent_id": 678
                    },
                    {
                        "id": 681,
                        "countFile": 0,
                        "name": "قدمگاه",
                        "weight": 1,
                        "parent_id": 678
                    },
                    {
                        "id": 682,
                        "countFile": 0,
                        "name": "خرو",
                        "weight": 1,
                        "parent_id": 678
                    },
                    {
                        "id": 683,
                        "countFile": 0,
                        "name": "بار",
                        "weight": 1,
                        "parent_id": 678
                    },
                    {
                        "id": 684,
                        "countFile": 0,
                        "name": "عشق آباد",
                        "weight": 1,
                        "parent_id": 678
                    }
                ],
                "name": "نیشابور",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 679,
                "countFile": 0,
                "county": [],
                "name": "چکنه",
                "weight": 1,
                "parent_id": 678
            },
            {
                "id": 680,
                "countFile": 0,
                "county": [],
                "name": "درود",
                "weight": 1,
                "parent_id": 678
            },
            {
                "id": 681,
                "countFile": 0,
                "county": [],
                "name": "قدمگاه",
                "weight": 1,
                "parent_id": 678
            },
            {
                "id": 682,
                "countFile": 0,
                "county": [],
                "name": "خرو",
                "weight": 1,
                "parent_id": 678
            },
            {
                "id": 683,
                "countFile": 0,
                "county": [],
                "name": "بار",
                "weight": 1,
                "parent_id": 678
            },
            {
                "id": 684,
                "countFile": 0,
                "county": [],
                "name": "عشق آباد",
                "weight": 1,
                "parent_id": 678
            },
            {
                "id": 685,
                "countFile": 0,
                "county": [
                    {
                        "id": 686,
                        "countFile": 0,
                        "name": "گلمکان",
                        "weight": 1,
                        "parent_id": 685
                    },
                    {
                        "id": 687,
                        "countFile": 0,
                        "name": "گلبهار",
                        "weight": 1,
                        "parent_id": 685
                    }
                ],
                "name": "چناران",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 686,
                "countFile": 0,
                "county": [],
                "name": "گلمکان",
                "weight": 1,
                "parent_id": 685
            },
            {
                "id": 687,
                "countFile": 0,
                "county": [],
                "name": "گلبهار",
                "weight": 1,
                "parent_id": 685
            },
            {
                "id": 688,
                "countFile": 0,
                "county": [
                    {
                        "id": 689,
                        "countFile": 0,
                        "name": "سنگان",
                        "weight": 1,
                        "parent_id": 688
                    },
                    {
                        "id": 690,
                        "countFile": 0,
                        "name": "سلامی",
                        "weight": 1,
                        "parent_id": 688
                    },
                    {
                        "id": 693,
                        "countFile": 0,
                        "name": "نشتیفان",
                        "weight": 1,
                        "parent_id": 688
                    },
                    {
                        "id": 694,
                        "countFile": 0,
                        "name": "قاسم آباد",
                        "weight": 1,
                        "parent_id": 688
                    }
                ],
                "name": "خواف",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 689,
                "countFile": 0,
                "county": [],
                "name": "سنگان",
                "weight": 1,
                "parent_id": 688
            },
            {
                "id": 690,
                "countFile": 0,
                "county": [],
                "name": "سلامی",
                "weight": 1,
                "parent_id": 688
            },
            {
                "id": 691,
                "countFile": 0,
                "county": [
                    {
                        "id": 692,
                        "countFile": 0,
                        "name": "مزدآوند",
                        "weight": 1,
                        "parent_id": 691
                    }
                ],
                "name": "سرخس",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 692,
                "countFile": 0,
                "county": [],
                "name": "مزدآوند",
                "weight": 1,
                "parent_id": 691
            },
            {
                "id": 693,
                "countFile": 0,
                "county": [],
                "name": "نشتیفان",
                "weight": 1,
                "parent_id": 688
            },
            {
                "id": 694,
                "countFile": 0,
                "county": [],
                "name": "قاسم آباد",
                "weight": 1,
                "parent_id": 688
            },
            {
                "id": 695,
                "countFile": 0,
                "county": [
                    {
                        "id": 696,
                        "countFile": 0,
                        "name": "فریمان",
                        "weight": 1,
                        "parent_id": 695
                    },
                    {
                        "id": 697,
                        "countFile": 0,
                        "name": "فرهادگرد",
                        "weight": 1,
                        "parent_id": 695
                    },
                    {
                        "id": 698,
                        "countFile": 0,
                        "name": "قلندرآباد",
                        "weight": 1,
                        "parent_id": 695
                    },
                    {
                        "id": 699,
                        "countFile": 0,
                        "name": "سفیدسنگ",
                        "weight": 1,
                        "parent_id": 695
                    }
                ],
                "name": "فریمان",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 696,
                "countFile": 0,
                "county": [],
                "name": "فریمان",
                "weight": 1,
                "parent_id": 695
            },
            {
                "id": 697,
                "countFile": 0,
                "county": [],
                "name": "فرهادگرد",
                "weight": 1,
                "parent_id": 695
            },
            {
                "id": 698,
                "countFile": 0,
                "county": [],
                "name": "قلندرآباد",
                "weight": 1,
                "parent_id": 695
            },
            {
                "id": 699,
                "countFile": 0,
                "county": [],
                "name": "سفیدسنگ",
                "weight": 1,
                "parent_id": 695
            },
            {
                "id": 700,
                "countFile": 0,
                "county": [
                    {
                        "id": 701,
                        "countFile": 0,
                        "name": "انابد",
                        "weight": 1,
                        "parent_id": 700
                    },
                    {
                        "id": 702,
                        "countFile": 0,
                        "name": "شهراباد",
                        "weight": 1,
                        "parent_id": 700
                    }
                ],
                "name": "بردسکن",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 701,
                "countFile": 0,
                "county": [],
                "name": "انابد",
                "weight": 1,
                "parent_id": 700
            },
            {
                "id": 702,
                "countFile": 0,
                "county": [],
                "name": "شهراباد",
                "weight": 1,
                "parent_id": 700
            },
            {
                "id": 703,
                "countFile": 0,
                "county": [
                    {
                        "id": 704,
                        "countFile": 0,
                        "name": "جنگل",
                        "weight": 1,
                        "parent_id": 703
                    }
                ],
                "name": "رشتخوار",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 704,
                "countFile": 0,
                "county": [],
                "name": "جنگل",
                "weight": 1,
                "parent_id": 703
            },
            {
                "id": 705,
                "countFile": 0,
                "county": [
                    {
                        "id": 706,
                        "countFile": 0,
                        "name": "طرقبه",
                        "weight": 1,
                        "parent_id": 705
                    },
                    {
                        "id": 717,
                        "countFile": 0,
                        "name": "شاندیز",
                        "weight": 1,
                        "parent_id": 705
                    }
                ],
                "name": "بینالود",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 706,
                "countFile": 0,
                "county": [],
                "name": "طرقبه",
                "weight": 1,
                "parent_id": 705
            },
            {
                "id": 707,
                "countFile": 0,
                "county": [
                    {
                        "id": 708,
                        "countFile": 0,
                        "name": "کندر",
                        "weight": 1,
                        "parent_id": 707
                    }
                ],
                "name": "خلیل آباد",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 708,
                "countFile": 0,
                "county": [],
                "name": "کندر",
                "weight": 1,
                "parent_id": 707
            },
            {
                "id": 709,
                "countFile": 0,
                "county": [
                    {
                        "id": 710,
                        "countFile": 0,
                        "name": "شهرزو",
                        "weight": 1,
                        "parent_id": 709
                    }
                ],
                "name": "کلات",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 710,
                "countFile": 0,
                "county": [],
                "name": "شهرزو",
                "weight": 1,
                "parent_id": 709
            },
            {
                "id": 711,
                "countFile": 0,
                "county": [
                    {
                        "id": 712,
                        "countFile": 0,
                        "name": "شادمهر",
                        "weight": 1,
                        "parent_id": 711
                    },
                    {
                        "id": 713,
                        "countFile": 0,
                        "name": "فیض آباد",
                        "weight": 1,
                        "parent_id": 711
                    }
                ],
                "name": "مه ولات",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 712,
                "countFile": 0,
                "county": [],
                "name": "شادمهر",
                "weight": 1,
                "parent_id": 711
            },
            {
                "id": 713,
                "countFile": 0,
                "county": [],
                "name": "فیض آباد",
                "weight": 1,
                "parent_id": 711
            },
            {
                "id": 714,
                "countFile": 0,
                "county": [
                    {
                        "id": 715,
                        "countFile": 0,
                        "name": "بجستان",
                        "weight": 1,
                        "parent_id": 714
                    },
                    {
                        "id": 716,
                        "countFile": 0,
                        "name": "یونسی",
                        "weight": 1,
                        "parent_id": 714
                    }
                ],
                "name": "بجستان",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 715,
                "countFile": 0,
                "county": [],
                "name": "بجستان",
                "weight": 1,
                "parent_id": 714
            },
            {
                "id": 716,
                "countFile": 0,
                "county": [],
                "name": "یونسی",
                "weight": 1,
                "parent_id": 714
            },
            {
                "id": 717,
                "countFile": 0,
                "county": [],
                "name": "شاندیز",
                "weight": 1,
                "parent_id": 705
            },
            {
                "id": 718,
                "countFile": 0,
                "county": [
                    {
                        "id": 719,
                        "countFile": 0,
                        "name": "جغتای",
                        "weight": 1,
                        "parent_id": 718
                    }
                ],
                "name": "جغتای",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 719,
                "countFile": 0,
                "county": [],
                "name": "جغتای",
                "weight": 1,
                "parent_id": 718
            },
            {
                "id": 720,
                "countFile": 0,
                "county": [
                    {
                        "id": 721,
                        "countFile": 0,
                        "name": "فیروزه",
                        "weight": 1,
                        "parent_id": 720
                    },
                    {
                        "id": 722,
                        "countFile": 0,
                        "name": "همت آباد",
                        "weight": 1,
                        "parent_id": 720
                    }
                ],
                "name": "فیروزه",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 721,
                "countFile": 0,
                "county": [],
                "name": "فیروزه",
                "weight": 1,
                "parent_id": 720
            },
            {
                "id": 722,
                "countFile": 0,
                "county": [],
                "name": "همت آباد",
                "weight": 1,
                "parent_id": 720
            },
            {
                "id": 723,
                "countFile": 0,
                "county": [
                    {
                        "id": 724,
                        "countFile": 0,
                        "name": "دولت آباد",
                        "weight": 1,
                        "parent_id": 723
                    }
                ],
                "name": "زاوه",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 724,
                "countFile": 0,
                "county": [],
                "name": "دولت آباد",
                "weight": 1,
                "parent_id": 723
            },
            {
                "id": 725,
                "countFile": 0,
                "county": [
                    {
                        "id": 726,
                        "countFile": 0,
                        "name": "داورزن",
                        "weight": 1,
                        "parent_id": 725
                    }
                ],
                "name": "داورزن",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 726,
                "countFile": 0,
                "county": [],
                "name": "داورزن",
                "weight": 1,
                "parent_id": 725
            },
            {
                "id": 727,
                "countFile": 0,
                "county": [
                    {
                        "id": 728,
                        "countFile": 0,
                        "name": "سلطان آباد",
                        "weight": 1,
                        "parent_id": 727
                    }
                ],
                "name": "خوشاب",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 728,
                "countFile": 0,
                "county": [],
                "name": "سلطان آباد",
                "weight": 1,
                "parent_id": 727
            },
            {
                "id": 729,
                "countFile": 0,
                "county": [
                    {
                        "id": 730,
                        "countFile": 0,
                        "name": "نقاب",
                        "weight": 1,
                        "parent_id": 729
                    }
                ],
                "name": "جوین",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 730,
                "countFile": 0,
                "county": [],
                "name": "نقاب",
                "weight": 1,
                "parent_id": 729
            },
            {
                "id": 731,
                "countFile": 0,
                "county": [
                    {
                        "id": 732,
                        "countFile": 0,
                        "name": "باخرز",
                        "weight": 1,
                        "parent_id": 731
                    }
                ],
                "name": "باخرز",
                "weight": 1,
                "parent_id": 644
            },
            {
                "id": 732,
                "countFile": 0,
                "county": [],
                "name": "باخرز",
                "weight": 1,
                "parent_id": 731
            },
            {
                "id": 733,
                "countFile": 0,
                "county": [
                    {
                        "id": 734,
                        "countFile": 0,
                        "name": "چادگان",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 737,
                        "countFile": 0,
                        "name": "دهاقان",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 740,
                        "countFile": 0,
                        "name": "فلاورجان",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 747,
                        "countFile": 0,
                        "name": "کوهپایه",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 748,
                        "countFile": 0,
                        "name": "سجزی",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 749,
                        "countFile": 0,
                        "name": "تودشک",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 750,
                        "countFile": 0,
                        "name": "اردستان",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 753,
                        "countFile": 0,
                        "name": "نیک آباد",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 754,
                        "countFile": 0,
                        "name": "قهجاورستان",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 755,
                        "countFile": 0,
                        "name": "بهارستان",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 756,
                        "countFile": 0,
                        "name": "زیار",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 757,
                        "countFile": 0,
                        "name": "ورزنه",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 758,
                        "countFile": 0,
                        "name": "هرند",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 759,
                        "countFile": 0,
                        "name": "اژیه",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 760,
                        "countFile": 0,
                        "name": "خمینی شهر",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 765,
                        "countFile": 0,
                        "name": "خوانسار",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 767,
                        "countFile": 0,
                        "name": "سمیرم",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 771,
                        "countFile": 0,
                        "name": "فریدن",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 774,
                        "countFile": 0,
                        "name": "فریدونشهر",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 779,
                        "countFile": 0,
                        "name": "شهرضا",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 782,
                        "countFile": 0,
                        "name": "کاشان",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 789,
                        "countFile": 0,
                        "name": "گلپایگان",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 793,
                        "countFile": 0,
                        "name": "لنجان",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 803,
                        "countFile": 0,
                        "name": "نایین",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 806,
                        "countFile": 0,
                        "name": "نجف آباد",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 813,
                        "countFile": 0,
                        "name": "نطنز",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 818,
                        "countFile": 0,
                        "name": "شاهین شهرومیمه",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 822,
                        "countFile": 0,
                        "name": "مبارکه",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 824,
                        "countFile": 0,
                        "name": "آران وبیدگل",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 836,
                        "countFile": 0,
                        "name": "تیران وکرون",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 839,
                        "countFile": 0,
                        "name": "برخوار",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 846,
                        "countFile": 0,
                        "name": "خور و بیابانک",
                        "weight": 1,
                        "parent_id": 733
                    },
                    {
                        "id": 849,
                        "countFile": 0,
                        "name": "بو یین و میاندشت",
                        "weight": 1,
                        "parent_id": 733
                    }
                ],
                "name": "اصفهان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 734,
                "countFile": 0,
                "county": [
                    {
                        "id": 735,
                        "countFile": 0,
                        "name": "چادگان",
                        "weight": 1,
                        "parent_id": 734
                    },
                    {
                        "id": 736,
                        "countFile": 0,
                        "name": "رزوه",
                        "weight": 1,
                        "parent_id": 734
                    }
                ],
                "name": "چادگان",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 735,
                "countFile": 0,
                "county": [],
                "name": "چادگان",
                "weight": 1,
                "parent_id": 734
            },
            {
                "id": 736,
                "countFile": 0,
                "county": [],
                "name": "رزوه",
                "weight": 1,
                "parent_id": 734
            },
            {
                "id": 737,
                "countFile": 0,
                "county": [
                    {
                        "id": 738,
                        "countFile": 0,
                        "name": "دهاقان",
                        "weight": 1,
                        "parent_id": 737
                    },
                    {
                        "id": 739,
                        "countFile": 0,
                        "name": "گلشن",
                        "weight": 1,
                        "parent_id": 737
                    }
                ],
                "name": "دهاقان",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 738,
                "countFile": 0,
                "county": [],
                "name": "دهاقان",
                "weight": 1,
                "parent_id": 737
            },
            {
                "id": 739,
                "countFile": 0,
                "county": [],
                "name": "گلشن",
                "weight": 1,
                "parent_id": 737
            },
            {
                "id": 740,
                "countFile": 0,
                "county": [
                    {
                        "id": 741,
                        "countFile": 0,
                        "name": "فلاورجان",
                        "weight": 1,
                        "parent_id": 740
                    },
                    {
                        "id": 742,
                        "countFile": 0,
                        "name": "کلیشادوسودرجان",
                        "weight": 1,
                        "parent_id": 740
                    },
                    {
                        "id": 743,
                        "countFile": 0,
                        "name": "ابریشم",
                        "weight": 1,
                        "parent_id": 740
                    },
                    {
                        "id": 744,
                        "countFile": 0,
                        "name": "ایمانشهر",
                        "weight": 1,
                        "parent_id": 740
                    },
                    {
                        "id": 745,
                        "countFile": 0,
                        "name": "قهدریجان",
                        "weight": 1,
                        "parent_id": 740
                    },
                    {
                        "id": 746,
                        "countFile": 0,
                        "name": "زازران",
                        "weight": 1,
                        "parent_id": 740
                    },
                    {
                        "id": 777,
                        "countFile": 0,
                        "name": "پیربکران",
                        "weight": 1,
                        "parent_id": 740
                    },
                    {
                        "id": 778,
                        "countFile": 0,
                        "name": "بهاران شهر",
                        "weight": 1,
                        "parent_id": 740
                    }
                ],
                "name": "فلاورجان",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 741,
                "countFile": 0,
                "county": [],
                "name": "فلاورجان",
                "weight": 1,
                "parent_id": 740
            },
            {
                "id": 742,
                "countFile": 0,
                "county": [],
                "name": "کلیشادوسودرجان",
                "weight": 1,
                "parent_id": 740
            },
            {
                "id": 743,
                "countFile": 0,
                "county": [],
                "name": "ابریشم",
                "weight": 1,
                "parent_id": 740
            },
            {
                "id": 744,
                "countFile": 0,
                "county": [],
                "name": "ایمانشهر",
                "weight": 1,
                "parent_id": 740
            },
            {
                "id": 745,
                "countFile": 0,
                "county": [],
                "name": "قهدریجان",
                "weight": 1,
                "parent_id": 740
            },
            {
                "id": 746,
                "countFile": 0,
                "county": [],
                "name": "زازران",
                "weight": 1,
                "parent_id": 740
            },
            {
                "id": 747,
                "countFile": 0,
                "county": [],
                "name": "کوهپایه",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 748,
                "countFile": 0,
                "county": [],
                "name": "سجزی",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 749,
                "countFile": 0,
                "county": [],
                "name": "تودشک",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 750,
                "countFile": 0,
                "county": [
                    {
                        "id": 751,
                        "countFile": 0,
                        "name": "اردستان",
                        "weight": 1,
                        "parent_id": 750
                    },
                    {
                        "id": 752,
                        "countFile": 0,
                        "name": "زواره",
                        "weight": 1,
                        "parent_id": 750
                    }
                ],
                "name": "اردستان",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 751,
                "countFile": 0,
                "county": [],
                "name": "اردستان",
                "weight": 1,
                "parent_id": 750
            },
            {
                "id": 752,
                "countFile": 0,
                "county": [],
                "name": "زواره",
                "weight": 1,
                "parent_id": 750
            },
            {
                "id": 753,
                "countFile": 0,
                "county": [],
                "name": "نیک آباد",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 754,
                "countFile": 0,
                "county": [],
                "name": "قهجاورستان",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 755,
                "countFile": 0,
                "county": [
                    {
                        "id": 1284,
                        "countFile": 0,
                        "name": "گلستان",
                        "weight": 1,
                        "parent_id": 755
                    },
                    {
                        "id": 1285,
                        "countFile": 0,
                        "name": "صالحیه",
                        "weight": 1,
                        "parent_id": 755
                    },
                    {
                        "id": 1286,
                        "countFile": 0,
                        "name": "نسیم شهر",
                        "weight": 1,
                        "parent_id": 755
                    }
                ],
                "name": "بهارستان",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 756,
                "countFile": 0,
                "county": [],
                "name": "زیار",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 757,
                "countFile": 0,
                "county": [],
                "name": "ورزنه",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 758,
                "countFile": 0,
                "county": [],
                "name": "هرند",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 759,
                "countFile": 0,
                "county": [],
                "name": "اژیه",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 760,
                "countFile": 0,
                "county": [
                    {
                        "id": 761,
                        "countFile": 0,
                        "name": "خمینی شهر",
                        "weight": 1,
                        "parent_id": 760
                    },
                    {
                        "id": 762,
                        "countFile": 0,
                        "name": "درچه",
                        "weight": 1,
                        "parent_id": 760
                    },
                    {
                        "id": 763,
                        "countFile": 0,
                        "name": "کوشک",
                        "weight": 1,
                        "parent_id": 760
                    },
                    {
                        "id": 764,
                        "countFile": 0,
                        "name": "اصغرآباد",
                        "weight": 1,
                        "parent_id": 760
                    }
                ],
                "name": "خمینی شهر",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 761,
                "countFile": 0,
                "county": [],
                "name": "خمینی شهر",
                "weight": 1,
                "parent_id": 760
            },
            {
                "id": 762,
                "countFile": 0,
                "county": [],
                "name": "درچه",
                "weight": 1,
                "parent_id": 760
            },
            {
                "id": 763,
                "countFile": 0,
                "county": [],
                "name": "کوشک",
                "weight": 1,
                "parent_id": 760
            },
            {
                "id": 764,
                "countFile": 0,
                "county": [],
                "name": "اصغرآباد",
                "weight": 1,
                "parent_id": 760
            },
            {
                "id": 765,
                "countFile": 0,
                "county": [
                    {
                        "id": 766,
                        "countFile": 0,
                        "name": "خوانسار",
                        "weight": 1,
                        "parent_id": 765
                    }
                ],
                "name": "خوانسار",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 766,
                "countFile": 0,
                "county": [],
                "name": "خوانسار",
                "weight": 1,
                "parent_id": 765
            },
            {
                "id": 767,
                "countFile": 0,
                "county": [
                    {
                        "id": 768,
                        "countFile": 0,
                        "name": "کمه",
                        "weight": 1,
                        "parent_id": 767
                    },
                    {
                        "id": 769,
                        "countFile": 0,
                        "name": "حنا",
                        "weight": 1,
                        "parent_id": 767
                    },
                    {
                        "id": 770,
                        "countFile": 0,
                        "name": "ونک",
                        "weight": 1,
                        "parent_id": 767
                    }
                ],
                "name": "سمیرم",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 768,
                "countFile": 0,
                "county": [],
                "name": "کمه",
                "weight": 1,
                "parent_id": 767
            },
            {
                "id": 769,
                "countFile": 0,
                "county": [],
                "name": "حنا",
                "weight": 1,
                "parent_id": 767
            },
            {
                "id": 770,
                "countFile": 0,
                "county": [],
                "name": "ونک",
                "weight": 1,
                "parent_id": 767
            },
            {
                "id": 771,
                "countFile": 0,
                "county": [
                    {
                        "id": 772,
                        "countFile": 0,
                        "name": "داران",
                        "weight": 1,
                        "parent_id": 771
                    },
                    {
                        "id": 773,
                        "countFile": 0,
                        "name": "دامنه",
                        "weight": 1,
                        "parent_id": 771
                    }
                ],
                "name": "فریدن",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 772,
                "countFile": 0,
                "county": [],
                "name": "داران",
                "weight": 1,
                "parent_id": 771
            },
            {
                "id": 773,
                "countFile": 0,
                "county": [],
                "name": "دامنه",
                "weight": 1,
                "parent_id": 771
            },
            {
                "id": 774,
                "countFile": 0,
                "county": [
                    {
                        "id": 775,
                        "countFile": 0,
                        "name": "فریدونشهر",
                        "weight": 1,
                        "parent_id": 774
                    },
                    {
                        "id": 776,
                        "countFile": 0,
                        "name": "برف انبار",
                        "weight": 1,
                        "parent_id": 774
                    }
                ],
                "name": "فریدونشهر",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 775,
                "countFile": 0,
                "county": [],
                "name": "فریدونشهر",
                "weight": 1,
                "parent_id": 774
            },
            {
                "id": 776,
                "countFile": 0,
                "county": [],
                "name": "برف انبار",
                "weight": 1,
                "parent_id": 774
            },
            {
                "id": 777,
                "countFile": 0,
                "county": [],
                "name": "پیربکران",
                "weight": 1,
                "parent_id": 740
            },
            {
                "id": 778,
                "countFile": 0,
                "county": [],
                "name": "بهاران شهر",
                "weight": 1,
                "parent_id": 740
            },
            {
                "id": 779,
                "countFile": 0,
                "county": [
                    {
                        "id": 780,
                        "countFile": 0,
                        "name": "شهرضا",
                        "weight": 1,
                        "parent_id": 779
                    },
                    {
                        "id": 781,
                        "countFile": 0,
                        "name": "منظریه",
                        "weight": 1,
                        "parent_id": 779
                    }
                ],
                "name": "شهرضا",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 780,
                "countFile": 0,
                "county": [],
                "name": "شهرضا",
                "weight": 1,
                "parent_id": 779
            },
            {
                "id": 781,
                "countFile": 0,
                "county": [],
                "name": "منظریه",
                "weight": 1,
                "parent_id": 779
            },
            {
                "id": 782,
                "countFile": 0,
                "county": [
                    {
                        "id": 783,
                        "countFile": 0,
                        "name": "نیاسر",
                        "weight": 1,
                        "parent_id": 782
                    },
                    {
                        "id": 784,
                        "countFile": 0,
                        "name": "برزک",
                        "weight": 1,
                        "parent_id": 782
                    },
                    {
                        "id": 785,
                        "countFile": 0,
                        "name": "قمصر",
                        "weight": 1,
                        "parent_id": 782
                    },
                    {
                        "id": 786,
                        "countFile": 0,
                        "name": "جوشقان قالی",
                        "weight": 1,
                        "parent_id": 782
                    },
                    {
                        "id": 787,
                        "countFile": 0,
                        "name": "کامو و چوگان",
                        "weight": 1,
                        "parent_id": 782
                    },
                    {
                        "id": 788,
                        "countFile": 0,
                        "name": "مشکات",
                        "weight": 1,
                        "parent_id": 782
                    }
                ],
                "name": "کاشان",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 783,
                "countFile": 0,
                "county": [],
                "name": "نیاسر",
                "weight": 1,
                "parent_id": 782
            },
            {
                "id": 784,
                "countFile": 0,
                "county": [],
                "name": "برزک",
                "weight": 1,
                "parent_id": 782
            },
            {
                "id": 785,
                "countFile": 0,
                "county": [],
                "name": "قمصر",
                "weight": 1,
                "parent_id": 782
            },
            {
                "id": 786,
                "countFile": 0,
                "county": [],
                "name": "جوشقان قالی",
                "weight": 1,
                "parent_id": 782
            },
            {
                "id": 787,
                "countFile": 0,
                "county": [],
                "name": "کامو و چوگان",
                "weight": 1,
                "parent_id": 782
            },
            {
                "id": 788,
                "countFile": 0,
                "county": [],
                "name": "مشکات",
                "weight": 1,
                "parent_id": 782
            },
            {
                "id": 789,
                "countFile": 0,
                "county": [
                    {
                        "id": 790,
                        "countFile": 0,
                        "name": "گلپایگان",
                        "weight": 1,
                        "parent_id": 789
                    },
                    {
                        "id": 791,
                        "countFile": 0,
                        "name": "گوگد",
                        "weight": 1,
                        "parent_id": 789
                    },
                    {
                        "id": 792,
                        "countFile": 0,
                        "name": "گلشهر",
                        "weight": 1,
                        "parent_id": 789
                    }
                ],
                "name": "گلپایگان",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 790,
                "countFile": 0,
                "county": [],
                "name": "گلپایگان",
                "weight": 1,
                "parent_id": 789
            },
            {
                "id": 791,
                "countFile": 0,
                "county": [],
                "name": "گوگد",
                "weight": 1,
                "parent_id": 789
            },
            {
                "id": 792,
                "countFile": 0,
                "county": [],
                "name": "گلشهر",
                "weight": 1,
                "parent_id": 789
            },
            {
                "id": 793,
                "countFile": 0,
                "county": [
                    {
                        "id": 794,
                        "countFile": 0,
                        "name": "باغ بهادران",
                        "weight": 1,
                        "parent_id": 793
                    },
                    {
                        "id": 795,
                        "countFile": 0,
                        "name": "چرمهین",
                        "weight": 1,
                        "parent_id": 793
                    },
                    {
                        "id": 796,
                        "countFile": 0,
                        "name": "چمگردان",
                        "weight": 1,
                        "parent_id": 793
                    },
                    {
                        "id": 797,
                        "countFile": 0,
                        "name": "زرین شهر",
                        "weight": 1,
                        "parent_id": 793
                    },
                    {
                        "id": 798,
                        "countFile": 0,
                        "name": "سده لنجان",
                        "weight": 1,
                        "parent_id": 793
                    },
                    {
                        "id": 799,
                        "countFile": 0,
                        "name": "ورنامخواست",
                        "weight": 1,
                        "parent_id": 793
                    },
                    {
                        "id": 800,
                        "countFile": 0,
                        "name": "فولادشهر",
                        "weight": 1,
                        "parent_id": 793
                    },
                    {
                        "id": 801,
                        "countFile": 0,
                        "name": "زاینده رود",
                        "weight": 1,
                        "parent_id": 793
                    },
                    {
                        "id": 802,
                        "countFile": 0,
                        "name": "باغشاد",
                        "weight": 1,
                        "parent_id": 793
                    }
                ],
                "name": "لنجان",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 794,
                "countFile": 0,
                "county": [],
                "name": "باغ بهادران",
                "weight": 1,
                "parent_id": 793
            },
            {
                "id": 795,
                "countFile": 0,
                "county": [],
                "name": "چرمهین",
                "weight": 1,
                "parent_id": 793
            },
            {
                "id": 796,
                "countFile": 0,
                "county": [],
                "name": "چمگردان",
                "weight": 1,
                "parent_id": 793
            },
            {
                "id": 797,
                "countFile": 0,
                "county": [],
                "name": "زرین شهر",
                "weight": 1,
                "parent_id": 793
            },
            {
                "id": 798,
                "countFile": 0,
                "county": [],
                "name": "سده لنجان",
                "weight": 1,
                "parent_id": 793
            },
            {
                "id": 799,
                "countFile": 0,
                "county": [],
                "name": "ورنامخواست",
                "weight": 1,
                "parent_id": 793
            },
            {
                "id": 800,
                "countFile": 0,
                "county": [],
                "name": "فولادشهر",
                "weight": 1,
                "parent_id": 793
            },
            {
                "id": 801,
                "countFile": 0,
                "county": [],
                "name": "زاینده رود",
                "weight": 1,
                "parent_id": 793
            },
            {
                "id": 802,
                "countFile": 0,
                "county": [],
                "name": "باغشاد",
                "weight": 1,
                "parent_id": 793
            },
            {
                "id": 803,
                "countFile": 0,
                "county": [
                    {
                        "id": 804,
                        "countFile": 0,
                        "name": "انارک",
                        "weight": 1,
                        "parent_id": 803
                    },
                    {
                        "id": 805,
                        "countFile": 0,
                        "name": "بافران",
                        "weight": 1,
                        "parent_id": 803
                    }
                ],
                "name": "نایین",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 804,
                "countFile": 0,
                "county": [],
                "name": "انارک",
                "weight": 1,
                "parent_id": 803
            },
            {
                "id": 805,
                "countFile": 0,
                "county": [],
                "name": "بافران",
                "weight": 1,
                "parent_id": 803
            },
            {
                "id": 806,
                "countFile": 0,
                "county": [
                    {
                        "id": 807,
                        "countFile": 0,
                        "name": "نجف آباد",
                        "weight": 1,
                        "parent_id": 806
                    },
                    {
                        "id": 808,
                        "countFile": 0,
                        "name": "جوزدان",
                        "weight": 1,
                        "parent_id": 806
                    },
                    {
                        "id": 809,
                        "countFile": 0,
                        "name": "گلدشت",
                        "weight": 1,
                        "parent_id": 806
                    },
                    {
                        "id": 810,
                        "countFile": 0,
                        "name": "کهریزسنگ",
                        "weight": 1,
                        "parent_id": 806
                    },
                    {
                        "id": 811,
                        "countFile": 0,
                        "name": "دهق",
                        "weight": 1,
                        "parent_id": 806
                    },
                    {
                        "id": 812,
                        "countFile": 0,
                        "name": "علویجه",
                        "weight": 1,
                        "parent_id": 806
                    }
                ],
                "name": "نجف آباد",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 807,
                "countFile": 0,
                "county": [],
                "name": "نجف آباد",
                "weight": 1,
                "parent_id": 806
            },
            {
                "id": 808,
                "countFile": 0,
                "county": [],
                "name": "جوزدان",
                "weight": 1,
                "parent_id": 806
            },
            {
                "id": 809,
                "countFile": 0,
                "county": [],
                "name": "گلدشت",
                "weight": 1,
                "parent_id": 806
            },
            {
                "id": 810,
                "countFile": 0,
                "county": [],
                "name": "کهریزسنگ",
                "weight": 1,
                "parent_id": 806
            },
            {
                "id": 811,
                "countFile": 0,
                "county": [],
                "name": "دهق",
                "weight": 1,
                "parent_id": 806
            },
            {
                "id": 812,
                "countFile": 0,
                "county": [],
                "name": "علویجه",
                "weight": 1,
                "parent_id": 806
            },
            {
                "id": 813,
                "countFile": 0,
                "county": [
                    {
                        "id": 814,
                        "countFile": 0,
                        "name": "نطنز",
                        "weight": 1,
                        "parent_id": 813
                    },
                    {
                        "id": 815,
                        "countFile": 0,
                        "name": "طرق رود",
                        "weight": 1,
                        "parent_id": 813
                    },
                    {
                        "id": 816,
                        "countFile": 0,
                        "name": "بادرود",
                        "weight": 1,
                        "parent_id": 813
                    },
                    {
                        "id": 817,
                        "countFile": 0,
                        "name": "خالدآباد",
                        "weight": 1,
                        "parent_id": 813
                    }
                ],
                "name": "نطنز",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 814,
                "countFile": 0,
                "county": [],
                "name": "نطنز",
                "weight": 1,
                "parent_id": 813
            },
            {
                "id": 815,
                "countFile": 0,
                "county": [],
                "name": "طرق رود",
                "weight": 1,
                "parent_id": 813
            },
            {
                "id": 816,
                "countFile": 0,
                "county": [],
                "name": "بادرود",
                "weight": 1,
                "parent_id": 813
            },
            {
                "id": 817,
                "countFile": 0,
                "county": [],
                "name": "خالدآباد",
                "weight": 1,
                "parent_id": 813
            },
            {
                "id": 818,
                "countFile": 0,
                "county": [
                    {
                        "id": 819,
                        "countFile": 0,
                        "name": "میمه",
                        "weight": 1,
                        "parent_id": 818
                    },
                    {
                        "id": 820,
                        "countFile": 0,
                        "name": "وزوان",
                        "weight": 1,
                        "parent_id": 818
                    },
                    {
                        "id": 821,
                        "countFile": 0,
                        "name": "لای بید",
                        "weight": 1,
                        "parent_id": 818
                    },
                    {
                        "id": 829,
                        "countFile": 0,
                        "name": "شاهین شهر",
                        "weight": 1,
                        "parent_id": 818
                    },
                    {
                        "id": 830,
                        "countFile": 0,
                        "name": "گزبرخوار",
                        "weight": 1,
                        "parent_id": 818
                    },
                    {
                        "id": 831,
                        "countFile": 0,
                        "name": "گرگاب",
                        "weight": 1,
                        "parent_id": 818
                    }
                ],
                "name": "شاهین شهرومیمه",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 819,
                "countFile": 0,
                "county": [],
                "name": "میمه",
                "weight": 1,
                "parent_id": 818
            },
            {
                "id": 820,
                "countFile": 0,
                "county": [],
                "name": "وزوان",
                "weight": 1,
                "parent_id": 818
            },
            {
                "id": 821,
                "countFile": 0,
                "county": [],
                "name": "لای بید",
                "weight": 1,
                "parent_id": 818
            },
            {
                "id": 822,
                "countFile": 0,
                "county": [
                    {
                        "id": 823,
                        "countFile": 0,
                        "name": "زیباشهر",
                        "weight": 1,
                        "parent_id": 822
                    },
                    {
                        "id": 832,
                        "countFile": 0,
                        "name": "مجلسی",
                        "weight": 1,
                        "parent_id": 822
                    },
                    {
                        "id": 833,
                        "countFile": 0,
                        "name": "دیزیچه",
                        "weight": 1,
                        "parent_id": 822
                    },
                    {
                        "id": 834,
                        "countFile": 0,
                        "name": "طالخونچه",
                        "weight": 1,
                        "parent_id": 822
                    },
                    {
                        "id": 835,
                        "countFile": 0,
                        "name": "کرکوند",
                        "weight": 1,
                        "parent_id": 822
                    }
                ],
                "name": "مبارکه",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 823,
                "countFile": 0,
                "county": [],
                "name": "زیباشهر",
                "weight": 1,
                "parent_id": 822
            },
            {
                "id": 824,
                "countFile": 0,
                "county": [
                    {
                        "id": 825,
                        "countFile": 0,
                        "name": "آران وبیدگل",
                        "weight": 1,
                        "parent_id": 824
                    },
                    {
                        "id": 826,
                        "countFile": 0,
                        "name": "نوش آباد",
                        "weight": 1,
                        "parent_id": 824
                    },
                    {
                        "id": 827,
                        "countFile": 0,
                        "name": "سفیدشهر",
                        "weight": 1,
                        "parent_id": 824
                    },
                    {
                        "id": 828,
                        "countFile": 0,
                        "name": "ابوزیدآباد",
                        "weight": 1,
                        "parent_id": 824
                    }
                ],
                "name": "آران وبیدگل",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 825,
                "countFile": 0,
                "county": [],
                "name": "آران وبیدگل",
                "weight": 1,
                "parent_id": 824
            },
            {
                "id": 826,
                "countFile": 0,
                "county": [],
                "name": "نوش آباد",
                "weight": 1,
                "parent_id": 824
            },
            {
                "id": 827,
                "countFile": 0,
                "county": [],
                "name": "سفیدشهر",
                "weight": 1,
                "parent_id": 824
            },
            {
                "id": 828,
                "countFile": 0,
                "county": [],
                "name": "ابوزیدآباد",
                "weight": 1,
                "parent_id": 824
            },
            {
                "id": 829,
                "countFile": 0,
                "county": [],
                "name": "شاهین شهر",
                "weight": 1,
                "parent_id": 818
            },
            {
                "id": 830,
                "countFile": 0,
                "county": [],
                "name": "گزبرخوار",
                "weight": 1,
                "parent_id": 818
            },
            {
                "id": 831,
                "countFile": 0,
                "county": [],
                "name": "گرگاب",
                "weight": 1,
                "parent_id": 818
            },
            {
                "id": 832,
                "countFile": 0,
                "county": [],
                "name": "مجلسی",
                "weight": 1,
                "parent_id": 822
            },
            {
                "id": 833,
                "countFile": 0,
                "county": [],
                "name": "دیزیچه",
                "weight": 1,
                "parent_id": 822
            },
            {
                "id": 834,
                "countFile": 0,
                "county": [],
                "name": "طالخونچه",
                "weight": 1,
                "parent_id": 822
            },
            {
                "id": 835,
                "countFile": 0,
                "county": [],
                "name": "کرکوند",
                "weight": 1,
                "parent_id": 822
            },
            {
                "id": 836,
                "countFile": 0,
                "county": [
                    {
                        "id": 837,
                        "countFile": 0,
                        "name": "عسگران",
                        "weight": 1,
                        "parent_id": 836
                    },
                    {
                        "id": 838,
                        "countFile": 0,
                        "name": "تیران",
                        "weight": 1,
                        "parent_id": 836
                    }
                ],
                "name": "تیران وکرون",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 837,
                "countFile": 0,
                "county": [],
                "name": "عسگران",
                "weight": 1,
                "parent_id": 836
            },
            {
                "id": 838,
                "countFile": 0,
                "county": [],
                "name": "تیران",
                "weight": 1,
                "parent_id": 836
            },
            {
                "id": 839,
                "countFile": 0,
                "county": [
                    {
                        "id": 840,
                        "countFile": 0,
                        "name": "حبیب آباد",
                        "weight": 1,
                        "parent_id": 839
                    },
                    {
                        "id": 841,
                        "countFile": 0,
                        "name": "شاپورآباد",
                        "weight": 1,
                        "parent_id": 839
                    },
                    {
                        "id": 842,
                        "countFile": 0,
                        "name": "کمشچه",
                        "weight": 1,
                        "parent_id": 839
                    },
                    {
                        "id": 843,
                        "countFile": 0,
                        "name": "خورزوق",
                        "weight": 1,
                        "parent_id": 839
                    },
                    {
                        "id": 844,
                        "countFile": 0,
                        "name": "دستگرد",
                        "weight": 1,
                        "parent_id": 839
                    },
                    {
                        "id": 845,
                        "countFile": 0,
                        "name": "سین",
                        "weight": 1,
                        "parent_id": 839
                    }
                ],
                "name": "برخوار",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 840,
                "countFile": 0,
                "county": [],
                "name": "حبیب آباد",
                "weight": 1,
                "parent_id": 839
            },
            {
                "id": 841,
                "countFile": 0,
                "county": [],
                "name": "شاپورآباد",
                "weight": 1,
                "parent_id": 839
            },
            {
                "id": 842,
                "countFile": 0,
                "county": [],
                "name": "کمشچه",
                "weight": 1,
                "parent_id": 839
            },
            {
                "id": 843,
                "countFile": 0,
                "county": [],
                "name": "خورزوق",
                "weight": 1,
                "parent_id": 839
            },
            {
                "id": 844,
                "countFile": 0,
                "county": [],
                "name": "دستگرد",
                "weight": 1,
                "parent_id": 839
            },
            {
                "id": 845,
                "countFile": 0,
                "county": [],
                "name": "سین",
                "weight": 1,
                "parent_id": 839
            },
            {
                "id": 846,
                "countFile": 0,
                "county": [
                    {
                        "id": 847,
                        "countFile": 0,
                        "name": "فرخی",
                        "weight": 1,
                        "parent_id": 846
                    },
                    {
                        "id": 848,
                        "countFile": 0,
                        "name": "جندق",
                        "weight": 1,
                        "parent_id": 846
                    }
                ],
                "name": "خور و بیابانک",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 847,
                "countFile": 0,
                "county": [],
                "name": "فرخی",
                "weight": 1,
                "parent_id": 846
            },
            {
                "id": 848,
                "countFile": 0,
                "county": [],
                "name": "جندق",
                "weight": 1,
                "parent_id": 846
            },
            {
                "id": 849,
                "countFile": 0,
                "county": [
                    {
                        "id": 850,
                        "countFile": 0,
                        "name": "بویین ومیاندشت",
                        "weight": 1,
                        "parent_id": 849
                    },
                    {
                        "id": 851,
                        "countFile": 0,
                        "name": "افوس",
                        "weight": 1,
                        "parent_id": 849
                    }
                ],
                "name": "بو یین و میاندشت",
                "weight": 1,
                "parent_id": 733
            },
            {
                "id": 850,
                "countFile": 0,
                "county": [],
                "name": "بویین ومیاندشت",
                "weight": 1,
                "parent_id": 849
            },
            {
                "id": 851,
                "countFile": 0,
                "county": [],
                "name": "افوس",
                "weight": 1,
                "parent_id": 849
            },
            {
                "id": 852,
                "countFile": 0,
                "county": [
                    {
                        "id": 853,
                        "countFile": 0,
                        "name": "ایرانشهر",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 858,
                        "countFile": 0,
                        "name": "چابهار",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 860,
                        "countFile": 0,
                        "name": "خاش",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 863,
                        "countFile": 0,
                        "name": "زابل",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 866,
                        "countFile": 0,
                        "name": "زاهدان",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 869,
                        "countFile": 0,
                        "name": "سراوان",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 874,
                        "countFile": 0,
                        "name": "نیک شهر",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 877,
                        "countFile": 0,
                        "name": "سرباز",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 880,
                        "countFile": 0,
                        "name": "کنارک",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 882,
                        "countFile": 0,
                        "name": "زهک",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 884,
                        "countFile": 0,
                        "name": "هیرمند",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 886,
                        "countFile": 0,
                        "name": "دلگان",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 888,
                        "countFile": 0,
                        "name": "مهرستان",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 890,
                        "countFile": 0,
                        "name": "سیب و سوران",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 892,
                        "countFile": 0,
                        "name": "نیمروز",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 894,
                        "countFile": 0,
                        "name": "لوتک",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 896,
                        "countFile": 0,
                        "name": "میرجاوه",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 898,
                        "countFile": 0,
                        "name": "هامون",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 900,
                        "countFile": 0,
                        "name": "فنوج",
                        "weight": 1,
                        "parent_id": 852
                    },
                    {
                        "id": 902,
                        "countFile": 0,
                        "name": "قصرقند",
                        "weight": 1,
                        "parent_id": 852
                    }
                ],
                "name": "سیستان وبلوچستان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 853,
                "countFile": 0,
                "county": [
                    {
                        "id": 854,
                        "countFile": 0,
                        "name": "ایرانشهر",
                        "weight": 1,
                        "parent_id": 853
                    },
                    {
                        "id": 855,
                        "countFile": 0,
                        "name": "بزمان",
                        "weight": 1,
                        "parent_id": 853
                    },
                    {
                        "id": 856,
                        "countFile": 0,
                        "name": "محمدان",
                        "weight": 1,
                        "parent_id": 853
                    },
                    {
                        "id": 857,
                        "countFile": 0,
                        "name": "بمپور",
                        "weight": 1,
                        "parent_id": 853
                    }
                ],
                "name": "ایرانشهر",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 854,
                "countFile": 0,
                "county": [],
                "name": "ایرانشهر",
                "weight": 1,
                "parent_id": 853
            },
            {
                "id": 855,
                "countFile": 0,
                "county": [],
                "name": "بزمان",
                "weight": 1,
                "parent_id": 853
            },
            {
                "id": 856,
                "countFile": 0,
                "county": [],
                "name": "محمدان",
                "weight": 1,
                "parent_id": 853
            },
            {
                "id": 857,
                "countFile": 0,
                "county": [],
                "name": "بمپور",
                "weight": 1,
                "parent_id": 853
            },
            {
                "id": 858,
                "countFile": 0,
                "county": [
                    {
                        "id": 859,
                        "countFile": 0,
                        "name": "نگور",
                        "weight": 1,
                        "parent_id": 858
                    }
                ],
                "name": "چابهار",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 859,
                "countFile": 0,
                "county": [],
                "name": "نگور",
                "weight": 1,
                "parent_id": 858
            },
            {
                "id": 860,
                "countFile": 0,
                "county": [
                    {
                        "id": 861,
                        "countFile": 0,
                        "name": "خاش",
                        "weight": 1,
                        "parent_id": 860
                    },
                    {
                        "id": 862,
                        "countFile": 0,
                        "name": "نوک آباد",
                        "weight": 1,
                        "parent_id": 860
                    }
                ],
                "name": "خاش",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 861,
                "countFile": 0,
                "county": [],
                "name": "خاش",
                "weight": 1,
                "parent_id": 860
            },
            {
                "id": 862,
                "countFile": 0,
                "county": [],
                "name": "نوک آباد",
                "weight": 1,
                "parent_id": 860
            },
            {
                "id": 863,
                "countFile": 0,
                "county": [
                    {
                        "id": 864,
                        "countFile": 0,
                        "name": "زابل",
                        "weight": 1,
                        "parent_id": 863
                    },
                    {
                        "id": 865,
                        "countFile": 0,
                        "name": "بنجار",
                        "weight": 1,
                        "parent_id": 863
                    }
                ],
                "name": "زابل",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 864,
                "countFile": 0,
                "county": [],
                "name": "زابل",
                "weight": 1,
                "parent_id": 863
            },
            {
                "id": 865,
                "countFile": 0,
                "county": [],
                "name": "بنجار",
                "weight": 1,
                "parent_id": 863
            },
            {
                "id": 866,
                "countFile": 0,
                "county": [
                    {
                        "id": 867,
                        "countFile": 0,
                        "name": "زاهدان",
                        "weight": 1,
                        "parent_id": 866
                    },
                    {
                        "id": 868,
                        "countFile": 0,
                        "name": "نصرت آباد",
                        "weight": 1,
                        "parent_id": 866
                    }
                ],
                "name": "زاهدان",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 867,
                "countFile": 0,
                "county": [],
                "name": "زاهدان",
                "weight": 1,
                "parent_id": 866
            },
            {
                "id": 868,
                "countFile": 0,
                "county": [],
                "name": "نصرت آباد",
                "weight": 1,
                "parent_id": 866
            },
            {
                "id": 869,
                "countFile": 0,
                "county": [
                    {
                        "id": 870,
                        "countFile": 0,
                        "name": "جالق",
                        "weight": 1,
                        "parent_id": 869
                    },
                    {
                        "id": 871,
                        "countFile": 0,
                        "name": "محمدی",
                        "weight": 1,
                        "parent_id": 869
                    },
                    {
                        "id": 872,
                        "countFile": 0,
                        "name": "گشت",
                        "weight": 1,
                        "parent_id": 869
                    },
                    {
                        "id": 873,
                        "countFile": 0,
                        "name": "سیرکان",
                        "weight": 1,
                        "parent_id": 869
                    }
                ],
                "name": "سراوان",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 870,
                "countFile": 0,
                "county": [],
                "name": "جالق",
                "weight": 1,
                "parent_id": 869
            },
            {
                "id": 871,
                "countFile": 0,
                "county": [],
                "name": "محمدی",
                "weight": 1,
                "parent_id": 869
            },
            {
                "id": 872,
                "countFile": 0,
                "county": [],
                "name": "گشت",
                "weight": 1,
                "parent_id": 869
            },
            {
                "id": 873,
                "countFile": 0,
                "county": [],
                "name": "سیرکان",
                "weight": 1,
                "parent_id": 869
            },
            {
                "id": 874,
                "countFile": 0,
                "county": [
                    {
                        "id": 875,
                        "countFile": 0,
                        "name": "بنت",
                        "weight": 1,
                        "parent_id": 874
                    },
                    {
                        "id": 876,
                        "countFile": 0,
                        "name": "اسپکه",
                        "weight": 1,
                        "parent_id": 874
                    }
                ],
                "name": "نیک شهر",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 875,
                "countFile": 0,
                "county": [],
                "name": "بنت",
                "weight": 1,
                "parent_id": 874
            },
            {
                "id": 876,
                "countFile": 0,
                "county": [],
                "name": "اسپکه",
                "weight": 1,
                "parent_id": 874
            },
            {
                "id": 877,
                "countFile": 0,
                "county": [
                    {
                        "id": 878,
                        "countFile": 0,
                        "name": "پیشین",
                        "weight": 1,
                        "parent_id": 877
                    },
                    {
                        "id": 879,
                        "countFile": 0,
                        "name": "راسک",
                        "weight": 1,
                        "parent_id": 877
                    }
                ],
                "name": "سرباز",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 878,
                "countFile": 0,
                "county": [],
                "name": "پیشین",
                "weight": 1,
                "parent_id": 877
            },
            {
                "id": 879,
                "countFile": 0,
                "county": [],
                "name": "راسک",
                "weight": 1,
                "parent_id": 877
            },
            {
                "id": 880,
                "countFile": 0,
                "county": [
                    {
                        "id": 881,
                        "countFile": 0,
                        "name": "کنارک",
                        "weight": 1,
                        "parent_id": 880
                    }
                ],
                "name": "کنارک",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 881,
                "countFile": 0,
                "county": [],
                "name": "کنارک",
                "weight": 1,
                "parent_id": 880
            },
            {
                "id": 882,
                "countFile": 0,
                "county": [
                    {
                        "id": 883,
                        "countFile": 0,
                        "name": "زهک",
                        "weight": 1,
                        "parent_id": 882
                    }
                ],
                "name": "زهک",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 883,
                "countFile": 0,
                "county": [],
                "name": "زهک",
                "weight": 1,
                "parent_id": 882
            },
            {
                "id": 884,
                "countFile": 0,
                "county": [
                    {
                        "id": 885,
                        "countFile": 0,
                        "name": "دوست محمد",
                        "weight": 1,
                        "parent_id": 884
                    }
                ],
                "name": "هیرمند",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 885,
                "countFile": 0,
                "county": [],
                "name": "دوست محمد",
                "weight": 1,
                "parent_id": 884
            },
            {
                "id": 886,
                "countFile": 0,
                "county": [
                    {
                        "id": 887,
                        "countFile": 0,
                        "name": "گلمورتی",
                        "weight": 1,
                        "parent_id": 886
                    }
                ],
                "name": "دلگان",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 887,
                "countFile": 0,
                "county": [],
                "name": "گلمورتی",
                "weight": 1,
                "parent_id": 886
            },
            {
                "id": 888,
                "countFile": 0,
                "county": [
                    {
                        "id": 889,
                        "countFile": 0,
                        "name": "مهرستان",
                        "weight": 1,
                        "parent_id": 888
                    }
                ],
                "name": "مهرستان",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 889,
                "countFile": 0,
                "county": [],
                "name": "مهرستان",
                "weight": 1,
                "parent_id": 888
            },
            {
                "id": 890,
                "countFile": 0,
                "county": [
                    {
                        "id": 891,
                        "countFile": 0,
                        "name": "هیدوچ",
                        "weight": 1,
                        "parent_id": 890
                    },
                    {
                        "id": 895,
                        "countFile": 0,
                        "name": "سوران",
                        "weight": 1,
                        "parent_id": 890
                    }
                ],
                "name": "سیب و سوران",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 891,
                "countFile": 0,
                "county": [],
                "name": "هیدوچ",
                "weight": 1,
                "parent_id": 890
            },
            {
                "id": 892,
                "countFile": 0,
                "county": [
                    {
                        "id": 893,
                        "countFile": 0,
                        "name": "ادیمی",
                        "weight": 1,
                        "parent_id": 892
                    }
                ],
                "name": "نیمروز",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 893,
                "countFile": 0,
                "county": [],
                "name": "ادیمی",
                "weight": 1,
                "parent_id": 892
            },
            {
                "id": 894,
                "countFile": 0,
                "county": [],
                "name": "لوتک",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 895,
                "countFile": 0,
                "county": [],
                "name": "سوران",
                "weight": 1,
                "parent_id": 890
            },
            {
                "id": 896,
                "countFile": 0,
                "county": [
                    {
                        "id": 897,
                        "countFile": 0,
                        "name": "میرجاوه",
                        "weight": 1,
                        "parent_id": 896
                    }
                ],
                "name": "میرجاوه",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 897,
                "countFile": 0,
                "county": [],
                "name": "میرجاوه",
                "weight": 1,
                "parent_id": 896
            },
            {
                "id": 898,
                "countFile": 0,
                "county": [
                    {
                        "id": 899,
                        "countFile": 0,
                        "name": "شهرک علی اکبر",
                        "weight": 1,
                        "parent_id": 898
                    }
                ],
                "name": "هامون",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 899,
                "countFile": 0,
                "county": [],
                "name": "شهرک علی اکبر",
                "weight": 1,
                "parent_id": 898
            },
            {
                "id": 900,
                "countFile": 0,
                "county": [
                    {
                        "id": 901,
                        "countFile": 0,
                        "name": "فنوج",
                        "weight": 1,
                        "parent_id": 900
                    }
                ],
                "name": "فنوج",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 901,
                "countFile": 0,
                "county": [],
                "name": "فنوج",
                "weight": 1,
                "parent_id": 900
            },
            {
                "id": 902,
                "countFile": 0,
                "county": [
                    {
                        "id": 903,
                        "countFile": 0,
                        "name": "قصرقند",
                        "weight": 1,
                        "parent_id": 902
                    }
                ],
                "name": "قصرقند",
                "weight": 1,
                "parent_id": 852
            },
            {
                "id": 903,
                "countFile": 0,
                "county": [],
                "name": "قصرقند",
                "weight": 1,
                "parent_id": 902
            },
            {
                "id": 904,
                "countFile": 0,
                "county": [
                    {
                        "id": 905,
                        "countFile": 0,
                        "name": "بانه",
                        "weight": 1,
                        "parent_id": 904
                    },
                    {
                        "id": 909,
                        "countFile": 0,
                        "name": "بیجار",
                        "weight": 1,
                        "parent_id": 904
                    },
                    {
                        "id": 914,
                        "countFile": 0,
                        "name": "سقز",
                        "weight": 1,
                        "parent_id": 904
                    },
                    {
                        "id": 916,
                        "countFile": 0,
                        "name": "سنندج",
                        "weight": 1,
                        "parent_id": 904
                    },
                    {
                        "id": 919,
                        "countFile": 0,
                        "name": "قروه",
                        "weight": 1,
                        "parent_id": 904
                    },
                    {
                        "id": 924,
                        "countFile": 0,
                        "name": "مریوان",
                        "weight": 1,
                        "parent_id": 904
                    },
                    {
                        "id": 928,
                        "countFile": 0,
                        "name": "دیواندره",
                        "weight": 1,
                        "parent_id": 904
                    },
                    {
                        "id": 930,
                        "countFile": 0,
                        "name": "کامیاران",
                        "weight": 1,
                        "parent_id": 904
                    },
                    {
                        "id": 933,
                        "countFile": 0,
                        "name": "سروآباد",
                        "weight": 1,
                        "parent_id": 904
                    },
                    {
                        "id": 935,
                        "countFile": 0,
                        "name": "دهگلان",
                        "weight": 1,
                        "parent_id": 904
                    }
                ],
                "name": "کردستان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 905,
                "countFile": 0,
                "county": [
                    {
                        "id": 906,
                        "countFile": 0,
                        "name": "بانه",
                        "weight": 1,
                        "parent_id": 905
                    },
                    {
                        "id": 907,
                        "countFile": 0,
                        "name": "کانی سور",
                        "weight": 1,
                        "parent_id": 905
                    },
                    {
                        "id": 908,
                        "countFile": 0,
                        "name": "بویین سفلی",
                        "weight": 1,
                        "parent_id": 905
                    },
                    {
                        "id": 1509,
                        "countFile": 0,
                        "name": "آرمرده",
                        "weight": 1,
                        "parent_id": 905
                    }
                ],
                "name": "بانه",
                "weight": 1,
                "parent_id": 904
            },
            {
                "id": 906,
                "countFile": 0,
                "county": [],
                "name": "بانه",
                "weight": 1,
                "parent_id": 905
            },
            {
                "id": 907,
                "countFile": 0,
                "county": [],
                "name": "کانی سور",
                "weight": 1,
                "parent_id": 905
            },
            {
                "id": 908,
                "countFile": 0,
                "county": [],
                "name": "بویین سفلی",
                "weight": 1,
                "parent_id": 905
            },
            {
                "id": 909,
                "countFile": 0,
                "county": [
                    {
                        "id": 910,
                        "countFile": 0,
                        "name": "بابارشانی",
                        "weight": 1,
                        "parent_id": 909
                    },
                    {
                        "id": 911,
                        "countFile": 0,
                        "name": "پیرتاج",
                        "weight": 1,
                        "parent_id": 909
                    },
                    {
                        "id": 912,
                        "countFile": 0,
                        "name": "یاسوکند",
                        "weight": 1,
                        "parent_id": 909
                    },
                    {
                        "id": 913,
                        "countFile": 0,
                        "name": "توپ آغاج",
                        "weight": 1,
                        "parent_id": 909
                    }
                ],
                "name": "بیجار",
                "weight": 1,
                "parent_id": 904
            },
            {
                "id": 910,
                "countFile": 0,
                "county": [],
                "name": "بابارشانی",
                "weight": 1,
                "parent_id": 909
            },
            {
                "id": 911,
                "countFile": 0,
                "county": [],
                "name": "پیرتاج",
                "weight": 1,
                "parent_id": 909
            },
            {
                "id": 912,
                "countFile": 0,
                "county": [],
                "name": "یاسوکند",
                "weight": 1,
                "parent_id": 909
            },
            {
                "id": 913,
                "countFile": 0,
                "county": [],
                "name": "توپ آغاج",
                "weight": 1,
                "parent_id": 909
            },
            {
                "id": 914,
                "countFile": 0,
                "county": [
                    {
                        "id": 915,
                        "countFile": 0,
                        "name": "صاحب",
                        "weight": 1,
                        "parent_id": 914
                    }
                ],
                "name": "سقز",
                "weight": 1,
                "parent_id": 904
            },
            {
                "id": 915,
                "countFile": 0,
                "county": [],
                "name": "صاحب",
                "weight": 1,
                "parent_id": 914
            },
            {
                "id": 916,
                "countFile": 0,
                "county": [
                    {
                        "id": 917,
                        "countFile": 0,
                        "name": "سنندج",
                        "weight": 1,
                        "parent_id": 916
                    },
                    {
                        "id": 918,
                        "countFile": 0,
                        "name": "شویشه",
                        "weight": 1,
                        "parent_id": 916
                    }
                ],
                "name": "سنندج",
                "weight": 1,
                "parent_id": 904
            },
            {
                "id": 917,
                "countFile": 0,
                "county": [],
                "name": "سنندج",
                "weight": 1,
                "parent_id": 916
            },
            {
                "id": 918,
                "countFile": 0,
                "county": [],
                "name": "شویشه",
                "weight": 1,
                "parent_id": 916
            },
            {
                "id": 919,
                "countFile": 0,
                "county": [
                    {
                        "id": 920,
                        "countFile": 0,
                        "name": "قروه",
                        "weight": 1,
                        "parent_id": 919
                    },
                    {
                        "id": 921,
                        "countFile": 0,
                        "name": "سریش آباد",
                        "weight": 1,
                        "parent_id": 919
                    },
                    {
                        "id": 922,
                        "countFile": 0,
                        "name": "دزج",
                        "weight": 1,
                        "parent_id": 919
                    },
                    {
                        "id": 923,
                        "countFile": 0,
                        "name": "دلبران",
                        "weight": 1,
                        "parent_id": 919
                    }
                ],
                "name": "قروه",
                "weight": 1,
                "parent_id": 904
            },
            {
                "id": 920,
                "countFile": 0,
                "county": [],
                "name": "قروه",
                "weight": 1,
                "parent_id": 919
            },
            {
                "id": 921,
                "countFile": 0,
                "county": [],
                "name": "سریش آباد",
                "weight": 1,
                "parent_id": 919
            },
            {
                "id": 922,
                "countFile": 0,
                "county": [],
                "name": "دزج",
                "weight": 1,
                "parent_id": 919
            },
            {
                "id": 923,
                "countFile": 0,
                "county": [],
                "name": "دلبران",
                "weight": 1,
                "parent_id": 919
            },
            {
                "id": 924,
                "countFile": 0,
                "county": [
                    {
                        "id": 925,
                        "countFile": 0,
                        "name": "برده رشه",
                        "weight": 1,
                        "parent_id": 924
                    },
                    {
                        "id": 926,
                        "countFile": 0,
                        "name": "چناره",
                        "weight": 1,
                        "parent_id": 924
                    },
                    {
                        "id": 927,
                        "countFile": 0,
                        "name": "کانی دینار",
                        "weight": 1,
                        "parent_id": 924
                    }
                ],
                "name": "مریوان",
                "weight": 1,
                "parent_id": 904
            },
            {
                "id": 925,
                "countFile": 0,
                "county": [],
                "name": "برده رشه",
                "weight": 1,
                "parent_id": 924
            },
            {
                "id": 926,
                "countFile": 0,
                "county": [],
                "name": "چناره",
                "weight": 1,
                "parent_id": 924
            },
            {
                "id": 927,
                "countFile": 0,
                "county": [],
                "name": "کانی دینار",
                "weight": 1,
                "parent_id": 924
            },
            {
                "id": 928,
                "countFile": 0,
                "county": [
                    {
                        "id": 929,
                        "countFile": 0,
                        "name": "زرینه",
                        "weight": 1,
                        "parent_id": 928
                    }
                ],
                "name": "دیواندره",
                "weight": 1,
                "parent_id": 904
            },
            {
                "id": 929,
                "countFile": 0,
                "county": [],
                "name": "زرینه",
                "weight": 1,
                "parent_id": 928
            },
            {
                "id": 930,
                "countFile": 0,
                "county": [
                    {
                        "id": 931,
                        "countFile": 0,
                        "name": "کامیاران",
                        "weight": 1,
                        "parent_id": 930
                    },
                    {
                        "id": 932,
                        "countFile": 0,
                        "name": "موچش",
                        "weight": 1,
                        "parent_id": 930
                    }
                ],
                "name": "کامیاران",
                "weight": 1,
                "parent_id": 904
            },
            {
                "id": 931,
                "countFile": 0,
                "county": [],
                "name": "کامیاران",
                "weight": 1,
                "parent_id": 930
            },
            {
                "id": 932,
                "countFile": 0,
                "county": [],
                "name": "موچش",
                "weight": 1,
                "parent_id": 930
            },
            {
                "id": 933,
                "countFile": 0,
                "county": [
                    {
                        "id": 934,
                        "countFile": 0,
                        "name": "اورامان تخت",
                        "weight": 1,
                        "parent_id": 933
                    }
                ],
                "name": "سروآباد",
                "weight": 1,
                "parent_id": 904
            },
            {
                "id": 934,
                "countFile": 0,
                "county": [],
                "name": "اورامان تخت",
                "weight": 1,
                "parent_id": 933
            },
            {
                "id": 935,
                "countFile": 0,
                "county": [
                    {
                        "id": 936,
                        "countFile": 0,
                        "name": "دهگلان",
                        "weight": 1,
                        "parent_id": 935
                    },
                    {
                        "id": 937,
                        "countFile": 0,
                        "name": "بلبان آباد",
                        "weight": 1,
                        "parent_id": 935
                    }
                ],
                "name": "دهگلان",
                "weight": 1,
                "parent_id": 904
            },
            {
                "id": 936,
                "countFile": 0,
                "county": [],
                "name": "دهگلان",
                "weight": 1,
                "parent_id": 935
            },
            {
                "id": 937,
                "countFile": 0,
                "county": [],
                "name": "بلبان آباد",
                "weight": 1,
                "parent_id": 935
            },
            {
                "id": 938,
                "countFile": 0,
                "county": [
                    {
                        "id": 939,
                        "countFile": 0,
                        "name": "تویسرکان",
                        "weight": 1,
                        "parent_id": 938
                    },
                    {
                        "id": 942,
                        "countFile": 0,
                        "name": "رزن",
                        "weight": 1,
                        "parent_id": 938
                    },
                    {
                        "id": 944,
                        "countFile": 0,
                        "name": "فامنین",
                        "weight": 1,
                        "parent_id": 938
                    },
                    {
                        "id": 946,
                        "countFile": 0,
                        "name": "ملایر",
                        "weight": 1,
                        "parent_id": 938
                    },
                    {
                        "id": 950,
                        "countFile": 0,
                        "name": "اسدآباد",
                        "weight": 1,
                        "parent_id": 938
                    },
                    {
                        "id": 954,
                        "countFile": 0,
                        "name": "نهاوند",
                        "weight": 1,
                        "parent_id": 938
                    },
                    {
                        "id": 958,
                        "countFile": 0,
                        "name": "قهاوند",
                        "weight": 1,
                        "parent_id": 938
                    },
                    {
                        "id": 959,
                        "countFile": 0,
                        "name": "مریانج",
                        "weight": 1,
                        "parent_id": 938
                    },
                    {
                        "id": 960,
                        "countFile": 0,
                        "name": "جورقان",
                        "weight": 1,
                        "parent_id": 938
                    },
                    {
                        "id": 961,
                        "countFile": 0,
                        "name": "کبودرآهنگ",
                        "weight": 1,
                        "parent_id": 938
                    },
                    {
                        "id": 965,
                        "countFile": 0,
                        "name": "بهار",
                        "weight": 1,
                        "parent_id": 938
                    }
                ],
                "name": "همدان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 939,
                "countFile": 0,
                "county": [
                    {
                        "id": 940,
                        "countFile": 0,
                        "name": "تویسرکان",
                        "weight": 1,
                        "parent_id": 939
                    },
                    {
                        "id": 941,
                        "countFile": 0,
                        "name": "سرکان",
                        "weight": 1,
                        "parent_id": 939
                    },
                    {
                        "id": 1510,
                        "countFile": 0,
                        "name": "فرسفج",
                        "weight": 1,
                        "parent_id": 939
                    }
                ],
                "name": "تویسرکان",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 940,
                "countFile": 0,
                "county": [],
                "name": "تویسرکان",
                "weight": 1,
                "parent_id": 939
            },
            {
                "id": 941,
                "countFile": 0,
                "county": [],
                "name": "سرکان",
                "weight": 1,
                "parent_id": 939
            },
            {
                "id": 942,
                "countFile": 0,
                "county": [
                    {
                        "id": 943,
                        "countFile": 0,
                        "name": "رزن",
                        "weight": 1,
                        "parent_id": 942
                    },
                    {
                        "id": 967,
                        "countFile": 0,
                        "name": "دمق",
                        "weight": 1,
                        "parent_id": 942
                    },
                    {
                        "id": 968,
                        "countFile": 0,
                        "name": "قروه درجزین",
                        "weight": 1,
                        "parent_id": 942
                    },
                    {
                        "id": 969,
                        "countFile": 0,
                        "name": "کرفس",
                        "weight": 1,
                        "parent_id": 942
                    }
                ],
                "name": "رزن",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 943,
                "countFile": 0,
                "county": [],
                "name": "رزن",
                "weight": 1,
                "parent_id": 942
            },
            {
                "id": 944,
                "countFile": 0,
                "county": [
                    {
                        "id": 945,
                        "countFile": 0,
                        "name": "فامنین",
                        "weight": 1,
                        "parent_id": 944
                    }
                ],
                "name": "فامنین",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 945,
                "countFile": 0,
                "county": [],
                "name": "فامنین",
                "weight": 1,
                "parent_id": 944
            },
            {
                "id": 946,
                "countFile": 0,
                "county": [
                    {
                        "id": 947,
                        "countFile": 0,
                        "name": "ازندریان",
                        "weight": 1,
                        "parent_id": 946
                    },
                    {
                        "id": 948,
                        "countFile": 0,
                        "name": "جوکار",
                        "weight": 1,
                        "parent_id": 946
                    },
                    {
                        "id": 949,
                        "countFile": 0,
                        "name": "سامن",
                        "weight": 1,
                        "parent_id": 946
                    },
                    {
                        "id": 952,
                        "countFile": 0,
                        "name": "اسلام شهر آق گل",
                        "weight": 1,
                        "parent_id": 946
                    },
                    {
                        "id": 953,
                        "countFile": 0,
                        "name": "زنگنه",
                        "weight": 1,
                        "parent_id": 946
                    }
                ],
                "name": "ملایر",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 947,
                "countFile": 0,
                "county": [],
                "name": "ازندریان",
                "weight": 1,
                "parent_id": 946
            },
            {
                "id": 948,
                "countFile": 0,
                "county": [],
                "name": "جوکار",
                "weight": 1,
                "parent_id": 946
            },
            {
                "id": 949,
                "countFile": 0,
                "county": [],
                "name": "سامن",
                "weight": 1,
                "parent_id": 946
            },
            {
                "id": 950,
                "countFile": 0,
                "county": [
                    {
                        "id": 951,
                        "countFile": 0,
                        "name": "اسدآباد",
                        "weight": 1,
                        "parent_id": 950
                    },
                    {
                        "id": 964,
                        "countFile": 0,
                        "name": "آجین",
                        "weight": 1,
                        "parent_id": 950
                    }
                ],
                "name": "اسدآباد",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 951,
                "countFile": 0,
                "county": [],
                "name": "اسدآباد",
                "weight": 1,
                "parent_id": 950
            },
            {
                "id": 952,
                "countFile": 0,
                "county": [],
                "name": "اسلام شهر آق گل",
                "weight": 1,
                "parent_id": 946
            },
            {
                "id": 953,
                "countFile": 0,
                "county": [],
                "name": "زنگنه",
                "weight": 1,
                "parent_id": 946
            },
            {
                "id": 954,
                "countFile": 0,
                "county": [
                    {
                        "id": 955,
                        "countFile": 0,
                        "name": "فیروزان",
                        "weight": 1,
                        "parent_id": 954
                    },
                    {
                        "id": 956,
                        "countFile": 0,
                        "name": "برزول",
                        "weight": 1,
                        "parent_id": 954
                    },
                    {
                        "id": 957,
                        "countFile": 0,
                        "name": "گیان",
                        "weight": 1,
                        "parent_id": 954
                    }
                ],
                "name": "نهاوند",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 955,
                "countFile": 0,
                "county": [],
                "name": "فیروزان",
                "weight": 1,
                "parent_id": 954
            },
            {
                "id": 956,
                "countFile": 0,
                "county": [],
                "name": "برزول",
                "weight": 1,
                "parent_id": 954
            },
            {
                "id": 957,
                "countFile": 0,
                "county": [],
                "name": "گیان",
                "weight": 1,
                "parent_id": 954
            },
            {
                "id": 958,
                "countFile": 0,
                "county": [],
                "name": "قهاوند",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 959,
                "countFile": 0,
                "county": [],
                "name": "مریانج",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 960,
                "countFile": 0,
                "county": [],
                "name": "جورقان",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 961,
                "countFile": 0,
                "county": [
                    {
                        "id": 962,
                        "countFile": 0,
                        "name": "گل تپه",
                        "weight": 1,
                        "parent_id": 961
                    },
                    {
                        "id": 963,
                        "countFile": 0,
                        "name": "شیرین سو",
                        "weight": 1,
                        "parent_id": 961
                    }
                ],
                "name": "کبودرآهنگ",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 962,
                "countFile": 0,
                "county": [],
                "name": "گل تپه",
                "weight": 1,
                "parent_id": 961
            },
            {
                "id": 963,
                "countFile": 0,
                "county": [],
                "name": "شیرین سو",
                "weight": 1,
                "parent_id": 961
            },
            {
                "id": 964,
                "countFile": 0,
                "county": [],
                "name": "آجین",
                "weight": 1,
                "parent_id": 950
            },
            {
                "id": 965,
                "countFile": 0,
                "county": [
                    {
                        "id": 966,
                        "countFile": 0,
                        "name": "لالجین",
                        "weight": 1,
                        "parent_id": 965
                    }
                ],
                "name": "بهار",
                "weight": 1,
                "parent_id": 938
            },
            {
                "id": 966,
                "countFile": 0,
                "county": [],
                "name": "لالجین",
                "weight": 1,
                "parent_id": 965
            },
            {
                "id": 967,
                "countFile": 0,
                "county": [],
                "name": "دمق",
                "weight": 1,
                "parent_id": 942
            },
            {
                "id": 968,
                "countFile": 0,
                "county": [],
                "name": "قروه درجزین",
                "weight": 1,
                "parent_id": 942
            },
            {
                "id": 969,
                "countFile": 0,
                "county": [],
                "name": "کرفس",
                "weight": 1,
                "parent_id": 942
            },
            {
                "id": 970,
                "countFile": 0,
                "county": [
                    {
                        "id": 971,
                        "countFile": 0,
                        "name": "بروجن",
                        "weight": 1,
                        "parent_id": 970
                    },
                    {
                        "id": 977,
                        "countFile": 0,
                        "name": "شهرکرد",
                        "weight": 1,
                        "parent_id": 970
                    },
                    {
                        "id": 987,
                        "countFile": 0,
                        "name": "فارسان",
                        "weight": 1,
                        "parent_id": 970
                    },
                    {
                        "id": 991,
                        "countFile": 0,
                        "name": "اردل",
                        "weight": 1,
                        "parent_id": 970
                    },
                    {
                        "id": 993,
                        "countFile": 0,
                        "name": "کوهرنگ",
                        "weight": 1,
                        "parent_id": 970
                    },
                    {
                        "id": 998,
                        "countFile": 0,
                        "name": "لردگان",
                        "weight": 1,
                        "parent_id": 970
                    },
                    {
                        "id": 1006,
                        "countFile": 0,
                        "name": "کیار",
                        "weight": 1,
                        "parent_id": 970
                    },
                    {
                        "id": 1011,
                        "countFile": 0,
                        "name": "سامان",
                        "weight": 1,
                        "parent_id": 970
                    },
                    {
                        "id": 1013,
                        "countFile": 0,
                        "name": "بن",
                        "weight": 1,
                        "parent_id": 970
                    }
                ],
                "name": "چهارمحال وبختیاری",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 971,
                "countFile": 0,
                "county": [
                    {
                        "id": 972,
                        "countFile": 0,
                        "name": "بروجن",
                        "weight": 1,
                        "parent_id": 971
                    },
                    {
                        "id": 973,
                        "countFile": 0,
                        "name": "فرادبنه",
                        "weight": 1,
                        "parent_id": 971
                    },
                    {
                        "id": 974,
                        "countFile": 0,
                        "name": "سفیددشت",
                        "weight": 1,
                        "parent_id": 971
                    },
                    {
                        "id": 975,
                        "countFile": 0,
                        "name": "نقنه",
                        "weight": 1,
                        "parent_id": 971
                    },
                    {
                        "id": 976,
                        "countFile": 0,
                        "name": "بلداجی",
                        "weight": 1,
                        "parent_id": 971
                    },
                    {
                        "id": 1511,
                        "countFile": 0,
                        "name": "گندمان",
                        "weight": 1,
                        "parent_id": 971
                    }
                ],
                "name": "بروجن",
                "weight": 1,
                "parent_id": 970
            },
            {
                "id": 972,
                "countFile": 0,
                "county": [],
                "name": "بروجن",
                "weight": 1,
                "parent_id": 971
            },
            {
                "id": 973,
                "countFile": 0,
                "county": [],
                "name": "فرادبنه",
                "weight": 1,
                "parent_id": 971
            },
            {
                "id": 974,
                "countFile": 0,
                "county": [],
                "name": "سفیددشت",
                "weight": 1,
                "parent_id": 971
            },
            {
                "id": 975,
                "countFile": 0,
                "county": [],
                "name": "نقنه",
                "weight": 1,
                "parent_id": 971
            },
            {
                "id": 976,
                "countFile": 0,
                "county": [],
                "name": "بلداجی",
                "weight": 1,
                "parent_id": 971
            },
            {
                "id": 977,
                "countFile": 0,
                "county": [
                    {
                        "id": 978,
                        "countFile": 0,
                        "name": "شهرکرد",
                        "weight": 1,
                        "parent_id": 977
                    },
                    {
                        "id": 979,
                        "countFile": 0,
                        "name": "هفشجان",
                        "weight": 1,
                        "parent_id": 977
                    },
                    {
                        "id": 980,
                        "countFile": 0,
                        "name": "کیان",
                        "weight": 1,
                        "parent_id": 977
                    },
                    {
                        "id": 981,
                        "countFile": 0,
                        "name": "طاقانک",
                        "weight": 1,
                        "parent_id": 977
                    },
                    {
                        "id": 982,
                        "countFile": 0,
                        "name": "نافچ",
                        "weight": 1,
                        "parent_id": 977
                    },
                    {
                        "id": 983,
                        "countFile": 0,
                        "name": "سورشجان",
                        "weight": 1,
                        "parent_id": 977
                    },
                    {
                        "id": 984,
                        "countFile": 0,
                        "name": "سودجان",
                        "weight": 1,
                        "parent_id": 977
                    },
                    {
                        "id": 985,
                        "countFile": 0,
                        "name": "هارونی",
                        "weight": 1,
                        "parent_id": 977
                    },
                    {
                        "id": 986,
                        "countFile": 0,
                        "name": "فرخ شهر",
                        "weight": 1,
                        "parent_id": 977
                    }
                ],
                "name": "شهرکرد",
                "weight": 1,
                "parent_id": 970
            },
            {
                "id": 978,
                "countFile": 0,
                "county": [],
                "name": "شهرکرد",
                "weight": 1,
                "parent_id": 977
            },
            {
                "id": 979,
                "countFile": 0,
                "county": [],
                "name": "هفشجان",
                "weight": 1,
                "parent_id": 977
            },
            {
                "id": 980,
                "countFile": 0,
                "county": [],
                "name": "کیان",
                "weight": 1,
                "parent_id": 977
            },
            {
                "id": 981,
                "countFile": 0,
                "county": [],
                "name": "طاقانک",
                "weight": 1,
                "parent_id": 977
            },
            {
                "id": 982,
                "countFile": 0,
                "county": [],
                "name": "نافچ",
                "weight": 1,
                "parent_id": 977
            },
            {
                "id": 983,
                "countFile": 0,
                "county": [],
                "name": "سورشجان",
                "weight": 1,
                "parent_id": 977
            },
            {
                "id": 984,
                "countFile": 0,
                "county": [],
                "name": "سودجان",
                "weight": 1,
                "parent_id": 977
            },
            {
                "id": 985,
                "countFile": 0,
                "county": [],
                "name": "هارونی",
                "weight": 1,
                "parent_id": 977
            },
            {
                "id": 986,
                "countFile": 0,
                "county": [],
                "name": "فرخ شهر",
                "weight": 1,
                "parent_id": 977
            },
            {
                "id": 987,
                "countFile": 0,
                "county": [
                    {
                        "id": 988,
                        "countFile": 0,
                        "name": "فارسان",
                        "weight": 1,
                        "parent_id": 987
                    },
                    {
                        "id": 989,
                        "countFile": 0,
                        "name": "گوجان",
                        "weight": 1,
                        "parent_id": 987
                    },
                    {
                        "id": 990,
                        "countFile": 0,
                        "name": "باباحیدر",
                        "weight": 1,
                        "parent_id": 987
                    },
                    {
                        "id": 995,
                        "countFile": 0,
                        "name": "جونقان",
                        "weight": 1,
                        "parent_id": 987
                    },
                    {
                        "id": 996,
                        "countFile": 0,
                        "name": "پردنجان",
                        "weight": 1,
                        "parent_id": 987
                    },
                    {
                        "id": 997,
                        "countFile": 0,
                        "name": "چلیچه",
                        "weight": 1,
                        "parent_id": 987
                    }
                ],
                "name": "فارسان",
                "weight": 1,
                "parent_id": 970
            },
            {
                "id": 988,
                "countFile": 0,
                "county": [],
                "name": "فارسان",
                "weight": 1,
                "parent_id": 987
            },
            {
                "id": 989,
                "countFile": 0,
                "county": [],
                "name": "گوجان",
                "weight": 1,
                "parent_id": 987
            },
            {
                "id": 990,
                "countFile": 0,
                "county": [],
                "name": "باباحیدر",
                "weight": 1,
                "parent_id": 987
            },
            {
                "id": 991,
                "countFile": 0,
                "county": [
                    {
                        "id": 992,
                        "countFile": 0,
                        "name": "سرخون",
                        "weight": 1,
                        "parent_id": 991
                    },
                    {
                        "id": 1002,
                        "countFile": 0,
                        "name": "کاج",
                        "weight": 1,
                        "parent_id": 991
                    },
                    {
                        "id": 1003,
                        "countFile": 0,
                        "name": "دشتک",
                        "weight": 1,
                        "parent_id": 991
                    }
                ],
                "name": "اردل",
                "weight": 1,
                "parent_id": 970
            },
            {
                "id": 992,
                "countFile": 0,
                "county": [],
                "name": "سرخون",
                "weight": 1,
                "parent_id": 991
            },
            {
                "id": 993,
                "countFile": 0,
                "county": [
                    {
                        "id": 994,
                        "countFile": 0,
                        "name": "بازفت",
                        "weight": 1,
                        "parent_id": 993
                    },
                    {
                        "id": 1004,
                        "countFile": 0,
                        "name": "چلگرد",
                        "weight": 1,
                        "parent_id": 993
                    },
                    {
                        "id": 1005,
                        "countFile": 0,
                        "name": "صمصامی",
                        "weight": 1,
                        "parent_id": 993
                    }
                ],
                "name": "کوهرنگ",
                "weight": 1,
                "parent_id": 970
            },
            {
                "id": 994,
                "countFile": 0,
                "county": [],
                "name": "بازفت",
                "weight": 1,
                "parent_id": 993
            },
            {
                "id": 995,
                "countFile": 0,
                "county": [],
                "name": "جونقان",
                "weight": 1,
                "parent_id": 987
            },
            {
                "id": 996,
                "countFile": 0,
                "county": [],
                "name": "پردنجان",
                "weight": 1,
                "parent_id": 987
            },
            {
                "id": 997,
                "countFile": 0,
                "county": [],
                "name": "چلیچه",
                "weight": 1,
                "parent_id": 987
            },
            {
                "id": 998,
                "countFile": 0,
                "county": [
                    {
                        "id": 999,
                        "countFile": 0,
                        "name": "مال خلیفه",
                        "weight": 1,
                        "parent_id": 998
                    },
                    {
                        "id": 1000,
                        "countFile": 0,
                        "name": "آلونی",
                        "weight": 1,
                        "parent_id": 998
                    },
                    {
                        "id": 1001,
                        "countFile": 0,
                        "name": "منج",
                        "weight": 1,
                        "parent_id": 998
                    }
                ],
                "name": "لردگان",
                "weight": 1,
                "parent_id": 970
            },
            {
                "id": 999,
                "countFile": 0,
                "county": [],
                "name": "مال خلیفه",
                "weight": 1,
                "parent_id": 998
            },
            {
                "id": 1000,
                "countFile": 0,
                "county": [],
                "name": "آلونی",
                "weight": 1,
                "parent_id": 998
            },
            {
                "id": 1001,
                "countFile": 0,
                "county": [],
                "name": "منج",
                "weight": 1,
                "parent_id": 998
            },
            {
                "id": 1002,
                "countFile": 0,
                "county": [],
                "name": "کاج",
                "weight": 1,
                "parent_id": 991
            },
            {
                "id": 1003,
                "countFile": 0,
                "county": [],
                "name": "دشتک",
                "weight": 1,
                "parent_id": 991
            },
            {
                "id": 1004,
                "countFile": 0,
                "county": [],
                "name": "چلگرد",
                "weight": 1,
                "parent_id": 993
            },
            {
                "id": 1005,
                "countFile": 0,
                "county": [],
                "name": "صمصامی",
                "weight": 1,
                "parent_id": 993
            },
            {
                "id": 1006,
                "countFile": 0,
                "county": [
                    {
                        "id": 1007,
                        "countFile": 0,
                        "name": "شلمزار",
                        "weight": 1,
                        "parent_id": 1006
                    },
                    {
                        "id": 1008,
                        "countFile": 0,
                        "name": "گهرو",
                        "weight": 1,
                        "parent_id": 1006
                    },
                    {
                        "id": 1009,
                        "countFile": 0,
                        "name": "دستنا",
                        "weight": 1,
                        "parent_id": 1006
                    },
                    {
                        "id": 1010,
                        "countFile": 0,
                        "name": "ناغان",
                        "weight": 1,
                        "parent_id": 1006
                    }
                ],
                "name": "کیار",
                "weight": 1,
                "parent_id": 970
            },
            {
                "id": 1007,
                "countFile": 0,
                "county": [],
                "name": "شلمزار",
                "weight": 1,
                "parent_id": 1006
            },
            {
                "id": 1008,
                "countFile": 0,
                "county": [],
                "name": "گهرو",
                "weight": 1,
                "parent_id": 1006
            },
            {
                "id": 1009,
                "countFile": 0,
                "county": [],
                "name": "دستنا",
                "weight": 1,
                "parent_id": 1006
            },
            {
                "id": 1010,
                "countFile": 0,
                "county": [],
                "name": "ناغان",
                "weight": 1,
                "parent_id": 1006
            },
            {
                "id": 1011,
                "countFile": 0,
                "county": [
                    {
                        "id": 1012,
                        "countFile": 0,
                        "name": "سامان",
                        "weight": 1,
                        "parent_id": 1011
                    }
                ],
                "name": "سامان",
                "weight": 1,
                "parent_id": 970
            },
            {
                "id": 1012,
                "countFile": 0,
                "county": [],
                "name": "سامان",
                "weight": 1,
                "parent_id": 1011
            },
            {
                "id": 1013,
                "countFile": 0,
                "county": [
                    {
                        "id": 1014,
                        "countFile": 0,
                        "name": "بن",
                        "weight": 1,
                        "parent_id": 1013
                    },
                    {
                        "id": 1015,
                        "countFile": 0,
                        "name": "وردنجان",
                        "weight": 1,
                        "parent_id": 1013
                    }
                ],
                "name": "بن",
                "weight": 1,
                "parent_id": 970
            },
            {
                "id": 1014,
                "countFile": 0,
                "county": [],
                "name": "بن",
                "weight": 1,
                "parent_id": 1013
            },
            {
                "id": 1015,
                "countFile": 0,
                "county": [],
                "name": "وردنجان",
                "weight": 1,
                "parent_id": 1013
            },
            {
                "id": 1016,
                "countFile": 0,
                "county": [
                    {
                        "id": 1017,
                        "countFile": 0,
                        "name": "الیگودرز",
                        "weight": 1,
                        "parent_id": 1016
                    },
                    {
                        "id": 1019,
                        "countFile": 0,
                        "name": "بروجرد",
                        "weight": 1,
                        "parent_id": 1016
                    },
                    {
                        "id": 1024,
                        "countFile": 0,
                        "name": "دلفان",
                        "weight": 1,
                        "parent_id": 1016
                    },
                    {
                        "id": 1026,
                        "countFile": 0,
                        "name": "دورود",
                        "weight": 1,
                        "parent_id": 1016
                    },
                    {
                        "id": 1028,
                        "countFile": 0,
                        "name": "کوهدشت",
                        "weight": 1,
                        "parent_id": 1016
                    },
                    {
                        "id": 1032,
                        "countFile": 0,
                        "name": "ازنا",
                        "weight": 1,
                        "parent_id": 1016
                    },
                    {
                        "id": 1034,
                        "countFile": 0,
                        "name": "پلدختر",
                        "weight": 1,
                        "parent_id": 1016
                    },
                    {
                        "id": 1037,
                        "countFile": 0,
                        "name": "سلسله",
                        "weight": 1,
                        "parent_id": 1016
                    },
                    {
                        "id": 1039,
                        "countFile": 0,
                        "name": "دوره",
                        "weight": 1,
                        "parent_id": 1016
                    },
                    {
                        "id": 1042,
                        "countFile": 0,
                        "name": "رومشکان",
                        "weight": 1,
                        "parent_id": 1016
                    }
                ],
                "name": "لرستان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1017,
                "countFile": 0,
                "county": [
                    {
                        "id": 1018,
                        "countFile": 0,
                        "name": "الیگودرز",
                        "weight": 1,
                        "parent_id": 1017
                    },
                    {
                        "id": 1512,
                        "countFile": 0,
                        "name": "شول آباد",
                        "weight": 1,
                        "parent_id": 1017
                    }
                ],
                "name": "الیگودرز",
                "weight": 1,
                "parent_id": 1016
            },
            {
                "id": 1018,
                "countFile": 0,
                "county": [],
                "name": "الیگودرز",
                "weight": 1,
                "parent_id": 1017
            },
            {
                "id": 1019,
                "countFile": 0,
                "county": [
                    {
                        "id": 1020,
                        "countFile": 0,
                        "name": "اشترینان",
                        "weight": 1,
                        "parent_id": 1019
                    }
                ],
                "name": "بروجرد",
                "weight": 1,
                "parent_id": 1016
            },
            {
                "id": 1020,
                "countFile": 0,
                "county": [],
                "name": "اشترینان",
                "weight": 1,
                "parent_id": 1019
            },
            {
                "id": 1021,
                "countFile": 0,
                "county": [],
                "name": "سپیددشت",
                "weight": 1,
                "parent_id": 126
            },
            {
                "id": 1022,
                "countFile": 0,
                "county": [],
                "name": "بیران شهر",
                "weight": 1,
                "parent_id": 126
            },
            {
                "id": 1023,
                "countFile": 0,
                "county": [],
                "name": "زاغه",
                "weight": 1,
                "parent_id": 126
            },
            {
                "id": 1024,
                "countFile": 0,
                "county": [
                    {
                        "id": 1025,
                        "countFile": 0,
                        "name": "هفت چشمه",
                        "weight": 1,
                        "parent_id": 1024
                    }
                ],
                "name": "دلفان",
                "weight": 1,
                "parent_id": 1016
            },
            {
                "id": 1025,
                "countFile": 0,
                "county": [],
                "name": "هفت چشمه",
                "weight": 1,
                "parent_id": 1024
            },
            {
                "id": 1026,
                "countFile": 0,
                "county": [
                    {
                        "id": 1027,
                        "countFile": 0,
                        "name": "چالانچولان",
                        "weight": 1,
                        "parent_id": 1026
                    }
                ],
                "name": "دورود",
                "weight": 1,
                "parent_id": 1016
            },
            {
                "id": 1027,
                "countFile": 0,
                "county": [],
                "name": "چالانچولان",
                "weight": 1,
                "parent_id": 1026
            },
            {
                "id": 1028,
                "countFile": 0,
                "county": [
                    {
                        "id": 1029,
                        "countFile": 0,
                        "name": "کوهنانی",
                        "weight": 1,
                        "parent_id": 1028
                    },
                    {
                        "id": 1030,
                        "countFile": 0,
                        "name": "درب گنبد",
                        "weight": 1,
                        "parent_id": 1028
                    },
                    {
                        "id": 1031,
                        "countFile": 0,
                        "name": "گراب",
                        "weight": 1,
                        "parent_id": 1028
                    }
                ],
                "name": "کوهدشت",
                "weight": 1,
                "parent_id": 1016
            },
            {
                "id": 1029,
                "countFile": 0,
                "county": [],
                "name": "کوهنانی",
                "weight": 1,
                "parent_id": 1028
            },
            {
                "id": 1030,
                "countFile": 0,
                "county": [],
                "name": "درب گنبد",
                "weight": 1,
                "parent_id": 1028
            },
            {
                "id": 1031,
                "countFile": 0,
                "county": [],
                "name": "گراب",
                "weight": 1,
                "parent_id": 1028
            },
            {
                "id": 1032,
                "countFile": 0,
                "county": [
                    {
                        "id": 1033,
                        "countFile": 0,
                        "name": "مومن آباد",
                        "weight": 1,
                        "parent_id": 1032
                    }
                ],
                "name": "ازنا",
                "weight": 1,
                "parent_id": 1016
            },
            {
                "id": 1033,
                "countFile": 0,
                "county": [],
                "name": "مومن آباد",
                "weight": 1,
                "parent_id": 1032
            },
            {
                "id": 1034,
                "countFile": 0,
                "county": [
                    {
                        "id": 1035,
                        "countFile": 0,
                        "name": "پلدختر",
                        "weight": 1,
                        "parent_id": 1034
                    },
                    {
                        "id": 1036,
                        "countFile": 0,
                        "name": "معمولان",
                        "weight": 1,
                        "parent_id": 1034
                    }
                ],
                "name": "پلدختر",
                "weight": 1,
                "parent_id": 1016
            },
            {
                "id": 1035,
                "countFile": 0,
                "county": [],
                "name": "پلدختر",
                "weight": 1,
                "parent_id": 1034
            },
            {
                "id": 1036,
                "countFile": 0,
                "county": [],
                "name": "معمولان",
                "weight": 1,
                "parent_id": 1034
            },
            {
                "id": 1037,
                "countFile": 0,
                "county": [
                    {
                        "id": 1038,
                        "countFile": 0,
                        "name": "الشتر",
                        "weight": 1,
                        "parent_id": 1037
                    }
                ],
                "name": "سلسله",
                "weight": 1,
                "parent_id": 1016
            },
            {
                "id": 1038,
                "countFile": 0,
                "county": [],
                "name": "الشتر",
                "weight": 1,
                "parent_id": 1037
            },
            {
                "id": 1039,
                "countFile": 0,
                "county": [
                    {
                        "id": 1040,
                        "countFile": 0,
                        "name": "سراب دوره",
                        "weight": 1,
                        "parent_id": 1039
                    },
                    {
                        "id": 1041,
                        "countFile": 0,
                        "name": "ویسیان",
                        "weight": 1,
                        "parent_id": 1039
                    }
                ],
                "name": "دوره",
                "weight": 1,
                "parent_id": 1016
            },
            {
                "id": 1040,
                "countFile": 0,
                "county": [],
                "name": "سراب دوره",
                "weight": 1,
                "parent_id": 1039
            },
            {
                "id": 1041,
                "countFile": 0,
                "county": [],
                "name": "ویسیان",
                "weight": 1,
                "parent_id": 1039
            },
            {
                "id": 1042,
                "countFile": 0,
                "county": [
                    {
                        "id": 1043,
                        "countFile": 0,
                        "name": "چقابل",
                        "weight": 1,
                        "parent_id": 1042
                    }
                ],
                "name": "رومشکان",
                "weight": 1,
                "parent_id": 1016
            },
            {
                "id": 1043,
                "countFile": 0,
                "county": [],
                "name": "چقابل",
                "weight": 1,
                "parent_id": 1042
            },
            {
                "id": 1044,
                "countFile": 0,
                "county": [
                    {
                        "id": 1045,
                        "countFile": 0,
                        "name": "ایلام",
                        "weight": 1,
                        "parent_id": 1044
                    },
                    {
                        "id": 1047,
                        "countFile": 0,
                        "name": "دره شهر",
                        "weight": 1,
                        "parent_id": 1044
                    },
                    {
                        "id": 1050,
                        "countFile": 0,
                        "name": "دهلران",
                        "weight": 1,
                        "parent_id": 1044
                    },
                    {
                        "id": 1053,
                        "countFile": 0,
                        "name": "چرداول",
                        "weight": 1,
                        "parent_id": 1044
                    },
                    {
                        "id": 1059,
                        "countFile": 0,
                        "name": "مهران",
                        "weight": 1,
                        "parent_id": 1044
                    },
                    {
                        "id": 1061,
                        "countFile": 0,
                        "name": "آبدانان",
                        "weight": 1,
                        "parent_id": 1044
                    },
                    {
                        "id": 1064,
                        "countFile": 0,
                        "name": "ایوان",
                        "weight": 1,
                        "parent_id": 1044
                    },
                    {
                        "id": 1066,
                        "countFile": 0,
                        "name": "ملکشاهی",
                        "weight": 1,
                        "parent_id": 1044
                    },
                    {
                        "id": 1069,
                        "countFile": 0,
                        "name": "سیروان",
                        "weight": 1,
                        "parent_id": 1044
                    },
                    {
                        "id": 1071,
                        "countFile": 0,
                        "name": "بدره",
                        "weight": 1,
                        "parent_id": 1044
                    },
                    {
                        "id": 1513,
                        "countFile": 0,
                        "name": "چوار",
                        "weight": 1,
                        "parent_id": 1044
                    }
                ],
                "name": "ایلام",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1045,
                "countFile": 0,
                "county": [
                    {
                        "id": 1046,
                        "countFile": 0,
                        "name": "ایلام",
                        "weight": 1,
                        "parent_id": 1045
                    }
                ],
                "name": "ایلام",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1046,
                "countFile": 0,
                "county": [],
                "name": "ایلام",
                "weight": 1,
                "parent_id": 1045
            },
            {
                "id": 1047,
                "countFile": 0,
                "county": [
                    {
                        "id": 1048,
                        "countFile": 0,
                        "name": "دره شهر",
                        "weight": 1,
                        "parent_id": 1047
                    },
                    {
                        "id": 1049,
                        "countFile": 0,
                        "name": "ماژین",
                        "weight": 1,
                        "parent_id": 1047
                    }
                ],
                "name": "دره شهر",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1048,
                "countFile": 0,
                "county": [],
                "name": "دره شهر",
                "weight": 1,
                "parent_id": 1047
            },
            {
                "id": 1049,
                "countFile": 0,
                "county": [],
                "name": "ماژین",
                "weight": 1,
                "parent_id": 1047
            },
            {
                "id": 1050,
                "countFile": 0,
                "county": [
                    {
                        "id": 1051,
                        "countFile": 0,
                        "name": "پهله",
                        "weight": 1,
                        "parent_id": 1050
                    },
                    {
                        "id": 1052,
                        "countFile": 0,
                        "name": "موسیان",
                        "weight": 1,
                        "parent_id": 1050
                    }
                ],
                "name": "دهلران",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1051,
                "countFile": 0,
                "county": [],
                "name": "پهله",
                "weight": 1,
                "parent_id": 1050
            },
            {
                "id": 1052,
                "countFile": 0,
                "county": [],
                "name": "موسیان",
                "weight": 1,
                "parent_id": 1050
            },
            {
                "id": 1053,
                "countFile": 0,
                "county": [
                    {
                        "id": 1054,
                        "countFile": 0,
                        "name": "سرابله",
                        "weight": 1,
                        "parent_id": 1053
                    },
                    {
                        "id": 1055,
                        "countFile": 0,
                        "name": "آسمان آباد",
                        "weight": 1,
                        "parent_id": 1053
                    },
                    {
                        "id": 1056,
                        "countFile": 0,
                        "name": "توحید",
                        "weight": 1,
                        "parent_id": 1053
                    },
                    {
                        "id": 1057,
                        "countFile": 0,
                        "name": "شباب",
                        "weight": 1,
                        "parent_id": 1053
                    },
                    {
                        "id": 1058,
                        "countFile": 0,
                        "name": "بلاوه",
                        "weight": 1,
                        "parent_id": 1053
                    }
                ],
                "name": "چرداول",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1054,
                "countFile": 0,
                "county": [],
                "name": "سرابله",
                "weight": 1,
                "parent_id": 1053
            },
            {
                "id": 1055,
                "countFile": 0,
                "county": [],
                "name": "آسمان آباد",
                "weight": 1,
                "parent_id": 1053
            },
            {
                "id": 1056,
                "countFile": 0,
                "county": [],
                "name": "توحید",
                "weight": 1,
                "parent_id": 1053
            },
            {
                "id": 1057,
                "countFile": 0,
                "county": [],
                "name": "شباب",
                "weight": 1,
                "parent_id": 1053
            },
            {
                "id": 1058,
                "countFile": 0,
                "county": [],
                "name": "بلاوه",
                "weight": 1,
                "parent_id": 1053
            },
            {
                "id": 1059,
                "countFile": 0,
                "county": [
                    {
                        "id": 1060,
                        "countFile": 0,
                        "name": "مهران",
                        "weight": 1,
                        "parent_id": 1059
                    }
                ],
                "name": "مهران",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1060,
                "countFile": 0,
                "county": [],
                "name": "مهران",
                "weight": 1,
                "parent_id": 1059
            },
            {
                "id": 1061,
                "countFile": 0,
                "county": [
                    {
                        "id": 1062,
                        "countFile": 0,
                        "name": "مورموری",
                        "weight": 1,
                        "parent_id": 1061
                    },
                    {
                        "id": 1063,
                        "countFile": 0,
                        "name": "سراب باغ",
                        "weight": 1,
                        "parent_id": 1061
                    }
                ],
                "name": "آبدانان",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1062,
                "countFile": 0,
                "county": [],
                "name": "مورموری",
                "weight": 1,
                "parent_id": 1061
            },
            {
                "id": 1063,
                "countFile": 0,
                "county": [],
                "name": "سراب باغ",
                "weight": 1,
                "parent_id": 1061
            },
            {
                "id": 1064,
                "countFile": 0,
                "county": [
                    {
                        "id": 1065,
                        "countFile": 0,
                        "name": "زرنه",
                        "weight": 1,
                        "parent_id": 1064
                    }
                ],
                "name": "ایوان",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1065,
                "countFile": 0,
                "county": [],
                "name": "زرنه",
                "weight": 1,
                "parent_id": 1064
            },
            {
                "id": 1066,
                "countFile": 0,
                "county": [
                    {
                        "id": 1067,
                        "countFile": 0,
                        "name": "ارکواز",
                        "weight": 1,
                        "parent_id": 1066
                    },
                    {
                        "id": 1068,
                        "countFile": 0,
                        "name": "دلگشا",
                        "weight": 1,
                        "parent_id": 1066
                    }
                ],
                "name": "ملکشاهی",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1067,
                "countFile": 0,
                "county": [],
                "name": "ارکواز",
                "weight": 1,
                "parent_id": 1066
            },
            {
                "id": 1068,
                "countFile": 0,
                "county": [],
                "name": "دلگشا",
                "weight": 1,
                "parent_id": 1066
            },
            {
                "id": 1069,
                "countFile": 0,
                "county": [
                    {
                        "id": 1070,
                        "countFile": 0,
                        "name": "لومار",
                        "weight": 1,
                        "parent_id": 1069
                    }
                ],
                "name": "سیروان",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1070,
                "countFile": 0,
                "county": [],
                "name": "لومار",
                "weight": 1,
                "parent_id": 1069
            },
            {
                "id": 1071,
                "countFile": 0,
                "county": [
                    {
                        "id": 1072,
                        "countFile": 0,
                        "name": "بدره",
                        "weight": 1,
                        "parent_id": 1071
                    }
                ],
                "name": "بدره",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1072,
                "countFile": 0,
                "county": [],
                "name": "بدره",
                "weight": 1,
                "parent_id": 1071
            },
            {
                "id": 1073,
                "countFile": 0,
                "county": [
                    {
                        "id": 1074,
                        "countFile": 0,
                        "name": "بویراحمد",
                        "weight": 1,
                        "parent_id": 1073
                    },
                    {
                        "id": 1080,
                        "countFile": 0,
                        "name": "کهگیلویه",
                        "weight": 1,
                        "parent_id": 1073
                    },
                    {
                        "id": 1085,
                        "countFile": 0,
                        "name": "گچساران",
                        "weight": 1,
                        "parent_id": 1073
                    },
                    {
                        "id": 1087,
                        "countFile": 0,
                        "name": "دنا",
                        "weight": 1,
                        "parent_id": 1073
                    },
                    {
                        "id": 1090,
                        "countFile": 0,
                        "name": "بهمیی",
                        "weight": 1,
                        "parent_id": 1073
                    },
                    {
                        "id": 1092,
                        "countFile": 0,
                        "name": "چرام",
                        "weight": 1,
                        "parent_id": 1073
                    },
                    {
                        "id": 1095,
                        "countFile": 0,
                        "name": "باشت",
                        "weight": 1,
                        "parent_id": 1073
                    },
                    {
                        "id": 1097,
                        "countFile": 0,
                        "name": "لنده",
                        "weight": 1,
                        "parent_id": 1073
                    }
                ],
                "name": "کهگیلویه وبویراحمد",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1074,
                "countFile": 0,
                "county": [
                    {
                        "id": 1075,
                        "countFile": 0,
                        "name": "بویراحمد",
                        "weight": 1,
                        "parent_id": 1074
                    },
                    {
                        "id": 1076,
                        "countFile": 0,
                        "name": "گراب سفلی",
                        "weight": 1,
                        "parent_id": 1074
                    },
                    {
                        "id": 1077,
                        "countFile": 0,
                        "name": "یاسوج",
                        "weight": 1,
                        "parent_id": 1074
                    },
                    {
                        "id": 1078,
                        "countFile": 0,
                        "name": "مادوان",
                        "weight": 1,
                        "parent_id": 1074
                    },
                    {
                        "id": 1079,
                        "countFile": 0,
                        "name": "چیتاب",
                        "weight": 1,
                        "parent_id": 1074
                    },
                    {
                        "id": 1514,
                        "countFile": 0,
                        "name": "مارگون",
                        "weight": 1,
                        "parent_id": 1074
                    }
                ],
                "name": "بویراحمد",
                "weight": 1,
                "parent_id": 1073
            },
            {
                "id": 1075,
                "countFile": 0,
                "county": [],
                "name": "بویراحمد",
                "weight": 1,
                "parent_id": 1074
            },
            {
                "id": 1076,
                "countFile": 0,
                "county": [],
                "name": "گراب سفلی",
                "weight": 1,
                "parent_id": 1074
            },
            {
                "id": 1077,
                "countFile": 0,
                "county": [],
                "name": "یاسوج",
                "weight": 1,
                "parent_id": 1074
            },
            {
                "id": 1078,
                "countFile": 0,
                "county": [],
                "name": "مادوان",
                "weight": 1,
                "parent_id": 1074
            },
            {
                "id": 1079,
                "countFile": 0,
                "county": [],
                "name": "چیتاب",
                "weight": 1,
                "parent_id": 1074
            },
            {
                "id": 1080,
                "countFile": 0,
                "county": [
                    {
                        "id": 1081,
                        "countFile": 0,
                        "name": "قلعه رییسی",
                        "weight": 1,
                        "parent_id": 1080
                    },
                    {
                        "id": 1082,
                        "countFile": 0,
                        "name": "دهدشت",
                        "weight": 1,
                        "parent_id": 1080
                    },
                    {
                        "id": 1083,
                        "countFile": 0,
                        "name": "دیشموک",
                        "weight": 1,
                        "parent_id": 1080
                    },
                    {
                        "id": 1084,
                        "countFile": 0,
                        "name": "سوق",
                        "weight": 1,
                        "parent_id": 1080
                    }
                ],
                "name": "کهگیلویه",
                "weight": 1,
                "parent_id": 1073
            },
            {
                "id": 1081,
                "countFile": 0,
                "county": [],
                "name": "قلعه رییسی",
                "weight": 1,
                "parent_id": 1080
            },
            {
                "id": 1082,
                "countFile": 0,
                "county": [],
                "name": "دهدشت",
                "weight": 1,
                "parent_id": 1080
            },
            {
                "id": 1083,
                "countFile": 0,
                "county": [],
                "name": "دیشموک",
                "weight": 1,
                "parent_id": 1080
            },
            {
                "id": 1084,
                "countFile": 0,
                "county": [],
                "name": "سوق",
                "weight": 1,
                "parent_id": 1080
            },
            {
                "id": 1085,
                "countFile": 0,
                "county": [
                    {
                        "id": 1086,
                        "countFile": 0,
                        "name": "دوگنبدان",
                        "weight": 1,
                        "parent_id": 1085
                    }
                ],
                "name": "گچساران",
                "weight": 1,
                "parent_id": 1073
            },
            {
                "id": 1086,
                "countFile": 0,
                "county": [],
                "name": "دوگنبدان",
                "weight": 1,
                "parent_id": 1085
            },
            {
                "id": 1087,
                "countFile": 0,
                "county": [
                    {
                        "id": 1088,
                        "countFile": 0,
                        "name": "پاتاوه",
                        "weight": 1,
                        "parent_id": 1087
                    },
                    {
                        "id": 1089,
                        "countFile": 0,
                        "name": "سی سخت",
                        "weight": 1,
                        "parent_id": 1087
                    }
                ],
                "name": "دنا",
                "weight": 1,
                "parent_id": 1073
            },
            {
                "id": 1088,
                "countFile": 0,
                "county": [],
                "name": "پاتاوه",
                "weight": 1,
                "parent_id": 1087
            },
            {
                "id": 1089,
                "countFile": 0,
                "county": [],
                "name": "سی سخت",
                "weight": 1,
                "parent_id": 1087
            },
            {
                "id": 1090,
                "countFile": 0,
                "county": [
                    {
                        "id": 1091,
                        "countFile": 0,
                        "name": "لیکک",
                        "weight": 1,
                        "parent_id": 1090
                    }
                ],
                "name": "بهمیی",
                "weight": 1,
                "parent_id": 1073
            },
            {
                "id": 1091,
                "countFile": 0,
                "county": [],
                "name": "لیکک",
                "weight": 1,
                "parent_id": 1090
            },
            {
                "id": 1092,
                "countFile": 0,
                "county": [
                    {
                        "id": 1093,
                        "countFile": 0,
                        "name": "چرام",
                        "weight": 1,
                        "parent_id": 1092
                    },
                    {
                        "id": 1094,
                        "countFile": 0,
                        "name": "سرفاریاب",
                        "weight": 1,
                        "parent_id": 1092
                    }
                ],
                "name": "چرام",
                "weight": 1,
                "parent_id": 1073
            },
            {
                "id": 1093,
                "countFile": 0,
                "county": [],
                "name": "چرام",
                "weight": 1,
                "parent_id": 1092
            },
            {
                "id": 1094,
                "countFile": 0,
                "county": [],
                "name": "سرفاریاب",
                "weight": 1,
                "parent_id": 1092
            },
            {
                "id": 1095,
                "countFile": 0,
                "county": [
                    {
                        "id": 1096,
                        "countFile": 0,
                        "name": "باشت",
                        "weight": 1,
                        "parent_id": 1095
                    }
                ],
                "name": "باشت",
                "weight": 1,
                "parent_id": 1073
            },
            {
                "id": 1096,
                "countFile": 0,
                "county": [],
                "name": "باشت",
                "weight": 1,
                "parent_id": 1095
            },
            {
                "id": 1097,
                "countFile": 0,
                "county": [
                    {
                        "id": 1098,
                        "countFile": 0,
                        "name": "لنده",
                        "weight": 1,
                        "parent_id": 1097
                    }
                ],
                "name": "لنده",
                "weight": 1,
                "parent_id": 1073
            },
            {
                "id": 1098,
                "countFile": 0,
                "county": [],
                "name": "لنده",
                "weight": 1,
                "parent_id": 1097
            },
            {
                "id": 1099,
                "countFile": 0,
                "county": [
                    {
                        "id": 1100,
                        "countFile": 0,
                        "name": "بوشهر",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1102,
                        "countFile": 0,
                        "name": "چغادک",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1103,
                        "countFile": 0,
                        "name": "عالی شهر",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1104,
                        "countFile": 0,
                        "name": "تنگستان",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1108,
                        "countFile": 0,
                        "name": "دشتستان",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1118,
                        "countFile": 0,
                        "name": "دشتی",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1123,
                        "countFile": 0,
                        "name": "دیر",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1129,
                        "countFile": 0,
                        "name": "کنگان",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1133,
                        "countFile": 0,
                        "name": "گناوه",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1135,
                        "countFile": 0,
                        "name": "جم",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1138,
                        "countFile": 0,
                        "name": "عسلویه",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1142,
                        "countFile": 0,
                        "name": "دیلم",
                        "weight": 1,
                        "parent_id": 1099
                    },
                    {
                        "id": 1515,
                        "countFile": 0,
                        "name": "خارک",
                        "weight": 1,
                        "parent_id": 1099
                    }
                ],
                "name": "بوشهر",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1100,
                "countFile": 0,
                "county": [
                    {
                        "id": 1101,
                        "countFile": 0,
                        "name": "بوشهر",
                        "weight": 1,
                        "parent_id": 1100
                    }
                ],
                "name": "بوشهر",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1101,
                "countFile": 0,
                "county": [],
                "name": "بوشهر",
                "weight": 1,
                "parent_id": 1100
            },
            {
                "id": 1102,
                "countFile": 0,
                "county": [],
                "name": "چغادک",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1103,
                "countFile": 0,
                "county": [],
                "name": "عالی شهر",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1104,
                "countFile": 0,
                "county": [
                    {
                        "id": 1105,
                        "countFile": 0,
                        "name": "دلوار",
                        "weight": 1,
                        "parent_id": 1104
                    },
                    {
                        "id": 1106,
                        "countFile": 0,
                        "name": "اهرم",
                        "weight": 1,
                        "parent_id": 1104
                    },
                    {
                        "id": 1107,
                        "countFile": 0,
                        "name": "آباد",
                        "weight": 1,
                        "parent_id": 1104
                    }
                ],
                "name": "تنگستان",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1105,
                "countFile": 0,
                "county": [],
                "name": "دلوار",
                "weight": 1,
                "parent_id": 1104
            },
            {
                "id": 1106,
                "countFile": 0,
                "county": [],
                "name": "اهرم",
                "weight": 1,
                "parent_id": 1104
            },
            {
                "id": 1107,
                "countFile": 0,
                "county": [],
                "name": "آباد",
                "weight": 1,
                "parent_id": 1104
            },
            {
                "id": 1108,
                "countFile": 0,
                "county": [
                    {
                        "id": 1109,
                        "countFile": 0,
                        "name": "سعد آباد",
                        "weight": 1,
                        "parent_id": 1108
                    },
                    {
                        "id": 1110,
                        "countFile": 0,
                        "name": "وحدتیه",
                        "weight": 1,
                        "parent_id": 1108
                    },
                    {
                        "id": 1111,
                        "countFile": 0,
                        "name": "شبانکاره",
                        "weight": 1,
                        "parent_id": 1108
                    },
                    {
                        "id": 1112,
                        "countFile": 0,
                        "name": "برازجان",
                        "weight": 1,
                        "parent_id": 1108
                    },
                    {
                        "id": 1113,
                        "countFile": 0,
                        "name": "دالکی",
                        "weight": 1,
                        "parent_id": 1108
                    },
                    {
                        "id": 1114,
                        "countFile": 0,
                        "name": "تنگ ارم",
                        "weight": 1,
                        "parent_id": 1108
                    },
                    {
                        "id": 1115,
                        "countFile": 0,
                        "name": "کلمه",
                        "weight": 1,
                        "parent_id": 1108
                    },
                    {
                        "id": 1116,
                        "countFile": 0,
                        "name": "بوشکان",
                        "weight": 1,
                        "parent_id": 1108
                    },
                    {
                        "id": 1117,
                        "countFile": 0,
                        "name": "آب پخش",
                        "weight": 1,
                        "parent_id": 1108
                    }
                ],
                "name": "دشتستان",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1109,
                "countFile": 0,
                "county": [],
                "name": "سعد آباد",
                "weight": 1,
                "parent_id": 1108
            },
            {
                "id": 1110,
                "countFile": 0,
                "county": [],
                "name": "وحدتیه",
                "weight": 1,
                "parent_id": 1108
            },
            {
                "id": 1111,
                "countFile": 0,
                "county": [],
                "name": "شبانکاره",
                "weight": 1,
                "parent_id": 1108
            },
            {
                "id": 1112,
                "countFile": 0,
                "county": [],
                "name": "برازجان",
                "weight": 1,
                "parent_id": 1108
            },
            {
                "id": 1113,
                "countFile": 0,
                "county": [],
                "name": "دالکی",
                "weight": 1,
                "parent_id": 1108
            },
            {
                "id": 1114,
                "countFile": 0,
                "county": [],
                "name": "تنگ ارم",
                "weight": 1,
                "parent_id": 1108
            },
            {
                "id": 1115,
                "countFile": 0,
                "county": [],
                "name": "کلمه",
                "weight": 1,
                "parent_id": 1108
            },
            {
                "id": 1116,
                "countFile": 0,
                "county": [],
                "name": "بوشکان",
                "weight": 1,
                "parent_id": 1108
            },
            {
                "id": 1117,
                "countFile": 0,
                "county": [],
                "name": "آب پخش",
                "weight": 1,
                "parent_id": 1108
            },
            {
                "id": 1118,
                "countFile": 0,
                "county": [
                    {
                        "id": 1119,
                        "countFile": 0,
                        "name": "کاکی",
                        "weight": 1,
                        "parent_id": 1118
                    },
                    {
                        "id": 1120,
                        "countFile": 0,
                        "name": "بادوله",
                        "weight": 1,
                        "parent_id": 1118
                    },
                    {
                        "id": 1121,
                        "countFile": 0,
                        "name": "خورموج",
                        "weight": 1,
                        "parent_id": 1118
                    },
                    {
                        "id": 1122,
                        "countFile": 0,
                        "name": "شنبه",
                        "weight": 1,
                        "parent_id": 1118
                    }
                ],
                "name": "دشتی",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1119,
                "countFile": 0,
                "county": [],
                "name": "کاکی",
                "weight": 1,
                "parent_id": 1118
            },
            {
                "id": 1120,
                "countFile": 0,
                "county": [],
                "name": "بادوله",
                "weight": 1,
                "parent_id": 1118
            },
            {
                "id": 1121,
                "countFile": 0,
                "county": [],
                "name": "خورموج",
                "weight": 1,
                "parent_id": 1118
            },
            {
                "id": 1122,
                "countFile": 0,
                "county": [],
                "name": "شنبه",
                "weight": 1,
                "parent_id": 1118
            },
            {
                "id": 1123,
                "countFile": 0,
                "county": [
                    {
                        "id": 1124,
                        "countFile": 0,
                        "name": "بردخون",
                        "weight": 1,
                        "parent_id": 1123
                    },
                    {
                        "id": 1125,
                        "countFile": 0,
                        "name": "بندردیر",
                        "weight": 1,
                        "parent_id": 1123
                    },
                    {
                        "id": 1126,
                        "countFile": 0,
                        "name": "بردستان",
                        "weight": 1,
                        "parent_id": 1123
                    },
                    {
                        "id": 1127,
                        "countFile": 0,
                        "name": "دوراهک",
                        "weight": 1,
                        "parent_id": 1123
                    },
                    {
                        "id": 1128,
                        "countFile": 0,
                        "name": "آبدان",
                        "weight": 1,
                        "parent_id": 1123
                    }
                ],
                "name": "دیر",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1124,
                "countFile": 0,
                "county": [],
                "name": "بردخون",
                "weight": 1,
                "parent_id": 1123
            },
            {
                "id": 1125,
                "countFile": 0,
                "county": [],
                "name": "بندردیر",
                "weight": 1,
                "parent_id": 1123
            },
            {
                "id": 1126,
                "countFile": 0,
                "county": [],
                "name": "بردستان",
                "weight": 1,
                "parent_id": 1123
            },
            {
                "id": 1127,
                "countFile": 0,
                "county": [],
                "name": "دوراهک",
                "weight": 1,
                "parent_id": 1123
            },
            {
                "id": 1128,
                "countFile": 0,
                "county": [],
                "name": "آبدان",
                "weight": 1,
                "parent_id": 1123
            },
            {
                "id": 1129,
                "countFile": 0,
                "county": [
                    {
                        "id": 1130,
                        "countFile": 0,
                        "name": "بندرکنگان",
                        "weight": 1,
                        "parent_id": 1129
                    },
                    {
                        "id": 1131,
                        "countFile": 0,
                        "name": "بنک",
                        "weight": 1,
                        "parent_id": 1129
                    },
                    {
                        "id": 1132,
                        "countFile": 0,
                        "name": "سیراف",
                        "weight": 1,
                        "parent_id": 1129
                    }
                ],
                "name": "کنگان",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1130,
                "countFile": 0,
                "county": [],
                "name": "بندرکنگان",
                "weight": 1,
                "parent_id": 1129
            },
            {
                "id": 1131,
                "countFile": 0,
                "county": [],
                "name": "بنک",
                "weight": 1,
                "parent_id": 1129
            },
            {
                "id": 1132,
                "countFile": 0,
                "county": [],
                "name": "سیراف",
                "weight": 1,
                "parent_id": 1129
            },
            {
                "id": 1133,
                "countFile": 0,
                "county": [
                    {
                        "id": 1134,
                        "countFile": 0,
                        "name": "بندرریگ",
                        "weight": 1,
                        "parent_id": 1133
                    },
                    {
                        "id": 1141,
                        "countFile": 0,
                        "name": "بندرگناوه",
                        "weight": 1,
                        "parent_id": 1133
                    }
                ],
                "name": "گناوه",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1134,
                "countFile": 0,
                "county": [],
                "name": "بندرریگ",
                "weight": 1,
                "parent_id": 1133
            },
            {
                "id": 1135,
                "countFile": 0,
                "county": [
                    {
                        "id": 1136,
                        "countFile": 0,
                        "name": "انارستان",
                        "weight": 1,
                        "parent_id": 1135
                    },
                    {
                        "id": 1137,
                        "countFile": 0,
                        "name": "ریز",
                        "weight": 1,
                        "parent_id": 1135
                    }
                ],
                "name": "جم",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1136,
                "countFile": 0,
                "county": [],
                "name": "انارستان",
                "weight": 1,
                "parent_id": 1135
            },
            {
                "id": 1137,
                "countFile": 0,
                "county": [],
                "name": "ریز",
                "weight": 1,
                "parent_id": 1135
            },
            {
                "id": 1138,
                "countFile": 0,
                "county": [
                    {
                        "id": 1139,
                        "countFile": 0,
                        "name": "عسلویه",
                        "weight": 1,
                        "parent_id": 1138
                    },
                    {
                        "id": 1140,
                        "countFile": 0,
                        "name": "نخل تقی",
                        "weight": 1,
                        "parent_id": 1138
                    }
                ],
                "name": "عسلویه",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1139,
                "countFile": 0,
                "county": [],
                "name": "عسلویه",
                "weight": 1,
                "parent_id": 1138
            },
            {
                "id": 1140,
                "countFile": 0,
                "county": [],
                "name": "نخل تقی",
                "weight": 1,
                "parent_id": 1138
            },
            {
                "id": 1141,
                "countFile": 0,
                "county": [],
                "name": "بندرگناوه",
                "weight": 1,
                "parent_id": 1133
            },
            {
                "id": 1142,
                "countFile": 0,
                "county": [
                    {
                        "id": 1143,
                        "countFile": 0,
                        "name": "امام حسن",
                        "weight": 1,
                        "parent_id": 1142
                    },
                    {
                        "id": 1144,
                        "countFile": 0,
                        "name": "بندردیلم",
                        "weight": 1,
                        "parent_id": 1142
                    }
                ],
                "name": "دیلم",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1143,
                "countFile": 0,
                "county": [],
                "name": "امام حسن",
                "weight": 1,
                "parent_id": 1142
            },
            {
                "id": 1144,
                "countFile": 0,
                "county": [],
                "name": "بندردیلم",
                "weight": 1,
                "parent_id": 1142
            },
            {
                "id": 1145,
                "countFile": 0,
                "county": [
                    {
                        "id": 1146,
                        "countFile": 0,
                        "name": "ماهنشان",
                        "weight": 1,
                        "parent_id": 1145
                    },
                    {
                        "id": 1149,
                        "countFile": 0,
                        "name": "سلطانیه",
                        "weight": 1,
                        "parent_id": 1145
                    },
                    {
                        "id": 1151,
                        "countFile": 0,
                        "name": "ایجرود",
                        "weight": 1,
                        "parent_id": 1145
                    },
                    {
                        "id": 1154,
                        "countFile": 0,
                        "name": "خرمدره",
                        "weight": 1,
                        "parent_id": 1145
                    },
                    {
                        "id": 1156,
                        "countFile": 0,
                        "name": "طارم",
                        "weight": 1,
                        "parent_id": 1145
                    },
                    {
                        "id": 1159,
                        "countFile": 0,
                        "name": "ابهر",
                        "weight": 1,
                        "parent_id": 1145
                    },
                    {
                        "id": 1163,
                        "countFile": 0,
                        "name": "خدابنده",
                        "weight": 1,
                        "parent_id": 1145
                    },
                    {
                        "id": 1171,
                        "countFile": 0,
                        "name": "نیک پی",
                        "weight": 1,
                        "parent_id": 1145
                    },
                    {
                        "id": 1172,
                        "countFile": 0,
                        "name": "ارمغانخانه",
                        "weight": 1,
                        "parent_id": 1145
                    }
                ],
                "name": "زنجان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1146,
                "countFile": 0,
                "county": [
                    {
                        "id": 1147,
                        "countFile": 0,
                        "name": "ماهنشان",
                        "weight": 1,
                        "parent_id": 1146
                    },
                    {
                        "id": 1148,
                        "countFile": 0,
                        "name": "ماه نشان",
                        "weight": 1,
                        "parent_id": 1146
                    },
                    {
                        "id": 1516,
                        "countFile": 0,
                        "name": "دندی",
                        "weight": 1,
                        "parent_id": 1146
                    }
                ],
                "name": "ماهنشان",
                "weight": 1,
                "parent_id": 1145
            },
            {
                "id": 1147,
                "countFile": 0,
                "county": [],
                "name": "ماهنشان",
                "weight": 1,
                "parent_id": 1146
            },
            {
                "id": 1148,
                "countFile": 0,
                "county": [],
                "name": "ماه نشان",
                "weight": 1,
                "parent_id": 1146
            },
            {
                "id": 1149,
                "countFile": 0,
                "county": [
                    {
                        "id": 1150,
                        "countFile": 0,
                        "name": "سلطانیه",
                        "weight": 1,
                        "parent_id": 1149
                    }
                ],
                "name": "سلطانیه",
                "weight": 1,
                "parent_id": 1145
            },
            {
                "id": 1150,
                "countFile": 0,
                "county": [],
                "name": "سلطانیه",
                "weight": 1,
                "parent_id": 1149
            },
            {
                "id": 1151,
                "countFile": 0,
                "county": [
                    {
                        "id": 1152,
                        "countFile": 0,
                        "name": "حلب",
                        "weight": 1,
                        "parent_id": 1151
                    },
                    {
                        "id": 1153,
                        "countFile": 0,
                        "name": "زرین آباد",
                        "weight": 1,
                        "parent_id": 1151
                    }
                ],
                "name": "ایجرود",
                "weight": 1,
                "parent_id": 1145
            },
            {
                "id": 1152,
                "countFile": 0,
                "county": [],
                "name": "حلب",
                "weight": 1,
                "parent_id": 1151
            },
            {
                "id": 1153,
                "countFile": 0,
                "county": [],
                "name": "زرین آباد",
                "weight": 1,
                "parent_id": 1151
            },
            {
                "id": 1154,
                "countFile": 0,
                "county": [
                    {
                        "id": 1155,
                        "countFile": 0,
                        "name": "خرمدره",
                        "weight": 1,
                        "parent_id": 1154
                    }
                ],
                "name": "خرمدره",
                "weight": 1,
                "parent_id": 1145
            },
            {
                "id": 1155,
                "countFile": 0,
                "county": [],
                "name": "خرمدره",
                "weight": 1,
                "parent_id": 1154
            },
            {
                "id": 1156,
                "countFile": 0,
                "county": [
                    {
                        "id": 1157,
                        "countFile": 0,
                        "name": "چورزق",
                        "weight": 1,
                        "parent_id": 1156
                    },
                    {
                        "id": 1158,
                        "countFile": 0,
                        "name": "آب بر",
                        "weight": 1,
                        "parent_id": 1156
                    }
                ],
                "name": "طارم",
                "weight": 1,
                "parent_id": 1145
            },
            {
                "id": 1157,
                "countFile": 0,
                "county": [],
                "name": "چورزق",
                "weight": 1,
                "parent_id": 1156
            },
            {
                "id": 1158,
                "countFile": 0,
                "county": [],
                "name": "آب بر",
                "weight": 1,
                "parent_id": 1156
            },
            {
                "id": 1159,
                "countFile": 0,
                "county": [
                    {
                        "id": 1160,
                        "countFile": 0,
                        "name": "ابهر",
                        "weight": 1,
                        "parent_id": 1159
                    },
                    {
                        "id": 1161,
                        "countFile": 0,
                        "name": "صایین قلعه",
                        "weight": 1,
                        "parent_id": 1159
                    },
                    {
                        "id": 1162,
                        "countFile": 0,
                        "name": "هیدج",
                        "weight": 1,
                        "parent_id": 1159
                    }
                ],
                "name": "ابهر",
                "weight": 1,
                "parent_id": 1145
            },
            {
                "id": 1160,
                "countFile": 0,
                "county": [],
                "name": "ابهر",
                "weight": 1,
                "parent_id": 1159
            },
            {
                "id": 1161,
                "countFile": 0,
                "county": [],
                "name": "صایین قلعه",
                "weight": 1,
                "parent_id": 1159
            },
            {
                "id": 1162,
                "countFile": 0,
                "county": [],
                "name": "هیدج",
                "weight": 1,
                "parent_id": 1159
            },
            {
                "id": 1163,
                "countFile": 0,
                "county": [
                    {
                        "id": 1164,
                        "countFile": 0,
                        "name": "گرماب",
                        "weight": 1,
                        "parent_id": 1163
                    },
                    {
                        "id": 1165,
                        "countFile": 0,
                        "name": "زرین رود",
                        "weight": 1,
                        "parent_id": 1163
                    },
                    {
                        "id": 1166,
                        "countFile": 0,
                        "name": "قیدار",
                        "weight": 1,
                        "parent_id": 1163
                    },
                    {
                        "id": 1167,
                        "countFile": 0,
                        "name": "سهرورد",
                        "weight": 1,
                        "parent_id": 1163
                    },
                    {
                        "id": 1168,
                        "countFile": 0,
                        "name": "کرسف",
                        "weight": 1,
                        "parent_id": 1163
                    },
                    {
                        "id": 1169,
                        "countFile": 0,
                        "name": "نوربهار",
                        "weight": 1,
                        "parent_id": 1163
                    },
                    {
                        "id": 1170,
                        "countFile": 0,
                        "name": "سجاس",
                        "weight": 1,
                        "parent_id": 1163
                    }
                ],
                "name": "خدابنده",
                "weight": 1,
                "parent_id": 1145
            },
            {
                "id": 1164,
                "countFile": 0,
                "county": [],
                "name": "گرماب",
                "weight": 1,
                "parent_id": 1163
            },
            {
                "id": 1165,
                "countFile": 0,
                "county": [],
                "name": "زرین رود",
                "weight": 1,
                "parent_id": 1163
            },
            {
                "id": 1166,
                "countFile": 0,
                "county": [],
                "name": "قیدار",
                "weight": 1,
                "parent_id": 1163
            },
            {
                "id": 1167,
                "countFile": 0,
                "county": [],
                "name": "سهرورد",
                "weight": 1,
                "parent_id": 1163
            },
            {
                "id": 1168,
                "countFile": 0,
                "county": [],
                "name": "کرسف",
                "weight": 1,
                "parent_id": 1163
            },
            {
                "id": 1169,
                "countFile": 0,
                "county": [],
                "name": "نوربهار",
                "weight": 1,
                "parent_id": 1163
            },
            {
                "id": 1170,
                "countFile": 0,
                "county": [],
                "name": "سجاس",
                "weight": 1,
                "parent_id": 1163
            },
            {
                "id": 1171,
                "countFile": 0,
                "county": [],
                "name": "نیک پی",
                "weight": 1,
                "parent_id": 1145
            },
            {
                "id": 1172,
                "countFile": 0,
                "county": [],
                "name": "ارمغانخانه",
                "weight": 1,
                "parent_id": 1145
            },
            {
                "id": 1173,
                "countFile": 0,
                "county": [
                    {
                        "id": 1174,
                        "countFile": 0,
                        "name": "سمنان",
                        "weight": 1,
                        "parent_id": 1173
                    },
                    {
                        "id": 1176,
                        "countFile": 0,
                        "name": "دامغان",
                        "weight": 1,
                        "parent_id": 1173
                    },
                    {
                        "id": 1180,
                        "countFile": 0,
                        "name": "شاهرود",
                        "weight": 1,
                        "parent_id": 1173
                    },
                    {
                        "id": 1186,
                        "countFile": 0,
                        "name": "گرمسار",
                        "weight": 1,
                        "parent_id": 1173
                    },
                    {
                        "id": 1188,
                        "countFile": 0,
                        "name": "مهدی شهر",
                        "weight": 1,
                        "parent_id": 1173
                    },
                    {
                        "id": 1191,
                        "countFile": 0,
                        "name": "آرادان",
                        "weight": 1,
                        "parent_id": 1173
                    },
                    {
                        "id": 1194,
                        "countFile": 0,
                        "name": "میامی",
                        "weight": 1,
                        "parent_id": 1173
                    },
                    {
                        "id": 1196,
                        "countFile": 0,
                        "name": "سرخه",
                        "weight": 1,
                        "parent_id": 1173
                    }
                ],
                "name": "سمنان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1174,
                "countFile": 0,
                "county": [
                    {
                        "id": 1175,
                        "countFile": 0,
                        "name": "سمنان",
                        "weight": 1,
                        "parent_id": 1174
                    }
                ],
                "name": "سمنان",
                "weight": 1,
                "parent_id": 1173
            },
            {
                "id": 1175,
                "countFile": 0,
                "county": [],
                "name": "سمنان",
                "weight": 1,
                "parent_id": 1174
            },
            {
                "id": 1176,
                "countFile": 0,
                "county": [
                    {
                        "id": 1177,
                        "countFile": 0,
                        "name": "امیریه",
                        "weight": 1,
                        "parent_id": 1176
                    },
                    {
                        "id": 1178,
                        "countFile": 0,
                        "name": "دیباج",
                        "weight": 1,
                        "parent_id": 1176
                    },
                    {
                        "id": 1179,
                        "countFile": 0,
                        "name": "کلاته",
                        "weight": 1,
                        "parent_id": 1176
                    }
                ],
                "name": "دامغان",
                "weight": 1,
                "parent_id": 1173
            },
            {
                "id": 1177,
                "countFile": 0,
                "county": [],
                "name": "امیریه",
                "weight": 1,
                "parent_id": 1176
            },
            {
                "id": 1178,
                "countFile": 0,
                "county": [],
                "name": "دیباج",
                "weight": 1,
                "parent_id": 1176
            },
            {
                "id": 1179,
                "countFile": 0,
                "county": [],
                "name": "کلاته",
                "weight": 1,
                "parent_id": 1176
            },
            {
                "id": 1180,
                "countFile": 0,
                "county": [
                    {
                        "id": 1181,
                        "countFile": 0,
                        "name": "بسطام",
                        "weight": 1,
                        "parent_id": 1180
                    },
                    {
                        "id": 1182,
                        "countFile": 0,
                        "name": "مجن",
                        "weight": 1,
                        "parent_id": 1180
                    },
                    {
                        "id": 1183,
                        "countFile": 0,
                        "name": "کلاته خیج",
                        "weight": 1,
                        "parent_id": 1180
                    },
                    {
                        "id": 1184,
                        "countFile": 0,
                        "name": "بیارجمند",
                        "weight": 1,
                        "parent_id": 1180
                    },
                    {
                        "id": 1185,
                        "countFile": 0,
                        "name": "رودیان",
                        "weight": 1,
                        "parent_id": 1180
                    }
                ],
                "name": "شاهرود",
                "weight": 1,
                "parent_id": 1173
            },
            {
                "id": 1181,
                "countFile": 0,
                "county": [],
                "name": "بسطام",
                "weight": 1,
                "parent_id": 1180
            },
            {
                "id": 1182,
                "countFile": 0,
                "county": [],
                "name": "مجن",
                "weight": 1,
                "parent_id": 1180
            },
            {
                "id": 1183,
                "countFile": 0,
                "county": [],
                "name": "کلاته خیج",
                "weight": 1,
                "parent_id": 1180
            },
            {
                "id": 1184,
                "countFile": 0,
                "county": [],
                "name": "بیارجمند",
                "weight": 1,
                "parent_id": 1180
            },
            {
                "id": 1185,
                "countFile": 0,
                "county": [],
                "name": "رودیان",
                "weight": 1,
                "parent_id": 1180
            },
            {
                "id": 1186,
                "countFile": 0,
                "county": [
                    {
                        "id": 1187,
                        "countFile": 0,
                        "name": "ایوانکی",
                        "weight": 1,
                        "parent_id": 1186
                    }
                ],
                "name": "گرمسار",
                "weight": 1,
                "parent_id": 1173
            },
            {
                "id": 1187,
                "countFile": 0,
                "county": [],
                "name": "ایوانکی",
                "weight": 1,
                "parent_id": 1186
            },
            {
                "id": 1188,
                "countFile": 0,
                "county": [
                    {
                        "id": 1189,
                        "countFile": 0,
                        "name": "شهمیرزاد",
                        "weight": 1,
                        "parent_id": 1188
                    },
                    {
                        "id": 1190,
                        "countFile": 0,
                        "name": "درجزین",
                        "weight": 1,
                        "parent_id": 1188
                    }
                ],
                "name": "مهدی شهر",
                "weight": 1,
                "parent_id": 1173
            },
            {
                "id": 1189,
                "countFile": 0,
                "county": [],
                "name": "شهمیرزاد",
                "weight": 1,
                "parent_id": 1188
            },
            {
                "id": 1190,
                "countFile": 0,
                "county": [],
                "name": "درجزین",
                "weight": 1,
                "parent_id": 1188
            },
            {
                "id": 1191,
                "countFile": 0,
                "county": [
                    {
                        "id": 1192,
                        "countFile": 0,
                        "name": "آرادان",
                        "weight": 1,
                        "parent_id": 1191
                    },
                    {
                        "id": 1193,
                        "countFile": 0,
                        "name": "کهن آباد",
                        "weight": 1,
                        "parent_id": 1191
                    }
                ],
                "name": "آرادان",
                "weight": 1,
                "parent_id": 1173
            },
            {
                "id": 1192,
                "countFile": 0,
                "county": [],
                "name": "آرادان",
                "weight": 1,
                "parent_id": 1191
            },
            {
                "id": 1193,
                "countFile": 0,
                "county": [],
                "name": "کهن آباد",
                "weight": 1,
                "parent_id": 1191
            },
            {
                "id": 1194,
                "countFile": 0,
                "county": [
                    {
                        "id": 1195,
                        "countFile": 0,
                        "name": "میامی",
                        "weight": 1,
                        "parent_id": 1194
                    }
                ],
                "name": "میامی",
                "weight": 1,
                "parent_id": 1173
            },
            {
                "id": 1195,
                "countFile": 0,
                "county": [],
                "name": "میامی",
                "weight": 1,
                "parent_id": 1194
            },
            {
                "id": 1196,
                "countFile": 0,
                "county": [
                    {
                        "id": 1197,
                        "countFile": 0,
                        "name": "سرخه",
                        "weight": 1,
                        "parent_id": 1196
                    }
                ],
                "name": "سرخه",
                "weight": 1,
                "parent_id": 1173
            },
            {
                "id": 1197,
                "countFile": 0,
                "county": [],
                "name": "سرخه",
                "weight": 1,
                "parent_id": 1196
            },
            {
                "id": 1198,
                "countFile": 0,
                "county": [
                    {
                        "id": 1199,
                        "countFile": 0,
                        "name": "اردکان",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1202,
                        "countFile": 0,
                        "name": "بافق",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1204,
                        "countFile": 0,
                        "name": "تفت",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1206,
                        "countFile": 0,
                        "name": "ابرکوه",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1209,
                        "countFile": 0,
                        "name": "مهریز",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1211,
                        "countFile": 0,
                        "name": "شاهدیه",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1212,
                        "countFile": 0,
                        "name": "حمیدیا",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1213,
                        "countFile": 0,
                        "name": "زارچ",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1214,
                        "countFile": 0,
                        "name": "میبد",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1219,
                        "countFile": 0,
                        "name": "اشکذر",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1221,
                        "countFile": 0,
                        "name": "بهاباد",
                        "weight": 1,
                        "parent_id": 1198
                    },
                    {
                        "id": 1223,
                        "countFile": 0,
                        "name": "خاتم",
                        "weight": 1,
                        "parent_id": 1198
                    }
                ],
                "name": "یزد",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1199,
                "countFile": 0,
                "county": [
                    {
                        "id": 1200,
                        "countFile": 0,
                        "name": "اردکان",
                        "weight": 1,
                        "parent_id": 1199
                    }
                ],
                "name": "اردکان",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1200,
                "countFile": 0,
                "county": [],
                "name": "اردکان",
                "weight": 1,
                "parent_id": 1199
            },
            {
                "id": 1201,
                "countFile": 0,
                "county": [],
                "name": "احمدآباد",
                "weight": 1,
                "parent_id": 460
            },
            {
                "id": 1202,
                "countFile": 0,
                "county": [
                    {
                        "id": 1203,
                        "countFile": 0,
                        "name": "بافق",
                        "weight": 1,
                        "parent_id": 1202
                    }
                ],
                "name": "بافق",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1203,
                "countFile": 0,
                "county": [],
                "name": "بافق",
                "weight": 1,
                "parent_id": 1202
            },
            {
                "id": 1204,
                "countFile": 0,
                "county": [
                    {
                        "id": 1205,
                        "countFile": 0,
                        "name": "تفت",
                        "weight": 1,
                        "parent_id": 1204
                    },
                    {
                        "id": 1208,
                        "countFile": 0,
                        "name": "نیر",
                        "weight": 1,
                        "parent_id": 1204
                    }
                ],
                "name": "تفت",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1205,
                "countFile": 0,
                "county": [],
                "name": "تفت",
                "weight": 1,
                "parent_id": 1204
            },
            {
                "id": 1206,
                "countFile": 0,
                "county": [
                    {
                        "id": 1207,
                        "countFile": 0,
                        "name": "ابرکوه",
                        "weight": 1,
                        "parent_id": 1206
                    },
                    {
                        "id": 1218,
                        "countFile": 0,
                        "name": "مهردشت",
                        "weight": 1,
                        "parent_id": 1206
                    }
                ],
                "name": "ابرکوه",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1207,
                "countFile": 0,
                "county": [],
                "name": "ابرکوه",
                "weight": 1,
                "parent_id": 1206
            },
            {
                "id": 1208,
                "countFile": 0,
                "county": [
                    {
                        "id": 1346,
                        "countFile": 0,
                        "name": "کوراییم",
                        "weight": 1,
                        "parent_id": 1208
                    }
                ],
                "name": "نیر",
                "weight": 1,
                "parent_id": 1204
            },
            {
                "id": 1209,
                "countFile": 0,
                "county": [
                    {
                        "id": 1210,
                        "countFile": 0,
                        "name": "مهریز",
                        "weight": 1,
                        "parent_id": 1209
                    }
                ],
                "name": "مهریز",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1210,
                "countFile": 0,
                "county": [],
                "name": "مهریز",
                "weight": 1,
                "parent_id": 1209
            },
            {
                "id": 1211,
                "countFile": 0,
                "county": [],
                "name": "شاهدیه",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1212,
                "countFile": 0,
                "county": [],
                "name": "حمیدیا",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1213,
                "countFile": 0,
                "county": [],
                "name": "زارچ",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1214,
                "countFile": 0,
                "county": [
                    {
                        "id": 1215,
                        "countFile": 0,
                        "name": "میبد",
                        "weight": 1,
                        "parent_id": 1214
                    },
                    {
                        "id": 1216,
                        "countFile": 0,
                        "name": "ندوشن",
                        "weight": 1,
                        "parent_id": 1214
                    },
                    {
                        "id": 1217,
                        "countFile": 0,
                        "name": "بفروییه",
                        "weight": 1,
                        "parent_id": 1214
                    }
                ],
                "name": "میبد",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1215,
                "countFile": 0,
                "county": [],
                "name": "میبد",
                "weight": 1,
                "parent_id": 1214
            },
            {
                "id": 1216,
                "countFile": 0,
                "county": [],
                "name": "ندوشن",
                "weight": 1,
                "parent_id": 1214
            },
            {
                "id": 1217,
                "countFile": 0,
                "county": [],
                "name": "بفروییه",
                "weight": 1,
                "parent_id": 1214
            },
            {
                "id": 1218,
                "countFile": 0,
                "county": [],
                "name": "مهردشت",
                "weight": 1,
                "parent_id": 1206
            },
            {
                "id": 1219,
                "countFile": 0,
                "county": [
                    {
                        "id": 1220,
                        "countFile": 0,
                        "name": "خضرآباد",
                        "weight": 1,
                        "parent_id": 1219
                    }
                ],
                "name": "اشکذر",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1220,
                "countFile": 0,
                "county": [],
                "name": "خضرآباد",
                "weight": 1,
                "parent_id": 1219
            },
            {
                "id": 1221,
                "countFile": 0,
                "county": [
                    {
                        "id": 1222,
                        "countFile": 0,
                        "name": "بهاباد",
                        "weight": 1,
                        "parent_id": 1221
                    }
                ],
                "name": "بهاباد",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1222,
                "countFile": 0,
                "county": [],
                "name": "بهاباد",
                "weight": 1,
                "parent_id": 1221
            },
            {
                "id": 1223,
                "countFile": 0,
                "county": [
                    {
                        "id": 1224,
                        "countFile": 0,
                        "name": "هرات",
                        "weight": 1,
                        "parent_id": 1223
                    },
                    {
                        "id": 1225,
                        "countFile": 0,
                        "name": "مروست",
                        "weight": 1,
                        "parent_id": 1223
                    }
                ],
                "name": "خاتم",
                "weight": 1,
                "parent_id": 1198
            },
            {
                "id": 1224,
                "countFile": 0,
                "county": [],
                "name": "هرات",
                "weight": 1,
                "parent_id": 1223
            },
            {
                "id": 1225,
                "countFile": 0,
                "county": [],
                "name": "مروست",
                "weight": 1,
                "parent_id": 1223
            },
            {
                "id": 1226,
                "countFile": 0,
                "county": [
                    {
                        "id": 1227,
                        "countFile": 0,
                        "name": "ابوموسی",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1229,
                        "countFile": 0,
                        "name": "بندرعباس",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1234,
                        "countFile": 0,
                        "name": "بندرلنگه",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1239,
                        "countFile": 0,
                        "name": "قشم",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1243,
                        "countFile": 0,
                        "name": "میناب",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1247,
                        "countFile": 0,
                        "name": "جاسک",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1250,
                        "countFile": 0,
                        "name": "رودان",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1254,
                        "countFile": 0,
                        "name": "حاجی اباد",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1257,
                        "countFile": 0,
                        "name": "بستک",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1259,
                        "countFile": 0,
                        "name": "خمیر",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1261,
                        "countFile": 0,
                        "name": "پارسیان",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1263,
                        "countFile": 0,
                        "name": "سیریک",
                        "weight": 1,
                        "parent_id": 1226
                    },
                    {
                        "id": 1266,
                        "countFile": 0,
                        "name": "بشاگرد",
                        "weight": 1,
                        "parent_id": 1226
                    }
                ],
                "name": "هرمزگان",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1227,
                "countFile": 0,
                "county": [
                    {
                        "id": 1228,
                        "countFile": 0,
                        "name": "ابوموسی",
                        "weight": 1,
                        "parent_id": 1227
                    }
                ],
                "name": "ابوموسی",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1228,
                "countFile": 0,
                "county": [],
                "name": "ابوموسی",
                "weight": 1,
                "parent_id": 1227
            },
            {
                "id": 1229,
                "countFile": 0,
                "county": [
                    {
                        "id": 1230,
                        "countFile": 0,
                        "name": "فین",
                        "weight": 1,
                        "parent_id": 1229
                    },
                    {
                        "id": 1231,
                        "countFile": 0,
                        "name": "تازیان پایین",
                        "weight": 1,
                        "parent_id": 1229
                    },
                    {
                        "id": 1232,
                        "countFile": 0,
                        "name": "تخت",
                        "weight": 1,
                        "parent_id": 1229
                    },
                    {
                        "id": 1233,
                        "countFile": 0,
                        "name": "قلعه قاضی",
                        "weight": 1,
                        "parent_id": 1229
                    }
                ],
                "name": "بندرعباس",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1230,
                "countFile": 0,
                "county": [],
                "name": "فین",
                "weight": 1,
                "parent_id": 1229
            },
            {
                "id": 1231,
                "countFile": 0,
                "county": [],
                "name": "تازیان پایین",
                "weight": 1,
                "parent_id": 1229
            },
            {
                "id": 1232,
                "countFile": 0,
                "county": [],
                "name": "تخت",
                "weight": 1,
                "parent_id": 1229
            },
            {
                "id": 1233,
                "countFile": 0,
                "county": [],
                "name": "قلعه قاضی",
                "weight": 1,
                "parent_id": 1229
            },
            {
                "id": 1234,
                "countFile": 0,
                "county": [
                    {
                        "id": 1235,
                        "countFile": 0,
                        "name": "چارک",
                        "weight": 1,
                        "parent_id": 1234
                    },
                    {
                        "id": 1236,
                        "countFile": 0,
                        "name": "کیش",
                        "weight": 1,
                        "parent_id": 1234
                    },
                    {
                        "id": 1237,
                        "countFile": 0,
                        "name": "کنگ",
                        "weight": 1,
                        "parent_id": 1234
                    },
                    {
                        "id": 1238,
                        "countFile": 0,
                        "name": "لمزان",
                        "weight": 1,
                        "parent_id": 1234
                    }
                ],
                "name": "بندرلنگه",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1235,
                "countFile": 0,
                "county": [],
                "name": "چارک",
                "weight": 1,
                "parent_id": 1234
            },
            {
                "id": 1236,
                "countFile": 0,
                "county": [],
                "name": "کیش",
                "weight": 1,
                "parent_id": 1234
            },
            {
                "id": 1237,
                "countFile": 0,
                "county": [],
                "name": "کنگ",
                "weight": 1,
                "parent_id": 1234
            },
            {
                "id": 1238,
                "countFile": 0,
                "county": [],
                "name": "لمزان",
                "weight": 1,
                "parent_id": 1234
            },
            {
                "id": 1239,
                "countFile": 0,
                "county": [
                    {
                        "id": 1240,
                        "countFile": 0,
                        "name": "سوزا",
                        "weight": 1,
                        "parent_id": 1239
                    },
                    {
                        "id": 1241,
                        "countFile": 0,
                        "name": "درگهان",
                        "weight": 1,
                        "parent_id": 1239
                    },
                    {
                        "id": 1242,
                        "countFile": 0,
                        "name": "هرمز",
                        "weight": 1,
                        "parent_id": 1239
                    }
                ],
                "name": "قشم",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1240,
                "countFile": 0,
                "county": [],
                "name": "سوزا",
                "weight": 1,
                "parent_id": 1239
            },
            {
                "id": 1241,
                "countFile": 0,
                "county": [],
                "name": "درگهان",
                "weight": 1,
                "parent_id": 1239
            },
            {
                "id": 1242,
                "countFile": 0,
                "county": [],
                "name": "هرمز",
                "weight": 1,
                "parent_id": 1239
            },
            {
                "id": 1243,
                "countFile": 0,
                "county": [
                    {
                        "id": 1244,
                        "countFile": 0,
                        "name": "سندرک",
                        "weight": 1,
                        "parent_id": 1243
                    },
                    {
                        "id": 1245,
                        "countFile": 0,
                        "name": "تیرور",
                        "weight": 1,
                        "parent_id": 1243
                    },
                    {
                        "id": 1246,
                        "countFile": 0,
                        "name": "هشتبندی",
                        "weight": 1,
                        "parent_id": 1243
                    }
                ],
                "name": "میناب",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1244,
                "countFile": 0,
                "county": [],
                "name": "سندرک",
                "weight": 1,
                "parent_id": 1243
            },
            {
                "id": 1245,
                "countFile": 0,
                "county": [],
                "name": "تیرور",
                "weight": 1,
                "parent_id": 1243
            },
            {
                "id": 1246,
                "countFile": 0,
                "county": [],
                "name": "هشتبندی",
                "weight": 1,
                "parent_id": 1243
            },
            {
                "id": 1247,
                "countFile": 0,
                "county": [
                    {
                        "id": 1248,
                        "countFile": 0,
                        "name": "بندرجاسک",
                        "weight": 1,
                        "parent_id": 1247
                    },
                    {
                        "id": 1249,
                        "countFile": 0,
                        "name": "لیردف",
                        "weight": 1,
                        "parent_id": 1247
                    }
                ],
                "name": "جاسک",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1248,
                "countFile": 0,
                "county": [],
                "name": "بندرجاسک",
                "weight": 1,
                "parent_id": 1247
            },
            {
                "id": 1249,
                "countFile": 0,
                "county": [],
                "name": "لیردف",
                "weight": 1,
                "parent_id": 1247
            },
            {
                "id": 1250,
                "countFile": 0,
                "county": [
                    {
                        "id": 1251,
                        "countFile": 0,
                        "name": "زیارتعلی",
                        "weight": 1,
                        "parent_id": 1250
                    },
                    {
                        "id": 1252,
                        "countFile": 0,
                        "name": "دهبارز",
                        "weight": 1,
                        "parent_id": 1250
                    },
                    {
                        "id": 1253,
                        "countFile": 0,
                        "name": "بیکاء",
                        "weight": 1,
                        "parent_id": 1250
                    }
                ],
                "name": "رودان",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1251,
                "countFile": 0,
                "county": [],
                "name": "زیارتعلی",
                "weight": 1,
                "parent_id": 1250
            },
            {
                "id": 1252,
                "countFile": 0,
                "county": [],
                "name": "دهبارز",
                "weight": 1,
                "parent_id": 1250
            },
            {
                "id": 1253,
                "countFile": 0,
                "county": [],
                "name": "بیکاء",
                "weight": 1,
                "parent_id": 1250
            },
            {
                "id": 1254,
                "countFile": 0,
                "county": [
                    {
                        "id": 1255,
                        "countFile": 0,
                        "name": "فارغان",
                        "weight": 1,
                        "parent_id": 1254
                    },
                    {
                        "id": 1256,
                        "countFile": 0,
                        "name": "سرگز",
                        "weight": 1,
                        "parent_id": 1254
                    }
                ],
                "name": "حاجی اباد",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1255,
                "countFile": 0,
                "county": [],
                "name": "فارغان",
                "weight": 1,
                "parent_id": 1254
            },
            {
                "id": 1256,
                "countFile": 0,
                "county": [],
                "name": "سرگز",
                "weight": 1,
                "parent_id": 1254
            },
            {
                "id": 1257,
                "countFile": 0,
                "county": [
                    {
                        "id": 1258,
                        "countFile": 0,
                        "name": "جناح",
                        "weight": 1,
                        "parent_id": 1257
                    }
                ],
                "name": "بستک",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1258,
                "countFile": 0,
                "county": [],
                "name": "جناح",
                "weight": 1,
                "parent_id": 1257
            },
            {
                "id": 1259,
                "countFile": 0,
                "county": [
                    {
                        "id": 1260,
                        "countFile": 0,
                        "name": "رویدر",
                        "weight": 1,
                        "parent_id": 1259
                    }
                ],
                "name": "خمیر",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1260,
                "countFile": 0,
                "county": [],
                "name": "رویدر",
                "weight": 1,
                "parent_id": 1259
            },
            {
                "id": 1261,
                "countFile": 0,
                "county": [
                    {
                        "id": 1262,
                        "countFile": 0,
                        "name": "کوشکنار",
                        "weight": 1,
                        "parent_id": 1261
                    }
                ],
                "name": "پارسیان",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1262,
                "countFile": 0,
                "county": [],
                "name": "کوشکنار",
                "weight": 1,
                "parent_id": 1261
            },
            {
                "id": 1263,
                "countFile": 0,
                "county": [
                    {
                        "id": 1264,
                        "countFile": 0,
                        "name": "کوهستک",
                        "weight": 1,
                        "parent_id": 1263
                    },
                    {
                        "id": 1265,
                        "countFile": 0,
                        "name": "گروک",
                        "weight": 1,
                        "parent_id": 1263
                    }
                ],
                "name": "سیریک",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1264,
                "countFile": 0,
                "county": [],
                "name": "کوهستک",
                "weight": 1,
                "parent_id": 1263
            },
            {
                "id": 1265,
                "countFile": 0,
                "county": [],
                "name": "گروک",
                "weight": 1,
                "parent_id": 1263
            },
            {
                "id": 1266,
                "countFile": 0,
                "county": [
                    {
                        "id": 1267,
                        "countFile": 0,
                        "name": "گوهران",
                        "weight": 1,
                        "parent_id": 1266
                    }
                ],
                "name": "بشاگرد",
                "weight": 1,
                "parent_id": 1226
            },
            {
                "id": 1267,
                "countFile": 0,
                "county": [],
                "name": "گوهران",
                "weight": 1,
                "parent_id": 1266
            },
            {
                "id": 1268,
                "countFile": 0,
                "county": [
                    {
                        "id": 1269,
                        "countFile": 0,
                        "name": "تهران",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1271,
                        "countFile": 0,
                        "name": "دماوند",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1277,
                        "countFile": 0,
                        "name": "ری",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1280,
                        "countFile": 0,
                        "name": "ملارد",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1282,
                        "countFile": 0,
                        "name": "پیشوا",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1287,
                        "countFile": 0,
                        "name": "شمیرانات",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1292,
                        "countFile": 0,
                        "name": "ورامین",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1294,
                        "countFile": 0,
                        "name": "شهریار",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1302,
                        "countFile": 0,
                        "name": "اسلامشهر",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1306,
                        "countFile": 0,
                        "name": "رباط کریم",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1310,
                        "countFile": 0,
                        "name": "پاکدشت",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1313,
                        "countFile": 0,
                        "name": "فیروزکوه",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1315,
                        "countFile": 0,
                        "name": "قدس",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1317,
                        "countFile": 0,
                        "name": "پردیس",
                        "weight": 1,
                        "parent_id": 1268
                    },
                    {
                        "id": 1319,
                        "countFile": 0,
                        "name": "قرچک",
                        "weight": 1,
                        "parent_id": 1268
                    }
                ],
                "name": "تهران",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1269,
                "countFile": 0,
                "county": [
                    {
                        "id": 1270,
                        "countFile": 0,
                        "name": "تهران",
                        "weight": 1,
                        "parent_id": 1269
                    }
                ],
                "name": "تهران",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1270,
                "countFile": 0,
                "county": [],
                "name": "تهران",
                "weight": 1,
                "parent_id": 1269
            },
            {
                "id": 1271,
                "countFile": 0,
                "county": [
                    {
                        "id": 1272,
                        "countFile": 0,
                        "name": "دماوند",
                        "weight": 1,
                        "parent_id": 1271
                    },
                    {
                        "id": 1273,
                        "countFile": 0,
                        "name": "کیلان",
                        "weight": 1,
                        "parent_id": 1271
                    },
                    {
                        "id": 1274,
                        "countFile": 0,
                        "name": "آبسرد",
                        "weight": 1,
                        "parent_id": 1271
                    },
                    {
                        "id": 1275,
                        "countFile": 0,
                        "name": "رودهن",
                        "weight": 1,
                        "parent_id": 1271
                    },
                    {
                        "id": 1276,
                        "countFile": 0,
                        "name": "آبعلی",
                        "weight": 1,
                        "parent_id": 1271
                    }
                ],
                "name": "دماوند",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1272,
                "countFile": 0,
                "county": [],
                "name": "دماوند",
                "weight": 1,
                "parent_id": 1271
            },
            {
                "id": 1273,
                "countFile": 0,
                "county": [],
                "name": "کیلان",
                "weight": 1,
                "parent_id": 1271
            },
            {
                "id": 1274,
                "countFile": 0,
                "county": [],
                "name": "آبسرد",
                "weight": 1,
                "parent_id": 1271
            },
            {
                "id": 1275,
                "countFile": 0,
                "county": [],
                "name": "رودهن",
                "weight": 1,
                "parent_id": 1271
            },
            {
                "id": 1276,
                "countFile": 0,
                "county": [],
                "name": "آبعلی",
                "weight": 1,
                "parent_id": 1271
            },
            {
                "id": 1277,
                "countFile": 0,
                "county": [
                    {
                        "id": 1278,
                        "countFile": 0,
                        "name": "باقرشهر",
                        "weight": 1,
                        "parent_id": 1277
                    },
                    {
                        "id": 1279,
                        "countFile": 0,
                        "name": "کهریزک",
                        "weight": 1,
                        "parent_id": 1277
                    }
                ],
                "name": "ری",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1278,
                "countFile": 0,
                "county": [],
                "name": "باقرشهر",
                "weight": 1,
                "parent_id": 1277
            },
            {
                "id": 1279,
                "countFile": 0,
                "county": [],
                "name": "کهریزک",
                "weight": 1,
                "parent_id": 1277
            },
            {
                "id": 1280,
                "countFile": 0,
                "county": [
                    {
                        "id": 1281,
                        "countFile": 0,
                        "name": "صفادشت",
                        "weight": 1,
                        "parent_id": 1280
                    }
                ],
                "name": "ملارد",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1281,
                "countFile": 0,
                "county": [],
                "name": "صفادشت",
                "weight": 1,
                "parent_id": 1280
            },
            {
                "id": 1282,
                "countFile": 0,
                "county": [
                    {
                        "id": 1283,
                        "countFile": 0,
                        "name": "پیشوا",
                        "weight": 1,
                        "parent_id": 1282
                    }
                ],
                "name": "پیشوا",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1283,
                "countFile": 0,
                "county": [],
                "name": "پیشوا",
                "weight": 1,
                "parent_id": 1282
            },
            {
                "id": 1284,
                "countFile": 0,
                "county": [
                    {
                        "id": 1383,
                        "countFile": 0,
                        "name": "گرگان",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1386,
                        "countFile": 0,
                        "name": "بندرگز",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1389,
                        "countFile": 0,
                        "name": "کردکوی",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1391,
                        "countFile": 0,
                        "name": "ترکمن",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1393,
                        "countFile": 0,
                        "name": "کلاله",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1395,
                        "countFile": 0,
                        "name": "علی آباد",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1402,
                        "countFile": 0,
                        "name": "گنبدکاووس",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1404,
                        "countFile": 0,
                        "name": "مینودشت",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1406,
                        "countFile": 0,
                        "name": "آق قلا",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1408,
                        "countFile": 0,
                        "name": "آزادشهر",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1411,
                        "countFile": 0,
                        "name": "رامیان",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1415,
                        "countFile": 0,
                        "name": "مراوه تپه",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1417,
                        "countFile": 0,
                        "name": "گمیشان",
                        "weight": 1,
                        "parent_id": 1284
                    },
                    {
                        "id": 1420,
                        "countFile": 0,
                        "name": "گالیکش",
                        "weight": 1,
                        "parent_id": 1284
                    }
                ],
                "name": "گلستان",
                "weight": 1,
                "parent_id": 755
            },
            {
                "id": 1285,
                "countFile": 0,
                "county": [],
                "name": "صالحیه",
                "weight": 1,
                "parent_id": 755
            },
            {
                "id": 1286,
                "countFile": 0,
                "county": [],
                "name": "نسیم شهر",
                "weight": 1,
                "parent_id": 755
            },
            {
                "id": 1287,
                "countFile": 0,
                "county": [
                    {
                        "id": 1288,
                        "countFile": 0,
                        "name": "فشم",
                        "weight": 1,
                        "parent_id": 1287
                    },
                    {
                        "id": 1289,
                        "countFile": 0,
                        "name": "تجریش",
                        "weight": 1,
                        "parent_id": 1287
                    },
                    {
                        "id": 1290,
                        "countFile": 0,
                        "name": "شمشک",
                        "weight": 1,
                        "parent_id": 1287
                    },
                    {
                        "id": 1291,
                        "countFile": 0,
                        "name": "لواسان",
                        "weight": 1,
                        "parent_id": 1287
                    }
                ],
                "name": "شمیرانات",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1288,
                "countFile": 0,
                "county": [],
                "name": "فشم",
                "weight": 1,
                "parent_id": 1287
            },
            {
                "id": 1289,
                "countFile": 0,
                "county": [],
                "name": "تجریش",
                "weight": 1,
                "parent_id": 1287
            },
            {
                "id": 1290,
                "countFile": 0,
                "county": [],
                "name": "شمشک",
                "weight": 1,
                "parent_id": 1287
            },
            {
                "id": 1291,
                "countFile": 0,
                "county": [],
                "name": "لواسان",
                "weight": 1,
                "parent_id": 1287
            },
            {
                "id": 1292,
                "countFile": 0,
                "county": [
                    {
                        "id": 1293,
                        "countFile": 0,
                        "name": "جوادآباد",
                        "weight": 1,
                        "parent_id": 1292
                    }
                ],
                "name": "ورامین",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1293,
                "countFile": 0,
                "county": [],
                "name": "جوادآباد",
                "weight": 1,
                "parent_id": 1292
            },
            {
                "id": 1294,
                "countFile": 0,
                "county": [
                    {
                        "id": 1295,
                        "countFile": 0,
                        "name": "شهریار",
                        "weight": 1,
                        "parent_id": 1294
                    },
                    {
                        "id": 1296,
                        "countFile": 0,
                        "name": "صباشهر",
                        "weight": 1,
                        "parent_id": 1294
                    },
                    {
                        "id": 1297,
                        "countFile": 0,
                        "name": "وحیدیه",
                        "weight": 1,
                        "parent_id": 1294
                    },
                    {
                        "id": 1298,
                        "countFile": 0,
                        "name": "شاهدشهر",
                        "weight": 1,
                        "parent_id": 1294
                    },
                    {
                        "id": 1299,
                        "countFile": 0,
                        "name": "فردوسیه",
                        "weight": 1,
                        "parent_id": 1294
                    },
                    {
                        "id": 1300,
                        "countFile": 0,
                        "name": "باغستان",
                        "weight": 1,
                        "parent_id": 1294
                    },
                    {
                        "id": 1301,
                        "countFile": 0,
                        "name": "اندیشه",
                        "weight": 1,
                        "parent_id": 1294
                    }
                ],
                "name": "شهریار",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1295,
                "countFile": 0,
                "county": [],
                "name": "شهریار",
                "weight": 1,
                "parent_id": 1294
            },
            {
                "id": 1296,
                "countFile": 0,
                "county": [],
                "name": "صباشهر",
                "weight": 1,
                "parent_id": 1294
            },
            {
                "id": 1297,
                "countFile": 0,
                "county": [],
                "name": "وحیدیه",
                "weight": 1,
                "parent_id": 1294
            },
            {
                "id": 1298,
                "countFile": 0,
                "county": [],
                "name": "شاهدشهر",
                "weight": 1,
                "parent_id": 1294
            },
            {
                "id": 1299,
                "countFile": 0,
                "county": [],
                "name": "فردوسیه",
                "weight": 1,
                "parent_id": 1294
            },
            {
                "id": 1300,
                "countFile": 0,
                "county": [],
                "name": "باغستان",
                "weight": 1,
                "parent_id": 1294
            },
            {
                "id": 1301,
                "countFile": 0,
                "county": [],
                "name": "اندیشه",
                "weight": 1,
                "parent_id": 1294
            },
            {
                "id": 1302,
                "countFile": 0,
                "county": [
                    {
                        "id": 1303,
                        "countFile": 0,
                        "name": "چهاردانگه",
                        "weight": 1,
                        "parent_id": 1302
                    },
                    {
                        "id": 1304,
                        "countFile": 0,
                        "name": "اسلام شهر",
                        "weight": 1,
                        "parent_id": 1302
                    },
                    {
                        "id": 1305,
                        "countFile": 0,
                        "name": "احمد آباد مستوفی",
                        "weight": 1,
                        "parent_id": 1302
                    }
                ],
                "name": "اسلامشهر",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1303,
                "countFile": 0,
                "county": [],
                "name": "چهاردانگه",
                "weight": 1,
                "parent_id": 1302
            },
            {
                "id": 1304,
                "countFile": 0,
                "county": [],
                "name": "اسلام شهر",
                "weight": 1,
                "parent_id": 1302
            },
            {
                "id": 1305,
                "countFile": 0,
                "county": [],
                "name": "احمد آباد مستوفی",
                "weight": 1,
                "parent_id": 1302
            },
            {
                "id": 1306,
                "countFile": 0,
                "county": [
                    {
                        "id": 1307,
                        "countFile": 0,
                        "name": "رباطکریم",
                        "weight": 1,
                        "parent_id": 1306
                    },
                    {
                        "id": 1308,
                        "countFile": 0,
                        "name": "نصیرشهر",
                        "weight": 1,
                        "parent_id": 1306
                    },
                    {
                        "id": 1309,
                        "countFile": 0,
                        "name": "پرند",
                        "weight": 1,
                        "parent_id": 1306
                    }
                ],
                "name": "رباط کریم",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1307,
                "countFile": 0,
                "county": [],
                "name": "رباطکریم",
                "weight": 1,
                "parent_id": 1306
            },
            {
                "id": 1308,
                "countFile": 0,
                "county": [],
                "name": "نصیرشهر",
                "weight": 1,
                "parent_id": 1306
            },
            {
                "id": 1309,
                "countFile": 0,
                "county": [],
                "name": "پرند",
                "weight": 1,
                "parent_id": 1306
            },
            {
                "id": 1310,
                "countFile": 0,
                "county": [
                    {
                        "id": 1311,
                        "countFile": 0,
                        "name": "شریف آباد",
                        "weight": 1,
                        "parent_id": 1310
                    },
                    {
                        "id": 1312,
                        "countFile": 0,
                        "name": "فرون اباد",
                        "weight": 1,
                        "parent_id": 1310
                    }
                ],
                "name": "پاکدشت",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1311,
                "countFile": 0,
                "county": [],
                "name": "شریف آباد",
                "weight": 1,
                "parent_id": 1310
            },
            {
                "id": 1312,
                "countFile": 0,
                "county": [],
                "name": "فرون اباد",
                "weight": 1,
                "parent_id": 1310
            },
            {
                "id": 1313,
                "countFile": 0,
                "county": [
                    {
                        "id": 1314,
                        "countFile": 0,
                        "name": "ارجمند",
                        "weight": 1,
                        "parent_id": 1313
                    }
                ],
                "name": "فیروزکوه",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1314,
                "countFile": 0,
                "county": [],
                "name": "ارجمند",
                "weight": 1,
                "parent_id": 1313
            },
            {
                "id": 1315,
                "countFile": 0,
                "county": [
                    {
                        "id": 1316,
                        "countFile": 0,
                        "name": "قدس",
                        "weight": 1,
                        "parent_id": 1315
                    }
                ],
                "name": "قدس",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1316,
                "countFile": 0,
                "county": [],
                "name": "قدس",
                "weight": 1,
                "parent_id": 1315
            },
            {
                "id": 1317,
                "countFile": 0,
                "county": [
                    {
                        "id": 1318,
                        "countFile": 0,
                        "name": "بومهن",
                        "weight": 1,
                        "parent_id": 1317
                    }
                ],
                "name": "پردیس",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1318,
                "countFile": 0,
                "county": [],
                "name": "بومهن",
                "weight": 1,
                "parent_id": 1317
            },
            {
                "id": 1319,
                "countFile": 0,
                "county": [
                    {
                        "id": 1320,
                        "countFile": 0,
                        "name": "قرچک",
                        "weight": 1,
                        "parent_id": 1319
                    }
                ],
                "name": "قرچک",
                "weight": 1,
                "parent_id": 1268
            },
            {
                "id": 1320,
                "countFile": 0,
                "county": [],
                "name": "قرچک",
                "weight": 1,
                "parent_id": 1319
            },
            {
                "id": 1321,
                "countFile": 0,
                "county": [
                    {
                        "id": 1322,
                        "countFile": 0,
                        "name": "بیله سوار",
                        "weight": 1,
                        "parent_id": 1321
                    },
                    {
                        "id": 1324,
                        "countFile": 0,
                        "name": "خلخال",
                        "weight": 1,
                        "parent_id": 1321
                    },
                    {
                        "id": 1327,
                        "countFile": 0,
                        "name": "هیر",
                        "weight": 1,
                        "parent_id": 1321
                    },
                    {
                        "id": 1328,
                        "countFile": 0,
                        "name": "مشگین شهر",
                        "weight": 1,
                        "parent_id": 1321
                    },
                    {
                        "id": 1334,
                        "countFile": 0,
                        "name": "گرمی",
                        "weight": 1,
                        "parent_id": 1321
                    },
                    {
                        "id": 1336,
                        "countFile": 0,
                        "name": "پارس آباد",
                        "weight": 1,
                        "parent_id": 1321
                    },
                    {
                        "id": 1341,
                        "countFile": 0,
                        "name": "کوثر",
                        "weight": 1,
                        "parent_id": 1321
                    },
                    {
                        "id": 1343,
                        "countFile": 0,
                        "name": "نمین",
                        "weight": 1,
                        "parent_id": 1321
                    },
                    {
                        "id": 1347,
                        "countFile": 0,
                        "name": "سرعین",
                        "weight": 1,
                        "parent_id": 1321
                    }
                ],
                "name": "اردبیل",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1322,
                "countFile": 0,
                "county": [
                    {
                        "id": 1323,
                        "countFile": 0,
                        "name": "بیله سوار",
                        "weight": 1,
                        "parent_id": 1322
                    },
                    {
                        "id": 1518,
                        "countFile": 0,
                        "name": "جعفرآباد",
                        "weight": 1,
                        "parent_id": 1322
                    }
                ],
                "name": "بیله سوار",
                "weight": 1,
                "parent_id": 1321
            },
            {
                "id": 1323,
                "countFile": 0,
                "county": [],
                "name": "بیله سوار",
                "weight": 1,
                "parent_id": 1322
            },
            {
                "id": 1324,
                "countFile": 0,
                "county": [
                    {
                        "id": 1325,
                        "countFile": 0,
                        "name": "هشتجین",
                        "weight": 1,
                        "parent_id": 1324
                    },
                    {
                        "id": 1326,
                        "countFile": 0,
                        "name": "کلور",
                        "weight": 1,
                        "parent_id": 1324
                    }
                ],
                "name": "خلخال",
                "weight": 1,
                "parent_id": 1321
            },
            {
                "id": 1325,
                "countFile": 0,
                "county": [],
                "name": "هشتجین",
                "weight": 1,
                "parent_id": 1324
            },
            {
                "id": 1326,
                "countFile": 0,
                "county": [],
                "name": "کلور",
                "weight": 1,
                "parent_id": 1324
            },
            {
                "id": 1327,
                "countFile": 0,
                "county": [],
                "name": "هیر",
                "weight": 1,
                "parent_id": 1321
            },
            {
                "id": 1328,
                "countFile": 0,
                "county": [
                    {
                        "id": 1329,
                        "countFile": 0,
                        "name": "رضی",
                        "weight": 1,
                        "parent_id": 1328
                    },
                    {
                        "id": 1330,
                        "countFile": 0,
                        "name": "لاهرود",
                        "weight": 1,
                        "parent_id": 1328
                    },
                    {
                        "id": 1331,
                        "countFile": 0,
                        "name": "فخراباد",
                        "weight": 1,
                        "parent_id": 1328
                    },
                    {
                        "id": 1332,
                        "countFile": 0,
                        "name": "مرادلو",
                        "weight": 1,
                        "parent_id": 1328
                    },
                    {
                        "id": 1333,
                        "countFile": 0,
                        "name": "قصابه",
                        "weight": 1,
                        "parent_id": 1328
                    }
                ],
                "name": "مشگین شهر",
                "weight": 1,
                "parent_id": 1321
            },
            {
                "id": 1329,
                "countFile": 0,
                "county": [],
                "name": "رضی",
                "weight": 1,
                "parent_id": 1328
            },
            {
                "id": 1330,
                "countFile": 0,
                "county": [],
                "name": "لاهرود",
                "weight": 1,
                "parent_id": 1328
            },
            {
                "id": 1331,
                "countFile": 0,
                "county": [],
                "name": "فخراباد",
                "weight": 1,
                "parent_id": 1328
            },
            {
                "id": 1332,
                "countFile": 0,
                "county": [],
                "name": "مرادلو",
                "weight": 1,
                "parent_id": 1328
            },
            {
                "id": 1333,
                "countFile": 0,
                "county": [],
                "name": "قصابه",
                "weight": 1,
                "parent_id": 1328
            },
            {
                "id": 1334,
                "countFile": 0,
                "county": [
                    {
                        "id": 1335,
                        "countFile": 0,
                        "name": "تازه کندانگوت",
                        "weight": 1,
                        "parent_id": 1334
                    }
                ],
                "name": "گرمی",
                "weight": 1,
                "parent_id": 1321
            },
            {
                "id": 1335,
                "countFile": 0,
                "county": [],
                "name": "تازه کندانگوت",
                "weight": 1,
                "parent_id": 1334
            },
            {
                "id": 1336,
                "countFile": 0,
                "county": [
                    {
                        "id": 1337,
                        "countFile": 0,
                        "name": "پارس آباد",
                        "weight": 1,
                        "parent_id": 1336
                    },
                    {
                        "id": 1338,
                        "countFile": 0,
                        "name": "اصلاندوز",
                        "weight": 1,
                        "parent_id": 1336
                    },
                    {
                        "id": 1339,
                        "countFile": 0,
                        "name": "تازه کند",
                        "weight": 1,
                        "parent_id": 1336
                    },
                    {
                        "id": 1340,
                        "countFile": 0,
                        "name": "اسلام اباد",
                        "weight": 1,
                        "parent_id": 1336
                    }
                ],
                "name": "پارس آباد",
                "weight": 1,
                "parent_id": 1321
            },
            {
                "id": 1337,
                "countFile": 0,
                "county": [],
                "name": "پارس آباد",
                "weight": 1,
                "parent_id": 1336
            },
            {
                "id": 1338,
                "countFile": 0,
                "county": [],
                "name": "اصلاندوز",
                "weight": 1,
                "parent_id": 1336
            },
            {
                "id": 1339,
                "countFile": 0,
                "county": [],
                "name": "تازه کند",
                "weight": 1,
                "parent_id": 1336
            },
            {
                "id": 1340,
                "countFile": 0,
                "county": [],
                "name": "اسلام اباد",
                "weight": 1,
                "parent_id": 1336
            },
            {
                "id": 1341,
                "countFile": 0,
                "county": [
                    {
                        "id": 1342,
                        "countFile": 0,
                        "name": "گیوی",
                        "weight": 1,
                        "parent_id": 1341
                    }
                ],
                "name": "کوثر",
                "weight": 1,
                "parent_id": 1321
            },
            {
                "id": 1342,
                "countFile": 0,
                "county": [],
                "name": "گیوی",
                "weight": 1,
                "parent_id": 1341
            },
            {
                "id": 1343,
                "countFile": 0,
                "county": [
                    {
                        "id": 1344,
                        "countFile": 0,
                        "name": "آبی بیگلو",
                        "weight": 1,
                        "parent_id": 1343
                    },
                    {
                        "id": 1345,
                        "countFile": 0,
                        "name": "عنبران",
                        "weight": 1,
                        "parent_id": 1343
                    }
                ],
                "name": "نمین",
                "weight": 1,
                "parent_id": 1321
            },
            {
                "id": 1344,
                "countFile": 0,
                "county": [],
                "name": "آبی بیگلو",
                "weight": 1,
                "parent_id": 1343
            },
            {
                "id": 1345,
                "countFile": 0,
                "county": [],
                "name": "عنبران",
                "weight": 1,
                "parent_id": 1343
            },
            {
                "id": 1346,
                "countFile": 0,
                "county": [],
                "name": "کوراییم",
                "weight": 1,
                "parent_id": 1208
            },
            {
                "id": 1347,
                "countFile": 0,
                "county": [
                    {
                        "id": 1348,
                        "countFile": 0,
                        "name": "سرعین",
                        "weight": 1,
                        "parent_id": 1347
                    }
                ],
                "name": "سرعین",
                "weight": 1,
                "parent_id": 1321
            },
            {
                "id": 1348,
                "countFile": 0,
                "county": [],
                "name": "سرعین",
                "weight": 1,
                "parent_id": 1347
            },
            {
                "id": 1349,
                "countFile": 0,
                "county": [
                    {
                        "id": 1350,
                        "countFile": 0,
                        "name": "قم",
                        "weight": 1,
                        "parent_id": 1349
                    },
                    {
                        "id": 1352,
                        "countFile": 0,
                        "name": "دستجرد",
                        "weight": 1,
                        "parent_id": 1349
                    },
                    {
                        "id": 1353,
                        "countFile": 0,
                        "name": "قنوات",
                        "weight": 1,
                        "parent_id": 1349
                    },
                    {
                        "id": 1354,
                        "countFile": 0,
                        "name": "کهک",
                        "weight": 1,
                        "parent_id": 1349
                    },
                    {
                        "id": 1355,
                        "countFile": 0,
                        "name": "سلفچگان",
                        "weight": 1,
                        "parent_id": 1349
                    },
                    {
                        "id": 1519,
                        "countFile": 0,
                        "name": "جعفریه",
                        "weight": 1,
                        "parent_id": 1349
                    }
                ],
                "name": "قم",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1350,
                "countFile": 0,
                "county": [
                    {
                        "id": 1351,
                        "countFile": 0,
                        "name": "قم",
                        "weight": 1,
                        "parent_id": 1350
                    }
                ],
                "name": "قم",
                "weight": 1,
                "parent_id": 1349
            },
            {
                "id": 1351,
                "countFile": 0,
                "county": [],
                "name": "قم",
                "weight": 1,
                "parent_id": 1350
            },
            {
                "id": 1352,
                "countFile": 0,
                "county": [],
                "name": "دستجرد",
                "weight": 1,
                "parent_id": 1349
            },
            {
                "id": 1353,
                "countFile": 0,
                "county": [],
                "name": "قنوات",
                "weight": 1,
                "parent_id": 1349
            },
            {
                "id": 1354,
                "countFile": 0,
                "county": [],
                "name": "کهک",
                "weight": 1,
                "parent_id": 1349
            },
            {
                "id": 1355,
                "countFile": 0,
                "county": [],
                "name": "سلفچگان",
                "weight": 1,
                "parent_id": 1349
            },
            {
                "id": 1356,
                "countFile": 0,
                "county": [
                    {
                        "id": 1357,
                        "countFile": 0,
                        "name": "بویین زهرا",
                        "weight": 1,
                        "parent_id": 1356
                    },
                    {
                        "id": 1362,
                        "countFile": 0,
                        "name": "تاکستان",
                        "weight": 1,
                        "parent_id": 1356
                    },
                    {
                        "id": 1367,
                        "countFile": 0,
                        "name": "معلم کلایه",
                        "weight": 1,
                        "parent_id": 1356
                    },
                    {
                        "id": 1368,
                        "countFile": 0,
                        "name": "رازمیان",
                        "weight": 1,
                        "parent_id": 1356
                    },
                    {
                        "id": 1369,
                        "countFile": 0,
                        "name": "سیردان",
                        "weight": 1,
                        "parent_id": 1356
                    },
                    {
                        "id": 1370,
                        "countFile": 0,
                        "name": "اقبالیه",
                        "weight": 1,
                        "parent_id": 1356
                    },
                    {
                        "id": 1371,
                        "countFile": 0,
                        "name": "محمودآبادنمونه",
                        "weight": 1,
                        "parent_id": 1356
                    },
                    {
                        "id": 1372,
                        "countFile": 0,
                        "name": "کوهین",
                        "weight": 1,
                        "parent_id": 1356
                    },
                    {
                        "id": 1373,
                        "countFile": 0,
                        "name": "آبیک",
                        "weight": 1,
                        "parent_id": 1356
                    },
                    {
                        "id": 1375,
                        "countFile": 0,
                        "name": "البرز",
                        "weight": 1,
                        "parent_id": 1356
                    },
                    {
                        "id": 1380,
                        "countFile": 0,
                        "name": "آوج",
                        "weight": 1,
                        "parent_id": 1356
                    }
                ],
                "name": "قزوین",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1357,
                "countFile": 0,
                "county": [
                    {
                        "id": 1358,
                        "countFile": 0,
                        "name": "بویین زهرا",
                        "weight": 1,
                        "parent_id": 1357
                    },
                    {
                        "id": 1359,
                        "countFile": 0,
                        "name": "شال",
                        "weight": 1,
                        "parent_id": 1357
                    },
                    {
                        "id": 1360,
                        "countFile": 0,
                        "name": "سگزآباد",
                        "weight": 1,
                        "parent_id": 1357
                    },
                    {
                        "id": 1361,
                        "countFile": 0,
                        "name": "ارداق",
                        "weight": 1,
                        "parent_id": 1357
                    },
                    {
                        "id": 1520,
                        "countFile": 0,
                        "name": "دانسفهان",
                        "weight": 1,
                        "parent_id": 1357
                    }
                ],
                "name": "بویین زهرا",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1358,
                "countFile": 0,
                "county": [],
                "name": "بویین زهرا",
                "weight": 1,
                "parent_id": 1357
            },
            {
                "id": 1359,
                "countFile": 0,
                "county": [],
                "name": "شال",
                "weight": 1,
                "parent_id": 1357
            },
            {
                "id": 1360,
                "countFile": 0,
                "county": [],
                "name": "سگزآباد",
                "weight": 1,
                "parent_id": 1357
            },
            {
                "id": 1361,
                "countFile": 0,
                "county": [],
                "name": "ارداق",
                "weight": 1,
                "parent_id": 1357
            },
            {
                "id": 1362,
                "countFile": 0,
                "county": [
                    {
                        "id": 1363,
                        "countFile": 0,
                        "name": "اسفرورین",
                        "weight": 1,
                        "parent_id": 1362
                    },
                    {
                        "id": 1364,
                        "countFile": 0,
                        "name": "خرمدشت",
                        "weight": 1,
                        "parent_id": 1362
                    },
                    {
                        "id": 1365,
                        "countFile": 0,
                        "name": "نرجه",
                        "weight": 1,
                        "parent_id": 1362
                    },
                    {
                        "id": 1366,
                        "countFile": 0,
                        "name": "ضیاڈآباد",
                        "weight": 1,
                        "parent_id": 1362
                    }
                ],
                "name": "تاکستان",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1363,
                "countFile": 0,
                "county": [],
                "name": "اسفرورین",
                "weight": 1,
                "parent_id": 1362
            },
            {
                "id": 1364,
                "countFile": 0,
                "county": [],
                "name": "خرمدشت",
                "weight": 1,
                "parent_id": 1362
            },
            {
                "id": 1365,
                "countFile": 0,
                "county": [],
                "name": "نرجه",
                "weight": 1,
                "parent_id": 1362
            },
            {
                "id": 1366,
                "countFile": 0,
                "county": [],
                "name": "ضیاڈآباد",
                "weight": 1,
                "parent_id": 1362
            },
            {
                "id": 1367,
                "countFile": 0,
                "county": [],
                "name": "معلم کلایه",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1368,
                "countFile": 0,
                "county": [],
                "name": "رازمیان",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1369,
                "countFile": 0,
                "county": [],
                "name": "سیردان",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1370,
                "countFile": 0,
                "county": [],
                "name": "اقبالیه",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1371,
                "countFile": 0,
                "county": [],
                "name": "محمودآبادنمونه",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1372,
                "countFile": 0,
                "county": [],
                "name": "کوهین",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1373,
                "countFile": 0,
                "county": [
                    {
                        "id": 1374,
                        "countFile": 0,
                        "name": "خاکعلی",
                        "weight": 1,
                        "parent_id": 1373
                    }
                ],
                "name": "آبیک",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1374,
                "countFile": 0,
                "county": [],
                "name": "خاکعلی",
                "weight": 1,
                "parent_id": 1373
            },
            {
                "id": 1375,
                "countFile": 0,
                "county": [
                    {
                        "id": 1376,
                        "countFile": 0,
                        "name": "شریفیه",
                        "weight": 1,
                        "parent_id": 1375
                    },
                    {
                        "id": 1377,
                        "countFile": 0,
                        "name": "محمدیه",
                        "weight": 1,
                        "parent_id": 1375
                    },
                    {
                        "id": 1378,
                        "countFile": 0,
                        "name": "بیدستان",
                        "weight": 1,
                        "parent_id": 1375
                    },
                    {
                        "id": 1379,
                        "countFile": 0,
                        "name": "الوند",
                        "weight": 1,
                        "parent_id": 1375
                    },
                    {
                        "id": 1482,
                        "countFile": 0,
                        "name": "کرج",
                        "weight": 1,
                        "parent_id": 1375
                    },
                    {
                        "id": 1488,
                        "countFile": 0,
                        "name": "ساوجبلاغ",
                        "weight": 1,
                        "parent_id": 1375
                    },
                    {
                        "id": 1494,
                        "countFile": 0,
                        "name": "نظرآباد",
                        "weight": 1,
                        "parent_id": 1375
                    },
                    {
                        "id": 1497,
                        "countFile": 0,
                        "name": "طالقان",
                        "weight": 1,
                        "parent_id": 1375
                    },
                    {
                        "id": 1499,
                        "countFile": 0,
                        "name": "اشتهارد",
                        "weight": 1,
                        "parent_id": 1375
                    },
                    {
                        "id": 1501,
                        "countFile": 0,
                        "name": "فردیس",
                        "weight": 1,
                        "parent_id": 1375
                    }
                ],
                "name": "البرز",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1376,
                "countFile": 0,
                "county": [],
                "name": "شریفیه",
                "weight": 1,
                "parent_id": 1375
            },
            {
                "id": 1377,
                "countFile": 0,
                "county": [],
                "name": "محمدیه",
                "weight": 1,
                "parent_id": 1375
            },
            {
                "id": 1378,
                "countFile": 0,
                "county": [],
                "name": "بیدستان",
                "weight": 1,
                "parent_id": 1375
            },
            {
                "id": 1379,
                "countFile": 0,
                "county": [],
                "name": "الوند",
                "weight": 1,
                "parent_id": 1375
            },
            {
                "id": 1380,
                "countFile": 0,
                "county": [
                    {
                        "id": 1381,
                        "countFile": 0,
                        "name": "آوج",
                        "weight": 1,
                        "parent_id": 1380
                    },
                    {
                        "id": 1382,
                        "countFile": 0,
                        "name": "آبگرم",
                        "weight": 1,
                        "parent_id": 1380
                    }
                ],
                "name": "آوج",
                "weight": 1,
                "parent_id": 1356
            },
            {
                "id": 1381,
                "countFile": 0,
                "county": [],
                "name": "آوج",
                "weight": 1,
                "parent_id": 1380
            },
            {
                "id": 1382,
                "countFile": 0,
                "county": [],
                "name": "آبگرم",
                "weight": 1,
                "parent_id": 1380
            },
            {
                "id": 1383,
                "countFile": 0,
                "county": [
                    {
                        "id": 1384,
                        "countFile": 0,
                        "name": "گرگان",
                        "weight": 1,
                        "parent_id": 1383
                    },
                    {
                        "id": 1385,
                        "countFile": 0,
                        "name": "جلین",
                        "weight": 1,
                        "parent_id": 1383
                    },
                    {
                        "id": 1400,
                        "countFile": 0,
                        "name": "سرخنکلاته",
                        "weight": 1,
                        "parent_id": 1383
                    },
                    {
                        "id": 1401,
                        "countFile": 0,
                        "name": "قرق",
                        "weight": 1,
                        "parent_id": 1383
                    }
                ],
                "name": "گرگان",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1384,
                "countFile": 0,
                "county": [],
                "name": "گرگان",
                "weight": 1,
                "parent_id": 1383
            },
            {
                "id": 1385,
                "countFile": 0,
                "county": [],
                "name": "جلین",
                "weight": 1,
                "parent_id": 1383
            },
            {
                "id": 1386,
                "countFile": 0,
                "county": [
                    {
                        "id": 1387,
                        "countFile": 0,
                        "name": "بندرگز",
                        "weight": 1,
                        "parent_id": 1386
                    },
                    {
                        "id": 1388,
                        "countFile": 0,
                        "name": "نوکنده",
                        "weight": 1,
                        "parent_id": 1386
                    }
                ],
                "name": "بندرگز",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1387,
                "countFile": 0,
                "county": [],
                "name": "بندرگز",
                "weight": 1,
                "parent_id": 1386
            },
            {
                "id": 1388,
                "countFile": 0,
                "county": [],
                "name": "نوکنده",
                "weight": 1,
                "parent_id": 1386
            },
            {
                "id": 1389,
                "countFile": 0,
                "county": [
                    {
                        "id": 1390,
                        "countFile": 0,
                        "name": "کردکوی",
                        "weight": 1,
                        "parent_id": 1389
                    }
                ],
                "name": "کردکوی",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1390,
                "countFile": 0,
                "county": [],
                "name": "کردکوی",
                "weight": 1,
                "parent_id": 1389
            },
            {
                "id": 1391,
                "countFile": 0,
                "county": [
                    {
                        "id": 1392,
                        "countFile": 0,
                        "name": "بندرترکمن",
                        "weight": 1,
                        "parent_id": 1391
                    }
                ],
                "name": "ترکمن",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1392,
                "countFile": 0,
                "county": [],
                "name": "بندرترکمن",
                "weight": 1,
                "parent_id": 1391
            },
            {
                "id": 1393,
                "countFile": 0,
                "county": [
                    {
                        "id": 1394,
                        "countFile": 0,
                        "name": "فراغی",
                        "weight": 1,
                        "parent_id": 1393
                    }
                ],
                "name": "کلاله",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1394,
                "countFile": 0,
                "county": [],
                "name": "فراغی",
                "weight": 1,
                "parent_id": 1393
            },
            {
                "id": 1395,
                "countFile": 0,
                "county": [
                    {
                        "id": 1396,
                        "countFile": 0,
                        "name": "علی اباد",
                        "weight": 1,
                        "parent_id": 1395
                    },
                    {
                        "id": 1397,
                        "countFile": 0,
                        "name": "مزرعه",
                        "weight": 1,
                        "parent_id": 1395
                    },
                    {
                        "id": 1398,
                        "countFile": 0,
                        "name": "سنگدوین",
                        "weight": 1,
                        "parent_id": 1395
                    },
                    {
                        "id": 1399,
                        "countFile": 0,
                        "name": "فاضل آباد",
                        "weight": 1,
                        "parent_id": 1395
                    }
                ],
                "name": "علی آباد",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1396,
                "countFile": 0,
                "county": [],
                "name": "علی اباد",
                "weight": 1,
                "parent_id": 1395
            },
            {
                "id": 1397,
                "countFile": 0,
                "county": [],
                "name": "مزرعه",
                "weight": 1,
                "parent_id": 1395
            },
            {
                "id": 1398,
                "countFile": 0,
                "county": [],
                "name": "سنگدوین",
                "weight": 1,
                "parent_id": 1395
            },
            {
                "id": 1399,
                "countFile": 0,
                "county": [],
                "name": "فاضل آباد",
                "weight": 1,
                "parent_id": 1395
            },
            {
                "id": 1400,
                "countFile": 0,
                "county": [],
                "name": "سرخنکلاته",
                "weight": 1,
                "parent_id": 1383
            },
            {
                "id": 1401,
                "countFile": 0,
                "county": [],
                "name": "قرق",
                "weight": 1,
                "parent_id": 1383
            },
            {
                "id": 1402,
                "countFile": 0,
                "county": [
                    {
                        "id": 1403,
                        "countFile": 0,
                        "name": "اینچه برون",
                        "weight": 1,
                        "parent_id": 1402
                    }
                ],
                "name": "گنبدکاووس",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1403,
                "countFile": 0,
                "county": [],
                "name": "اینچه برون",
                "weight": 1,
                "parent_id": 1402
            },
            {
                "id": 1404,
                "countFile": 0,
                "county": [
                    {
                        "id": 1405,
                        "countFile": 0,
                        "name": "مینودشت",
                        "weight": 1,
                        "parent_id": 1404
                    }
                ],
                "name": "مینودشت",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1405,
                "countFile": 0,
                "county": [],
                "name": "مینودشت",
                "weight": 1,
                "parent_id": 1404
            },
            {
                "id": 1406,
                "countFile": 0,
                "county": [
                    {
                        "id": 1407,
                        "countFile": 0,
                        "name": "انبارآلوم",
                        "weight": 1,
                        "parent_id": 1406
                    }
                ],
                "name": "آق قلا",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1407,
                "countFile": 0,
                "county": [],
                "name": "انبارآلوم",
                "weight": 1,
                "parent_id": 1406
            },
            {
                "id": 1408,
                "countFile": 0,
                "county": [
                    {
                        "id": 1409,
                        "countFile": 0,
                        "name": "نوده خاندوز",
                        "weight": 1,
                        "parent_id": 1408
                    },
                    {
                        "id": 1410,
                        "countFile": 0,
                        "name": "نگین شهر",
                        "weight": 1,
                        "parent_id": 1408
                    }
                ],
                "name": "آزادشهر",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1409,
                "countFile": 0,
                "county": [],
                "name": "نوده خاندوز",
                "weight": 1,
                "parent_id": 1408
            },
            {
                "id": 1410,
                "countFile": 0,
                "county": [],
                "name": "نگین شهر",
                "weight": 1,
                "parent_id": 1408
            },
            {
                "id": 1411,
                "countFile": 0,
                "county": [
                    {
                        "id": 1412,
                        "countFile": 0,
                        "name": "خان ببین",
                        "weight": 1,
                        "parent_id": 1411
                    },
                    {
                        "id": 1413,
                        "countFile": 0,
                        "name": "دلند",
                        "weight": 1,
                        "parent_id": 1411
                    },
                    {
                        "id": 1414,
                        "countFile": 0,
                        "name": "تاتارعلیا",
                        "weight": 1,
                        "parent_id": 1411
                    }
                ],
                "name": "رامیان",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1412,
                "countFile": 0,
                "county": [],
                "name": "خان ببین",
                "weight": 1,
                "parent_id": 1411
            },
            {
                "id": 1413,
                "countFile": 0,
                "county": [],
                "name": "دلند",
                "weight": 1,
                "parent_id": 1411
            },
            {
                "id": 1414,
                "countFile": 0,
                "county": [],
                "name": "تاتارعلیا",
                "weight": 1,
                "parent_id": 1411
            },
            {
                "id": 1415,
                "countFile": 0,
                "county": [
                    {
                        "id": 1416,
                        "countFile": 0,
                        "name": "مراوه",
                        "weight": 1,
                        "parent_id": 1415
                    }
                ],
                "name": "مراوه تپه",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1416,
                "countFile": 0,
                "county": [],
                "name": "مراوه",
                "weight": 1,
                "parent_id": 1415
            },
            {
                "id": 1417,
                "countFile": 0,
                "county": [
                    {
                        "id": 1418,
                        "countFile": 0,
                        "name": "گمیش تپه",
                        "weight": 1,
                        "parent_id": 1417
                    },
                    {
                        "id": 1419,
                        "countFile": 0,
                        "name": "سیمین شهر",
                        "weight": 1,
                        "parent_id": 1417
                    }
                ],
                "name": "گمیشان",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1418,
                "countFile": 0,
                "county": [],
                "name": "گمیش تپه",
                "weight": 1,
                "parent_id": 1417
            },
            {
                "id": 1419,
                "countFile": 0,
                "county": [],
                "name": "سیمین شهر",
                "weight": 1,
                "parent_id": 1417
            },
            {
                "id": 1420,
                "countFile": 0,
                "county": [
                    {
                        "id": 1421,
                        "countFile": 0,
                        "name": "گالیکش",
                        "weight": 1,
                        "parent_id": 1420
                    }
                ],
                "name": "گالیکش",
                "weight": 1,
                "parent_id": 1284
            },
            {
                "id": 1421,
                "countFile": 0,
                "county": [],
                "name": "گالیکش",
                "weight": 1,
                "parent_id": 1420
            },
            {
                "id": 1422,
                "countFile": 0,
                "county": [
                    {
                        "id": 1423,
                        "countFile": 0,
                        "name": "اسفراین",
                        "weight": 1,
                        "parent_id": 1422
                    },
                    {
                        "id": 1425,
                        "countFile": 0,
                        "name": "بجنورد",
                        "weight": 1,
                        "parent_id": 1422
                    },
                    {
                        "id": 1429,
                        "countFile": 0,
                        "name": "جاجرم",
                        "weight": 1,
                        "parent_id": 1422
                    },
                    {
                        "id": 1432,
                        "countFile": 0,
                        "name": "راز و جرگلان",
                        "weight": 1,
                        "parent_id": 1422
                    },
                    {
                        "id": 1434,
                        "countFile": 0,
                        "name": "شیروان",
                        "weight": 1,
                        "parent_id": 1422
                    },
                    {
                        "id": 1438,
                        "countFile": 0,
                        "name": "فاروج",
                        "weight": 1,
                        "parent_id": 1422
                    },
                    {
                        "id": 1440,
                        "countFile": 0,
                        "name": "مانه وسملقان",
                        "weight": 1,
                        "parent_id": 1422
                    },
                    {
                        "id": 1445,
                        "countFile": 0,
                        "name": "گرمه",
                        "weight": 1,
                        "parent_id": 1422
                    }
                ],
                "name": "خراسان شمالی",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1423,
                "countFile": 0,
                "county": [
                    {
                        "id": 1424,
                        "countFile": 0,
                        "name": "اسفراین",
                        "weight": 1,
                        "parent_id": 1423
                    }
                ],
                "name": "اسفراین",
                "weight": 1,
                "parent_id": 1422
            },
            {
                "id": 1424,
                "countFile": 0,
                "county": [],
                "name": "اسفراین",
                "weight": 1,
                "parent_id": 1423
            },
            {
                "id": 1425,
                "countFile": 0,
                "county": [
                    {
                        "id": 1426,
                        "countFile": 0,
                        "name": "بجنورد",
                        "weight": 1,
                        "parent_id": 1425
                    },
                    {
                        "id": 1427,
                        "countFile": 0,
                        "name": "چناران شهر",
                        "weight": 1,
                        "parent_id": 1425
                    },
                    {
                        "id": 1428,
                        "countFile": 0,
                        "name": "حصارگرمخان",
                        "weight": 1,
                        "parent_id": 1425
                    }
                ],
                "name": "بجنورد",
                "weight": 1,
                "parent_id": 1422
            },
            {
                "id": 1426,
                "countFile": 0,
                "county": [],
                "name": "بجنورد",
                "weight": 1,
                "parent_id": 1425
            },
            {
                "id": 1427,
                "countFile": 0,
                "county": [],
                "name": "چناران شهر",
                "weight": 1,
                "parent_id": 1425
            },
            {
                "id": 1428,
                "countFile": 0,
                "county": [],
                "name": "حصارگرمخان",
                "weight": 1,
                "parent_id": 1425
            },
            {
                "id": 1429,
                "countFile": 0,
                "county": [
                    {
                        "id": 1430,
                        "countFile": 0,
                        "name": "سنخواست",
                        "weight": 1,
                        "parent_id": 1429
                    },
                    {
                        "id": 1431,
                        "countFile": 0,
                        "name": "شوقان",
                        "weight": 1,
                        "parent_id": 1429
                    }
                ],
                "name": "جاجرم",
                "weight": 1,
                "parent_id": 1422
            },
            {
                "id": 1430,
                "countFile": 0,
                "county": [],
                "name": "سنخواست",
                "weight": 1,
                "parent_id": 1429
            },
            {
                "id": 1431,
                "countFile": 0,
                "county": [],
                "name": "شوقان",
                "weight": 1,
                "parent_id": 1429
            },
            {
                "id": 1432,
                "countFile": 0,
                "county": [
                    {
                        "id": 1433,
                        "countFile": 0,
                        "name": "راز",
                        "weight": 1,
                        "parent_id": 1432
                    }
                ],
                "name": "راز و جرگلان",
                "weight": 1,
                "parent_id": 1422
            },
            {
                "id": 1433,
                "countFile": 0,
                "county": [],
                "name": "راز",
                "weight": 1,
                "parent_id": 1432
            },
            {
                "id": 1434,
                "countFile": 0,
                "county": [
                    {
                        "id": 1435,
                        "countFile": 0,
                        "name": "لوجلی",
                        "weight": 1,
                        "parent_id": 1434
                    },
                    {
                        "id": 1436,
                        "countFile": 0,
                        "name": "زیارت",
                        "weight": 1,
                        "parent_id": 1434
                    },
                    {
                        "id": 1437,
                        "countFile": 0,
                        "name": "قوشخانه",
                        "weight": 1,
                        "parent_id": 1434
                    }
                ],
                "name": "شیروان",
                "weight": 1,
                "parent_id": 1422
            },
            {
                "id": 1435,
                "countFile": 0,
                "county": [],
                "name": "لوجلی",
                "weight": 1,
                "parent_id": 1434
            },
            {
                "id": 1436,
                "countFile": 0,
                "county": [],
                "name": "زیارت",
                "weight": 1,
                "parent_id": 1434
            },
            {
                "id": 1437,
                "countFile": 0,
                "county": [],
                "name": "قوشخانه",
                "weight": 1,
                "parent_id": 1434
            },
            {
                "id": 1438,
                "countFile": 0,
                "county": [
                    {
                        "id": 1439,
                        "countFile": 0,
                        "name": "تیتکانلو",
                        "weight": 1,
                        "parent_id": 1438
                    }
                ],
                "name": "فاروج",
                "weight": 1,
                "parent_id": 1422
            },
            {
                "id": 1439,
                "countFile": 0,
                "county": [],
                "name": "تیتکانلو",
                "weight": 1,
                "parent_id": 1438
            },
            {
                "id": 1440,
                "countFile": 0,
                "county": [
                    {
                        "id": 1441,
                        "countFile": 0,
                        "name": "قاضی",
                        "weight": 1,
                        "parent_id": 1440
                    },
                    {
                        "id": 1442,
                        "countFile": 0,
                        "name": "آوا",
                        "weight": 1,
                        "parent_id": 1440
                    },
                    {
                        "id": 1443,
                        "countFile": 0,
                        "name": "پیش قلعه",
                        "weight": 1,
                        "parent_id": 1440
                    },
                    {
                        "id": 1444,
                        "countFile": 0,
                        "name": "آشخانه",
                        "weight": 1,
                        "parent_id": 1440
                    }
                ],
                "name": "مانه وسملقان",
                "weight": 1,
                "parent_id": 1422
            },
            {
                "id": 1441,
                "countFile": 0,
                "county": [],
                "name": "قاضی",
                "weight": 1,
                "parent_id": 1440
            },
            {
                "id": 1442,
                "countFile": 0,
                "county": [],
                "name": "آوا",
                "weight": 1,
                "parent_id": 1440
            },
            {
                "id": 1443,
                "countFile": 0,
                "county": [],
                "name": "پیش قلعه",
                "weight": 1,
                "parent_id": 1440
            },
            {
                "id": 1444,
                "countFile": 0,
                "county": [],
                "name": "آشخانه",
                "weight": 1,
                "parent_id": 1440
            },
            {
                "id": 1445,
                "countFile": 0,
                "county": [
                    {
                        "id": 1446,
                        "countFile": 0,
                        "name": "ایور",
                        "weight": 1,
                        "parent_id": 1445
                    },
                    {
                        "id": 1447,
                        "countFile": 0,
                        "name": "درق",
                        "weight": 1,
                        "parent_id": 1445
                    }
                ],
                "name": "گرمه",
                "weight": 1,
                "parent_id": 1422
            },
            {
                "id": 1446,
                "countFile": 0,
                "county": [],
                "name": "ایور",
                "weight": 1,
                "parent_id": 1445
            },
            {
                "id": 1447,
                "countFile": 0,
                "county": [],
                "name": "درق",
                "weight": 1,
                "parent_id": 1445
            },
            {
                "id": 1448,
                "countFile": 0,
                "county": [
                    {
                        "id": 1449,
                        "countFile": 0,
                        "name": "فردوس",
                        "weight": 1,
                        "parent_id": 1448
                    },
                    {
                        "id": 1451,
                        "countFile": 0,
                        "name": "بیرجند",
                        "weight": 1,
                        "parent_id": 1448
                    },
                    {
                        "id": 1453,
                        "countFile": 0,
                        "name": "درمیان",
                        "weight": 1,
                        "parent_id": 1448
                    },
                    {
                        "id": 1458,
                        "countFile": 0,
                        "name": "سربیشه",
                        "weight": 1,
                        "parent_id": 1448
                    },
                    {
                        "id": 1461,
                        "countFile": 0,
                        "name": "قاینات",
                        "weight": 1,
                        "parent_id": 1448
                    },
                    {
                        "id": 1467,
                        "countFile": 0,
                        "name": "نهبندان",
                        "weight": 1,
                        "parent_id": 1448
                    },
                    {
                        "id": 1469,
                        "countFile": 0,
                        "name": "بشرویه",
                        "weight": 1,
                        "parent_id": 1448
                    },
                    {
                        "id": 1471,
                        "countFile": 0,
                        "name": "سرایان",
                        "weight": 1,
                        "parent_id": 1448
                    },
                    {
                        "id": 1475,
                        "countFile": 0,
                        "name": "زیرکوه",
                        "weight": 1,
                        "parent_id": 1448
                    },
                    {
                        "id": 1478,
                        "countFile": 0,
                        "name": "خوسف",
                        "weight": 1,
                        "parent_id": 1448
                    },
                    {
                        "id": 1480,
                        "countFile": 0,
                        "name": "طبس",
                        "weight": 1,
                        "parent_id": 1448
                    }
                ],
                "name": "خراسان جنوبی",
                "weight": 1,
                "parent_id": null
            },
            {
                "id": 1449,
                "countFile": 0,
                "county": [
                    {
                        "id": 1450,
                        "countFile": 0,
                        "name": "فردوس",
                        "weight": 1,
                        "parent_id": 1449
                    },
                    {
                        "id": 1521,
                        "countFile": 0,
                        "name": "اسلامیه",
                        "weight": 1,
                        "parent_id": 1449
                    }
                ],
                "name": "فردوس",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1450,
                "countFile": 0,
                "county": [],
                "name": "فردوس",
                "weight": 1,
                "parent_id": 1449
            },
            {
                "id": 1451,
                "countFile": 0,
                "county": [
                    {
                        "id": 1452,
                        "countFile": 0,
                        "name": "بیرجند",
                        "weight": 1,
                        "parent_id": 1451
                    }
                ],
                "name": "بیرجند",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1452,
                "countFile": 0,
                "county": [],
                "name": "بیرجند",
                "weight": 1,
                "parent_id": 1451
            },
            {
                "id": 1453,
                "countFile": 0,
                "county": [
                    {
                        "id": 1454,
                        "countFile": 0,
                        "name": "قهستان",
                        "weight": 1,
                        "parent_id": 1453
                    },
                    {
                        "id": 1455,
                        "countFile": 0,
                        "name": "اسدیه",
                        "weight": 1,
                        "parent_id": 1453
                    },
                    {
                        "id": 1456,
                        "countFile": 0,
                        "name": "طبس مسینا",
                        "weight": 1,
                        "parent_id": 1453
                    },
                    {
                        "id": 1457,
                        "countFile": 0,
                        "name": "گزیک",
                        "weight": 1,
                        "parent_id": 1453
                    }
                ],
                "name": "درمیان",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1454,
                "countFile": 0,
                "county": [],
                "name": "قهستان",
                "weight": 1,
                "parent_id": 1453
            },
            {
                "id": 1455,
                "countFile": 0,
                "county": [],
                "name": "اسدیه",
                "weight": 1,
                "parent_id": 1453
            },
            {
                "id": 1456,
                "countFile": 0,
                "county": [],
                "name": "طبس مسینا",
                "weight": 1,
                "parent_id": 1453
            },
            {
                "id": 1457,
                "countFile": 0,
                "county": [],
                "name": "گزیک",
                "weight": 1,
                "parent_id": 1453
            },
            {
                "id": 1458,
                "countFile": 0,
                "county": [
                    {
                        "id": 1459,
                        "countFile": 0,
                        "name": "سربیشه",
                        "weight": 1,
                        "parent_id": 1458
                    },
                    {
                        "id": 1460,
                        "countFile": 0,
                        "name": "مود",
                        "weight": 1,
                        "parent_id": 1458
                    }
                ],
                "name": "سربیشه",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1459,
                "countFile": 0,
                "county": [],
                "name": "سربیشه",
                "weight": 1,
                "parent_id": 1458
            },
            {
                "id": 1460,
                "countFile": 0,
                "county": [],
                "name": "مود",
                "weight": 1,
                "parent_id": 1458
            },
            {
                "id": 1461,
                "countFile": 0,
                "county": [
                    {
                        "id": 1462,
                        "countFile": 0,
                        "name": "قاین",
                        "weight": 1,
                        "parent_id": 1461
                    },
                    {
                        "id": 1463,
                        "countFile": 0,
                        "name": "اسفدن",
                        "weight": 1,
                        "parent_id": 1461
                    },
                    {
                        "id": 1464,
                        "countFile": 0,
                        "name": "خضری دشت بیاض",
                        "weight": 1,
                        "parent_id": 1461
                    },
                    {
                        "id": 1465,
                        "countFile": 0,
                        "name": "نیمبلوک",
                        "weight": 1,
                        "parent_id": 1461
                    },
                    {
                        "id": 1466,
                        "countFile": 0,
                        "name": "آرین شهر",
                        "weight": 1,
                        "parent_id": 1461
                    }
                ],
                "name": "قاینات",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1462,
                "countFile": 0,
                "county": [],
                "name": "قاین",
                "weight": 1,
                "parent_id": 1461
            },
            {
                "id": 1463,
                "countFile": 0,
                "county": [],
                "name": "اسفدن",
                "weight": 1,
                "parent_id": 1461
            },
            {
                "id": 1464,
                "countFile": 0,
                "county": [],
                "name": "خضری دشت بیاض",
                "weight": 1,
                "parent_id": 1461
            },
            {
                "id": 1465,
                "countFile": 0,
                "county": [],
                "name": "نیمبلوک",
                "weight": 1,
                "parent_id": 1461
            },
            {
                "id": 1466,
                "countFile": 0,
                "county": [],
                "name": "آرین شهر",
                "weight": 1,
                "parent_id": 1461
            },
            {
                "id": 1467,
                "countFile": 0,
                "county": [
                    {
                        "id": 1468,
                        "countFile": 0,
                        "name": "شوسف",
                        "weight": 1,
                        "parent_id": 1467
                    }
                ],
                "name": "نهبندان",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1468,
                "countFile": 0,
                "county": [],
                "name": "شوسف",
                "weight": 1,
                "parent_id": 1467
            },
            {
                "id": 1469,
                "countFile": 0,
                "county": [
                    {
                        "id": 1470,
                        "countFile": 0,
                        "name": "بشرویه",
                        "weight": 1,
                        "parent_id": 1469
                    },
                    {
                        "id": 1477,
                        "countFile": 0,
                        "name": "ارسک",
                        "weight": 1,
                        "parent_id": 1469
                    }
                ],
                "name": "بشرویه",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1470,
                "countFile": 0,
                "county": [],
                "name": "بشرویه",
                "weight": 1,
                "parent_id": 1469
            },
            {
                "id": 1471,
                "countFile": 0,
                "county": [
                    {
                        "id": 1472,
                        "countFile": 0,
                        "name": "سرایان",
                        "weight": 1,
                        "parent_id": 1471
                    },
                    {
                        "id": 1473,
                        "countFile": 0,
                        "name": "آیسک",
                        "weight": 1,
                        "parent_id": 1471
                    },
                    {
                        "id": 1474,
                        "countFile": 0,
                        "name": "سه قلعه",
                        "weight": 1,
                        "parent_id": 1471
                    }
                ],
                "name": "سرایان",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1472,
                "countFile": 0,
                "county": [],
                "name": "سرایان",
                "weight": 1,
                "parent_id": 1471
            },
            {
                "id": 1473,
                "countFile": 0,
                "county": [],
                "name": "آیسک",
                "weight": 1,
                "parent_id": 1471
            },
            {
                "id": 1474,
                "countFile": 0,
                "county": [],
                "name": "سه قلعه",
                "weight": 1,
                "parent_id": 1471
            },
            {
                "id": 1475,
                "countFile": 0,
                "county": [
                    {
                        "id": 1476,
                        "countFile": 0,
                        "name": "زهان",
                        "weight": 1,
                        "parent_id": 1475
                    }
                ],
                "name": "زیرکوه",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1476,
                "countFile": 0,
                "county": [],
                "name": "زهان",
                "weight": 1,
                "parent_id": 1475
            },
            {
                "id": 1477,
                "countFile": 0,
                "county": [],
                "name": "ارسک",
                "weight": 1,
                "parent_id": 1469
            },
            {
                "id": 1478,
                "countFile": 0,
                "county": [
                    {
                        "id": 1479,
                        "countFile": 0,
                        "name": "محمدشهر",
                        "weight": 1,
                        "parent_id": 1478
                    }
                ],
                "name": "خوسف",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1479,
                "countFile": 0,
                "county": [],
                "name": "محمدشهر",
                "weight": 1,
                "parent_id": 1478
            },
            {
                "id": 1480,
                "countFile": 0,
                "county": [
                    {
                        "id": 1481,
                        "countFile": 0,
                        "name": "دیهوک",
                        "weight": 1,
                        "parent_id": 1480
                    }
                ],
                "name": "طبس",
                "weight": 1,
                "parent_id": 1448
            },
            {
                "id": 1481,
                "countFile": 0,
                "county": [],
                "name": "دیهوک",
                "weight": 1,
                "parent_id": 1480
            },
            {
                "id": 1482,
                "countFile": 0,
                "county": [
                    {
                        "id": 1483,
                        "countFile": 0,
                        "name": "کرج",
                        "weight": 1,
                        "parent_id": 1482
                    },
                    {
                        "id": 1484,
                        "countFile": 0,
                        "name": "ماهدشت",
                        "weight": 1,
                        "parent_id": 1482
                    },
                    {
                        "id": 1485,
                        "countFile": 0,
                        "name": "کمال شهر",
                        "weight": 1,
                        "parent_id": 1482
                    },
                    {
                        "id": 1486,
                        "countFile": 0,
                        "name": "گرمدره",
                        "weight": 1,
                        "parent_id": 1482
                    },
                    {
                        "id": 1487,
                        "countFile": 0,
                        "name": "آسارا",
                        "weight": 1,
                        "parent_id": 1482
                    }
                ],
                "name": "کرج",
                "weight": 1,
                "parent_id": 1375
            },
            {
                "id": 1483,
                "countFile": 0,
                "county": [],
                "name": "کرج",
                "weight": 1,
                "parent_id": 1482
            },
            {
                "id": 1484,
                "countFile": 0,
                "county": [],
                "name": "ماهدشت",
                "weight": 1,
                "parent_id": 1482
            },
            {
                "id": 1485,
                "countFile": 0,
                "county": [],
                "name": "کمال شهر",
                "weight": 1,
                "parent_id": 1482
            },
            {
                "id": 1486,
                "countFile": 0,
                "county": [],
                "name": "گرمدره",
                "weight": 1,
                "parent_id": 1482
            },
            {
                "id": 1487,
                "countFile": 0,
                "county": [],
                "name": "آسارا",
                "weight": 1,
                "parent_id": 1482
            },
            {
                "id": 1488,
                "countFile": 0,
                "county": [
                    {
                        "id": 1489,
                        "countFile": 0,
                        "name": "هشتگرد",
                        "weight": 1,
                        "parent_id": 1488
                    },
                    {
                        "id": 1490,
                        "countFile": 0,
                        "name": "گلسار",
                        "weight": 1,
                        "parent_id": 1488
                    },
                    {
                        "id": 1491,
                        "countFile": 0,
                        "name": "شهرجدیدهشتگرد",
                        "weight": 1,
                        "parent_id": 1488
                    },
                    {
                        "id": 1492,
                        "countFile": 0,
                        "name": "کوهسار",
                        "weight": 1,
                        "parent_id": 1488
                    },
                    {
                        "id": 1493,
                        "countFile": 0,
                        "name": "چهارباغ",
                        "weight": 1,
                        "parent_id": 1488
                    }
                ],
                "name": "ساوجبلاغ",
                "weight": 1,
                "parent_id": 1375
            },
            {
                "id": 1489,
                "countFile": 0,
                "county": [],
                "name": "هشتگرد",
                "weight": 1,
                "parent_id": 1488
            },
            {
                "id": 1490,
                "countFile": 0,
                "county": [],
                "name": "گلسار",
                "weight": 1,
                "parent_id": 1488
            },
            {
                "id": 1491,
                "countFile": 0,
                "county": [],
                "name": "شهرجدیدهشتگرد",
                "weight": 1,
                "parent_id": 1488
            },
            {
                "id": 1492,
                "countFile": 0,
                "county": [],
                "name": "کوهسار",
                "weight": 1,
                "parent_id": 1488
            },
            {
                "id": 1493,
                "countFile": 0,
                "county": [],
                "name": "چهارباغ",
                "weight": 1,
                "parent_id": 1488
            },
            {
                "id": 1494,
                "countFile": 0,
                "county": [
                    {
                        "id": 1495,
                        "countFile": 0,
                        "name": "نظرآباد",
                        "weight": 1,
                        "parent_id": 1494
                    },
                    {
                        "id": 1496,
                        "countFile": 0,
                        "name": "تنکمان",
                        "weight": 1,
                        "parent_id": 1494
                    }
                ],
                "name": "نظرآباد",
                "weight": 1,
                "parent_id": 1375
            },
            {
                "id": 1495,
                "countFile": 0,
                "county": [],
                "name": "نظرآباد",
                "weight": 1,
                "parent_id": 1494
            },
            {
                "id": 1496,
                "countFile": 0,
                "county": [],
                "name": "تنکمان",
                "weight": 1,
                "parent_id": 1494
            },
            {
                "id": 1497,
                "countFile": 0,
                "county": [
                    {
                        "id": 1498,
                        "countFile": 0,
                        "name": "طالقان",
                        "weight": 1,
                        "parent_id": 1497
                    }
                ],
                "name": "طالقان",
                "weight": 1,
                "parent_id": 1375
            },
            {
                "id": 1498,
                "countFile": 0,
                "county": [],
                "name": "طالقان",
                "weight": 1,
                "parent_id": 1497
            },
            {
                "id": 1499,
                "countFile": 0,
                "county": [
                    {
                        "id": 1500,
                        "countFile": 0,
                        "name": "اشتهارد",
                        "weight": 1,
                        "parent_id": 1499
                    }
                ],
                "name": "اشتهارد",
                "weight": 1,
                "parent_id": 1375
            },
            {
                "id": 1500,
                "countFile": 0,
                "county": [],
                "name": "اشتهارد",
                "weight": 1,
                "parent_id": 1499
            },
            {
                "id": 1501,
                "countFile": 0,
                "county": [
                    {
                        "id": 1502,
                        "countFile": 0,
                        "name": "فردیس",
                        "weight": 1,
                        "parent_id": 1501
                    },
                    {
                        "id": 1503,
                        "countFile": 0,
                        "name": "مشکین دشت",
                        "weight": 1,
                        "parent_id": 1501
                    }
                ],
                "name": "فردیس",
                "weight": 1,
                "parent_id": 1375
            },
            {
                "id": 1502,
                "countFile": 0,
                "county": [],
                "name": "فردیس",
                "weight": 1,
                "parent_id": 1501
            },
            {
                "id": 1503,
                "countFile": 0,
                "county": [],
                "name": "مشکین دشت",
                "weight": 1,
                "parent_id": 1501
            },
            {
                "id": 1504,
                "countFile": 0,
                "county": [],
                "name": "رینه",
                "weight": 1,
                "parent_id": 98
            },
            {
                "id": 1505,
                "countFile": 0,
                "county": [],
                "name": "قوشچی",
                "weight": 1,
                "parent_id": 249
            },
            {
                "id": 1506,
                "countFile": 0,
                "county": [],
                "name": "هلشی",
                "weight": 1,
                "parent_id": 301
            },
            {
                "id": 1507,
                "countFile": 0,
                "county": [],
                "name": "بروات",
                "weight": 1,
                "parent_id": 558
            },
            {
                "id": 1508,
                "countFile": 0,
                "county": [],
                "name": "چاپشلو",
                "weight": 1,
                "parent_id": 645
            },
            {
                "id": 1509,
                "countFile": 0,
                "county": [],
                "name": "آرمرده",
                "weight": 1,
                "parent_id": 905
            },
            {
                "id": 1510,
                "countFile": 0,
                "county": [],
                "name": "فرسفج",
                "weight": 1,
                "parent_id": 939
            },
            {
                "id": 1511,
                "countFile": 0,
                "county": [],
                "name": "گندمان",
                "weight": 1,
                "parent_id": 971
            },
            {
                "id": 1512,
                "countFile": 0,
                "county": [],
                "name": "شول آباد",
                "weight": 1,
                "parent_id": 1017
            },
            {
                "id": 1513,
                "countFile": 0,
                "county": [],
                "name": "چوار",
                "weight": 1,
                "parent_id": 1044
            },
            {
                "id": 1514,
                "countFile": 0,
                "county": [],
                "name": "مارگون",
                "weight": 1,
                "parent_id": 1074
            },
            {
                "id": 1515,
                "countFile": 0,
                "county": [],
                "name": "خارک",
                "weight": 1,
                "parent_id": 1099
            },
            {
                "id": 1516,
                "countFile": 0,
                "county": [],
                "name": "دندی",
                "weight": 1,
                "parent_id": 1146
            },
            {
                "id": 1517,
                "countFile": 0,
                "county": [],
                "name": "عقدا",
                "weight": 1,
                "parent_id": 460
            },
            {
                "id": 1518,
                "countFile": 0,
                "county": [],
                "name": "جعفرآباد",
                "weight": 1,
                "parent_id": 1322
            },
            {
                "id": 1519,
                "countFile": 0,
                "county": [],
                "name": "جعفریه",
                "weight": 1,
                "parent_id": 1349
            },
            {
                "id": 1520,
                "countFile": 0,
                "county": [],
                "name": "دانسفهان",
                "weight": 1,
                "parent_id": 1357
            },
            {
                "id": 1521,
                "countFile": 0,
                "county": [],
                "name": "اسلامیه",
                "weight": 1,
                "parent_id": 1449
            }
        ],
        "code": 200,
        "status": 1
    }
    ]
    // const cities = {
    //    "استان مرکزی":["اراک","تفرش","آشتیان"],
    //    "استان مازندران": ["بابلسر" , "ساری" , "نوشهر"]
    // }
    const organs = ["مسجد" , "اداره" , "شرکت"]
    const [selectedState , setSelectedState]=useState("")
    const [requestingOrgan , setReguestingOrgan]=useState("")
    const handleStateChange = (event)=>{
        setSelectedState(event.target.value)
    }
    
    const handleReguestingOrganChange = (event)=>{
      setReguestingOrgan(event.target.value)
    }
   
      
    
  return (
    <div className="w-full h-max bg-neutral-100 pt-8 sm:pt-16 pb-32">
      <div className="container h-max mx-auto sm:px-2 ">
        <div className="bg-white pb-8 px-4 sm:px-6 h-max flex flex-col gap-y-6 sm:border border-stone-300  sm:rounded-xl leading-7 sm:leading-8 text-sm sm:text-base">

        <div className='w-full  h-max flex flex-col items-center gap-y-3 pt-12'>
        <div className='flex items-center'>
            
        <svg xmlns="http://www.w3.org/2000/svg" className='xs:w-5 w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
            <h1 className='xs:text-sm text-xl font-bold'>دریافت اطلاعات مجموعه درخواست کننده</h1>
        </div>
        <p className="xs:text-[12px]">لطفا پیش از ارسال ایمیل یا تماس تلفنی، ابتدا <span className='text-cyan-600'>قوانین</span> را مشاهده کنید.</p>
        </div>

        <div className="w-full  h-max  flex flex-col gap-y-6 sm:gap-y-0  sm:flex-row justify-center gap-x-3 items-center flex-wrap" >
            
            <div className="w-full sm:w-[280px] md:w-[340px] lg:w-[470px] xl:w-[600px] 2xl:w-[720px] h-max  flex flex-col ">
            <div className="w-full  h-14 border-2 border-stone-300 rounded-xl flex items-center justify-between cursor-pointer px-2">
            <select value={selectedState} onChange={handleStateChange} className="w-full outline-none bg-inherit cursor-pointer h-full" name="" id="">
                <option value="">انتخاب استان</option>
                {states.map(state=>{console.log(state);}
                    // <option key={state.id} value={state.name}>{state.name}</option>
                    )}
            </select>
            </div>

           
            </div>
            <div className="w-full sm:w-[280px] md:w-[340px] lg:w-[470px] xl:w-[600px] 2xl:w-[720px] h-max  flex flex-col ">
            <div className="w-full  h-14 border-2 border-stone-300 rounded-xl flex items-center justify-between cursor-pointer px-2">
            <select className="w-full outline-none bg-inherit cursor-pointer h-full" name="" id="">
                <option value="">انتخاب شهر</option>
                {selectedState && cities.map(city=>
                    <option key={city.id} value={city.name}>{city.name}</option>
                    )}
            </select>
            </div>
            </div>
        </div>

        <div className="w-full h-max  flex flex-col gap-y-6 sm:gap-y-0   sm:flex-row justify-center gap-x-3 items-center flex-wrap" >
            
            <div className="w-full sm:w-[280px] md:w-[340px] lg:w-[470px] xl:w-[600px] 2xl:w-[720px] h-max  flex flex-col ">
            <div className="w-full  h-14 border-2 border-stone-300 rounded-xl flex items-center justify-between cursor-pointer px-2">
            <select value={requestingOrgan} onChange={handleReguestingOrganChange} className="w-full outline-none bg-inherit cursor-pointer h-full" name="" id="">
                <option value="">مجموعه درخواست کننده</option>
                {organs.map(organ =>
                    <option key={organ} value={organ}>{organ}</option>
                    )}
            </select>
            </div>
            </div>
            <div className="w-full sm:w-[280px] md:w-[340px] h-[65px] mb-2  lg:w-[470px] xl:w-[600px] 2xl:w-[720px] flex items-center justify-center ">
          <InputForTeacherInvitation content="سایت مجموعه"/>
            
            </div>

        </div>

        <div className="w-full h-max  flex flex-col gap-y-6   sm:flex-row justify-start gap-x-3 items-center flex-wrap" >
            
            
           

<InputForTeacherInvitation content="ایمیل مجموعه"/>
<InputForTeacherInvitation content="نشانی صفحه مجازی"/>
<InputForTeacherInvitation content="شماره تماس مجموعه"/>
            

           
        </div>
        </div>

        <div className="w-full bg-white sm:border-stone-300 sm:border sm:rounded-xl px-2 xs:my-10 my-20 text-sm sm:text-base">
        <div className=" w-full   h-max py-10 border-stone-300  flex flex-col">
        <div className="w-full h-max flex flex-col items-center gap-y-3 mb-8">
        <div className="flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
          <h2 className="xs:text-sm  text-xl font-bold">مشخصات محل برگزاری</h2>
        </div>
        <p className="xs:text-[10px]">لطفا پیش از ارسال ایمیل و تماس تلفنی،ابتدا <span className="text-cyan-600">قوانین</span> را مشاهده کنید.</p>
        </div>
        
        <div className="w-full  h-max  flex flex-col gap-y-6 sm:gap-y-0  sm:flex-row justify-center gap-x-3 items-center flex-wrap" >
          <InputForTeacherInvitation content="نام مکان برگزاری همایش"/>
          <SelectOptionForTeacherInvite items={states} content="ظرفیت دقیق محل پیشنهادی"/>
          <textarea onBlur={()=>setFoucosTextArea(false)} onFocus={()=>setFoucosTextArea(true)} className={` ${foucosTextArea ? 'border-cyan-600' : 'border-stone-300' } resize-none w-full sm:w-[570px] md:w-[692px] lg:w-[950px] xl:w-[1212px] h-52 border-2 rounded-xl mt-4 pr-4 outline-0 pt-2" `} ></textarea>
        </div>

        </div>
        </div>

        <div className="w-full bg-white sm:border-stone-300 sm:border sm:rounded-xl px-2 xs:my-10 my-20 text-sm sm:text-base">
        <div className=" w-full   h-max py-10 border-stone-300  flex flex-col">
        <div className="w-full h-max flex flex-col items-center gap-y-3 mb-8">
        <div className="flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
          <h2 className="xs:text-sm text-xl font-bold">مشخصات نماینده / رابط جلسه</h2>
        </div>
        <p className="xs:text-[12px]">لطفا پیش از ارسال ایمیل و تماس تلفنی،ابتدا <span className="text-cyan-600">قوانین</span> را مشاهده کنید.</p>
        </div>
        
        <div className="w-full px-4  flex  h-max">
        <div className="w-full  h-max  flex flex-col  gap-y-3  sm:flex-row justify-start gap-x-3 items-center flex-wrap" >
          <InputForTeacherInvitation content="نام مکان برگزاری همایش"/>
          <InputForTeacherInvitation content="تلفن همراه"/>
          <InputForTeacherInvitation content="تلفن ثابت"/>
        </div>
        </div>

        </div>
        </div>
        <div className="w-full bg-white sm:border-stone-300 sm:border sm:rounded-xl px-2 xs:my-10 my-20 text-sm sm:text-base">
        <div className=" w-full   h-max py-10 border-stone-300  flex flex-col">
        <div className="w-full h-max flex flex-col items-center gap-y-3 mb-8 ">
        <div className="flex items-center justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" className='w-10 fill-cyan-700' viewBox="0 0 24 24" ><path d="M5 11V13H19V11H5Z"></path></svg>
          <h2 className="xs:text-sm text-xl font-bold">مشخصات برنامه درخواستی به ترتیب اولویت</h2>
        </div>
        <p className="xs:text-[10px]">لطفا پیش از ارسال ایمیل و تماس تلفنی،ابتدا <span className="text-cyan-600">قوانین</span> را مشاهده کنید.</p>
        </div>
        <div className="w-full px-4  flex  h-max ">
        <div className="w-full  h-max  flex   gap-y-3  flex-row justify-start gap-x-3 items-center flex-wrap" >
          <InputForTeacherInvitation content="موضوع اول"/>
          <InputForTeacherInvitation content="موضوع دوم"/>

          <div className="flex flex-col w-full items-start gap-y-4 xs:text-[10px]  ">
          <p className="font-bold xs:text-[12px] pt-8">تاریخ پیشنهادی یا بازه زمانی</p>
          
          <div className="flex items-center flex-wrap gap-y-5 justify-start gap-x-8 sm:gap-x-12">

          
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[140px]" width="w-[150px]" id="ra-1" name={"Participant-range"} value="انتخاب بازه زمانی"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[140px]" width="w-[150px]" id="ra-1" name={"Participant-range"} value="به انتخاب موسسه"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[140px]" width="w-[150px]" id="ra-1" name={"Participant-range"} value="تاریخ دقیق"/>

          </div>
         
         <div className=" mt-4 h-max w-max flex items-center xs:gap-x-3  gap-x-8 xs:text-[10px]">
                  <div className="flex items-center justify-center xs:gap-x-2 gap-x-3 h-max">
                    <p>از تاریخ</p>
                    <input  type="date" value="1400-01-01" className="h-12 xs:w-20 xs:h-8 border border-stone-300 rounded-xl" />
                  </div>
                  <div className="flex items-center justify-center xs:gap-x-2 gap-x-3 h-max">
                    <p>تا تاریخ</p>
                    <input  type="date" value="1400-01-01" className="h-12 xs:w-20 xs:h-8 border border-stone-300 rounded-xl" />
                  </div>
         </div>
          </div>

         
          <QuestionRadioButton>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-2" name={"Participant-range"} value="عمومی"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-3" name={"Participant-range"} value="دوره اردویی"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-4" name={"Participant-range"} value="کارمندان"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-5" name={"Participant-range"} value="خصوصی"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-6" name={"Participant-range"} value="خانواده"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-7" name={"Participant-range"} value="دانشجویی"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-8" name={"Participant-range"} value="سایر"/>
          </QuestionRadioButton>
         
          <div className="w-full h-max mt-12 flex items-center flex-wrap ">
          <div className="flex flex-col  gap-y-6 xs:text-[10px]  ">
          <p className="font-bold xs:text-[12px] pt-8">تعداد تقریبی شرکت کنندگان</p>
          <SelectOptionForTeacherInvite items={states} content="ظرفیت دقیق محل پیشنهادی"/>
          </div>
          </div>
          <QuestionRadioButton>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-2" name={"Participant-range"} value="بله"/>
          <RadioButtonForTeacherInvitation xsWidth="xs:w-[95px]" width="w-[95px]" id="ra-3" name={"Participant-range"} value="خیر"/>
          </QuestionRadioButton>

        </div>
        </div>

        </div>
        </div>
      </div>
        <div className="container h-max mx-auto flex justify-center items-center ">
          <button className="xs:w-32 xs:h-12 xs:text-sm w-40 h-16 bg-cyan-600 text-white font-bold rounded-xl">دعوت از استاد</button>
        </div>
    </div>
  );
}
