class UserRequest {
	constructor() {
		this.requestText = null;
		this.user = null;
	}

	getRequestText() {
		return this.requestText;
	}

	setRequestText(requestText) {
		this.requestText = requestText;
	}

	getUser() {
		return this.user;
	}

	setUser(user) {
		this.user = user;
	}
}

class AddCartItemRequest extends UserRequest {
	constructor() {
		super();
		this.itemAlias = null;
		this.itemQuantity = null;
	}

	getItemAlias() {
		return this.itemAlias;
	}

	getItemQuantity() { 
		return this.itemQuantity;
	}

	setItemAlias(itemAlias) {
		this.itemAlias = itemAlias;
	}

	setItemQuantity(itemQuantity) {
		this.itemQuantity = itemQuantity;
	}
}

class AddUserAliasRequest extends UserRequest {
	constructor() {
		super();
		this.aliasLink = null;
		this.aliasName = null;		
	}

	getAliasLink() {
		return this.aliasLink;
	}

	setAliasLink(aliasLink) {
		this.aliasLink = aliasLink;
	}

	getAliasName() {
		return this.aliasName;
	}

	setAliasName(aliasName) {
		this.aliasName = aliasName;
	}
}

class DisplayProductSearchRequest extends UserRequest {
	constructor() {
		super();
		this.productName = null;
	}

	getProductName() {
		return this.productName;
	}

	setProductName(productName) {
		this.productName = productName;
	}
}

class DisplayUserAliasesRequest extends UserRequest {
	constructor() {
		super();
	}
}

class DisplayUserCartRequest extends UserRequest {
	constructor() {
		super();
	}
}

module.exports = {
	AddCartItemRequest,
	AddUserAliasRequest,
	DisplayProductSearchRequest,
	DisplayUserAliasesRequest,
	DisplayUserCartRequest	
};