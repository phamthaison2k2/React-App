

function NotFound() {

    return (
        <div>
            <h2>
                Trang này không hiển thị
            </h2>
            <h3 style={{
                padding: '10px',
                lineHeight: '30px'
            }}>
                Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra <br/> xem liên kết mà bạn đang cố mở có chính xác không.
            </h3>
            {/* <button >Đi tới Home</button> */}
        </div>
    )
}

export default NotFound;