import createBaseActions from './requests';

export const NAME = 'USERS';

const controller = 'users';

const base = createBaseActions(
	{
		controller,
		name: NAME
	}
);

const actionTypes = base.actionTypes;

const {
	index
} = base.actions;

export {
	actionTypes,
	index as indexUsers
};