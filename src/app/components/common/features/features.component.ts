import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

    constructor(
        public router: Router
    ) { }
    
    featuresContent = [
        {
            image1: `assets/imgs/n3.jpg`,
            image2: `assets/imgs/1.jpeg`,
            image3: `assets/imgs/3.jpeg`,
            image4: `assets/imgs/4.jpeg`,
            title: `กองบัญชาการกองทัพไทย`,
            paragraph: `มีหน้าที่ควบคุม อำนวยการ สั่งการ และกำกับดูแล การดำเนินงานของส่วนราชการในกองทัพไทย ในการเตรียมกำลัง การป้องกันราชอาณาจักร และการดำเนินการเกี่ยวกับการใช้กำลังทหาร ตามอำนาจหน้าที่ของกระทรวงกลาโหมให้เกิดประสิทธิภาพสูงสุด มีผู้บัญชาการทหารสูงสุด เป็นผู้บังคับบัญชารับผิดชอบ .. คลิกดูรายละเอียดเพิ่มเติม`,
            list: [
                {
                    title: `อำนาจหน้าที่`,
                    url:'/page/function'
                },
                {
                    title: `คณะผู้บังคับบัญชา`,
                    url:'/page/present-commander'
                },
                {
                    title: `นโยบายผู้บังคับบัญชาทหารสูงสุด`,
                    url:'/page/commander-policy'
                },
                {
                    title: `ส่วนราชการในกองบัญชาการ`,
                    url:'/page/agency'
                },
                {
                    title: `กิจกรรมทั่วไป`,
                    url:'/news/activity/1/กิจกรรมหน่วยงาน'
                },
                {
                    title: `งานช่วยเหลือประชาชน`,
                    url:'/news/people/1/ช่วยเหลือประชาชน'
                },
                {
                    title: `สร้างความร่วมมือกับมิตรประเทศ`,
                    url:'/'
                }
            ],
            buttonText: ``,
            buttonLink: ``
        }
    ]
    
    forpeopleContent = [
        {
            image1: `assets/imgs/n3.jpg`,
            image2: `assets/imgs/1.jpeg`,
            image3: `assets/imgs/3.jpeg`, 
            title: `บริการสำหรับประชาชน`,
            paragraph: `กองบัญชาการกองทัพไทย มีหน้าที่ควบคุม อำนวยการ สั่งการ และกำกับดูแล การดำเนินงานของส่วนราชการในกองทัพไทย ในการเตรียมกำลัง การป้องกันราชอาณาจักร และการดำเนินการเกี่ยวกับการใช้กำลังทหาร ตามอำนาจหน้าที่ของกระทรวงกลาโหมให้เกิดประสิทธิภาพสูงสุด มีผู้บัญชาการทหารสูงสุด เป็นผู้บังคับบัญชารับผิดชอบ .. คลิกดูรายละเอียดเพิ่มเติม`,
            list: [
                {
                    title: `ท่องเที่ยวในเขตทหาร`,
                    url:'/'
                },
                {
                    title: `ข่าวรับสมัคร`,
                    url:'/service/list/apply/ประกาศรับสมัคร'
                },
                {
                    title: `บริการแบบฟอร์ม`,
                    url:'/service/list/doc/บริการแบบฟอร์ม'
                },
                {
                    title: `แจ้งเรื่องร้องเรียน`,
                    url:'/'
                },
                {
                    title: `ศูนย์บริการข้อมูลแบบเบ็ดเสร็จ`,
                    url:'/'
                },
                {
                    title: `ศูนย์ข้อมูลข่าวสาร`,
                    url:'/'
                },
                {
                    title: `ประกาศจัดซื้อจัดจ้าง`,
                    url:'/service/list/budget/ประกาศจัดซื้อจัดจ้าง'
                }
            ],
            buttonText: ``,
            buttonLink: ``
        }
    ]
    
    forsoldiersContent = [
        {
            image1: `assets/imgs/n3.jpg`,
            image2: `assets/imgs/1.jpeg`,
            image3: `assets/imgs/3.jpeg`, 
            title: `บริการสำหรับทหาร`,
            paragraph: `กองบัญชาการกองทัพไทย มีหน้าที่ควบคุม อำนวยการ สั่งการ และกำกับดูแล การดำเนินงานของส่วนราชการในกองทัพไทย ในการเตรียมกำลัง การป้องกันราชอาณาจักร และการดำเนินการเกี่ยวกับการใช้กำลังทหาร ตามอำนาจหน้าที่ของกระทรวงกลาโหมให้เกิดประสิทธิภาพสูงสุด มีผู้บัญชาการทหารสูงสุด เป็นผู้บังคับบัญชารับผิดชอบ .. คลิกดูรายละเอียดเพิ่มเติม`,
            list: [
                {
                    title: `My RTARF`,
                    url:'/'
                },
                {
                    title: `RTARF Mail`,
                    url:'/'
                },
                {
                    title: `RTARF Drive`,
                    url:''
                }, 
            ],
            buttonText: ``,
            buttonLink: ``
        }
    ] 

}