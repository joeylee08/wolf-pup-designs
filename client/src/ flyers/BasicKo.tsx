import wolfpuplogo from "../assets/images/wolfpuplogo.png";

const FlyerKo = () => {
	return (
		<div className='mainPage flyer'>
			<h2 className='flyerLink'>wolfpupdesigns.org</h2>
			<div className='child child1'>
				<img src={wolfpuplogo} alt="WolfPupDesigns Logo" />
				<div>
					<h1>Wolf Pup Designs</h1>
					<h3>Custom Web Application Pricing</h3>
				</div>
			</div>
			<div className='child child3'>
				<h2 className='sectionHeading'>기본 웹사이트 <span>$800</span></h2>
				<p>개인 및 비즈니스를 위한 전문적인 디자인의 모바일 친화형 웹사이트입니다. 메뉴를 통해 이동할 수 있는 최대 5개의 페이지로 구성되며, 원하시는 디자인과 스타일에 맞춰 제작해 드립니다.</p>
				<br/>
				<p>웹사이트에 포함할 수 있는 콘텐츠:</p>
				<p>a. 고객님께서 제공하시는 제목, 본문 및 기타 문구 (최초 1회 등록)</p>
				<p>b. 고객님께서 제공하시는 사진 및 이미지 (최초 1회 등록)</p>
				<p>c. 유튜브 동영상 삽입 링크</p>
				<p>d. 사업장 위치를 표시하는 구글 지도 삽입</p>
				<p>e. 이메일 및 기타 웹사이트 링크</p>
			</div>
			<div className='child child3 complete'>
				<h2 className='sectionHeading'>종합 웹사이트 패키지 <span>$1,800</span></h2>
				<p>01 / 기본 웹사이트 <span>+ $800</span></p>
				<p>02 / 게시물 및 목록 관리 시스템 <span>+ $600</span></p>
				<p>03 / 맞춤형 사진 관리 대시보드 <span>+ $400</span></p>
				<p>04 / 유튜브 재생목록 연동 <span style={{ color: 'green', fontWeight: '450'}}>+ FREE</span></p>
			</div>
			<div className="child child4">
				<h2 className='sectionHeading'>기본 웹사이트 추가 옵션+</h2>
				<p>01 / 시물 및 목록 관리 시스템 <span>+ $600</span></p>
				<p>고객님께서 보안이 적용된 관리자 페이지를 통해 직접 게시물을 등록, 관리 및 삭제할 수 있는 맞춤형 콘텐츠 관리 기능입니다.
					 게시물, 데이터 항목, 각종 기록 등 필요에 따라 다양한 형태로 구성할 수 있습니다.
					 등록된 데이터는 내부 관리용으로 보관하거나 웹사이트에 공개할 수 있습니다. 사진 및 파일 첨부도 가능합니다.</p>
				<br/>
				<p>02 / 맞춤형 사진 관리 대시보드 <span>+ $400</span></p>
				<p>고객님께서는 보안이 적용된 관리자 페이지를 통해 모바일이나 컴퓨터에서 언제 어디서나 사진을 직접 업로드하실 수 있습니다.
					 업로드한 사진에는 설명 문구를 추가할 수 있으며, 관리자 페이지에서 간편하게 삭제할 수 있습니다.
					 업로드된 사진은 기본적으로 고객님의 웹사이트에 하나의 사진 갤러리 형태로 표시됩니다.</p>
				<br/>
				<p>03 / 유튜브 재생목록 연동 <span>+ $200</span></p>
				<p>이 기능은 동영상을 직접 호스팅하는 서비스가 아니라, 유튜브 재생목록을 웹사이트에 연동하여 보여주는 맞춤형 기능입니다.
					 고객님께서는 웹사이트 제작이 완료되기 전까지 연동할 유튜브 재생목록 링크를 제공해 주시면 됩니다.</p>
				<br/>
				<p>04 / 온라인 결제 연동 <span>+ $300</span></p>
				<p>Stripe를 통해 안전한 일회성 온라인 결제를 받을 수 있습니다. 정기 구독 결제도 Stripe를 통해 설정하고 관리할 수 있습니다.</p>
			</div>
		</div>
	)
}

export default FlyerKo