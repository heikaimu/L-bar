我的贴吧数据库设计：
	
	主题->
	theme: {
		ID:主键(int)
		theme:主题(varchar-32)
	}

	帖子->
	post_bar: {
		ID:主键(int)
		desc:标题(varchar-128)
		details:详情(text)
		add_time:添加时间(date-time)
		user_id:楼主(int)
		theme_id:外键主题
	}

	回复->
	reply: {
		ID:主键(int)
		details:回复的内容(text)
		add_time:回复时间(date-time)
		post_bar_id:回复的帖子外键id(int)
		user_id:回复的人(int)
	}

	二次回复->
	sub_reply: {
		ID:主键(int)
		details:回复的内容(varchar-256)
		add_time:回复时间(date-time)
		reply_id:回复的一次回复外键id(int)
		user_id:回复的人(int)
	}

	用户->
	user: {
		ID:主键(int)
		acount:账户(varchar-32)
		password:密码(varchar-32)
		head_thumb：头像(varchar-128)
		nickname:昵称(varchar-32
	}