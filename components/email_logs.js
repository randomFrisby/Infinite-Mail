const emailLogsComponent = () => {
    // put the html content here and return it
    return `<!-- Top Section  -->
            <nav>
                <div class="left page-title">
                    Email Logs
                </div>
                <div class="right">
                    <div class="total-messages-sent">
                        <p>Total messages sent&nbsp;:&nbsp;&nbsp;</p>
                        <p id="get-messages" class="font-bold">7</p>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <select id="day-filter" class="form-select">
                        <option value="">Choose</option>
                        <option value="today">Today</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                </div>
            </nav>
            <!-- Filter Section  -->
            <div id="filter-section">
                <table>
                    <thead>
                        <tr>
                            <th>Spam</th>
                            <th>Check Delivery</th>
                            <th>Domain</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select id="spam-filter" class="form-select">
                                    <option value="">Choose</option>
                                    <option value="spam">Spam</option>
                                    <option value="not-spam">Not Spam</option>
                                </select>
                            </td>
                            <td>
                                <select id="delivery-filter" class="form-select">
                                    <option value="">Choose</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="not-delivered">Not Delivered</option>
                                </select>
                            </td>
                            <td>
                                <select id="domain-filter" class="form-select">
                                    <option value="">Choose</option>
                                    <option value="yahoo">Yahoo</option>
                                    <option value="gmail">Gmail</option>
                                    <option value="outlook">Outlook</option>
                                    <option value="others">Others</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button id="clear-filter-btn" class="btn btn-primary">Reset Filters</button>
            </div>
            <!-- Table Section  -->
            <div id="table-section">
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                    <tr class="table-primary">
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th>Email</th>
                        <th scope="col">Sent at</th>
                        <th scope="col">Opens/Clicks</th>
                    </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                </table>
            </div>`;

};

// export the file

export default emailLogsComponent;